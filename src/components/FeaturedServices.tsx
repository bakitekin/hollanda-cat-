import React from 'react';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import { Hammer, Wrench, Home, ArrowRight } from 'lucide-react';
import { Locale } from '../../i18n-config';
import { getDictionary } from '../../get-dictionary';

const serviceIcons: { [key: string]: React.ElementType } = {
  "Nieuwbouw Dak": Hammer,
  "Dak Reparatie & Onderhoud": Wrench,
  "Dakisolatie": Home,
  "New Roof Construction": Hammer,
  "Roof Repair and Maintenance": Wrench,
  "Roof Insulation": Home,
};

export default async function FeaturedServices({ lang }: { lang: Locale }) {
  const dictionary = await getDictionary(lang);
  const t = dictionary.components.featured_services;

  const services = t.services.map(service => {
    const key = Object.keys(serviceIcons).find(k => service.title.includes(k.split(' ')[0]));
    return {
      ...service,
      icon: key ? serviceIcons[key] : Home
    }
  });

  // Fotoğraf ağırlıklı, sade kartlar için görselleri hazırla
  const burakDir = path.join(process.cwd(), 'public/images/burak');
  const defaultDir = path.join(process.cwd(), 'public/images');
  const useBurak = fs.existsSync(burakDir);
  const dirToUse = useBurak ? burakDir : defaultDir;
  const galleryImages = fs
    .readdirSync(dirToUse)
    .filter((f) => /\.(jpe?g|png)$/i.test(f) && !f.toLowerCase().includes('logo'))
    .slice(0, services.length);

  return (
    <section className="py-16 bg-paper">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-ink">{t.title}</h2>
          <p className="text-base md:text-lg text-ink/70 max-w-2xl mx-auto mt-3">{t.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const imageFile = galleryImages[index % galleryImages.length];
            const imageUrl = imageFile
              ? `${useBurak ? '/images/burak' : '/images'}/${imageFile}`
              : '/images/genel-1.jpeg';
            return (
              <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200">
                <div className="relative h-40 w-full">
                  <Image src={imageUrl} alt={service.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2 text-ink">
                    <IconComponent className="w-5 h-5 text-accent" />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-ink/70 text-sm leading-relaxed mb-5">{service.description}</p>
                  <a
                    href={`/${lang}/referanslar#contact`}
                    className="inline-flex items-center gap-2 text-accent hover:brightness-90 text-sm font-medium"
                  >
                    <span>{t.button_text}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}