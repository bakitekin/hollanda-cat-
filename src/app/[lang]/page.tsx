import React from 'react';
import FeaturedServices from '@/components/FeaturedServices';
import WhyChooseUs from '@/components/WhyChooseUs';
import HeroSlider from '@/components/HeroSlider';
import fs from 'fs';
import path from 'path';
import { getDictionary } from '../../../get-dictionary';
import { Locale } from '../../../i18n-config';
import { MessageCircle, Phone } from 'lucide-react';

const HomePage = async ({
  params,
}: {
  params: { lang: Locale };
}) => {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const t = dictionary.page.home;

  const title = t.title
    .replace(/<1>(.*?)<\/1>/g, '<span class="text-blue-400">$1</span>')
    .replace(/<2>(.*?)<\/2>/g, '<br class="hidden md:block" /><span class="text-blue-400">$1</span>');

  const burakDir = path.join(process.cwd(), 'public/images/burak');
  const defaultDir = path.join(process.cwd(), 'public/images');
  const useBurak = fs.existsSync(burakDir);
  const dirToUse = useBurak ? burakDir : defaultDir;
  const heroImages = fs
    .readdirSync(dirToUse)
    .filter((f) => /\.(jpe?g|png)$/i.test(f) && !f.toLowerCase().includes('logo'))
    .sort()
    .slice(0, 6)
    .map((f) => `${useBurak ? '/images/burak' : '/images'}/${f}`);

  return (
    <>
      <HeroSlider
        images={heroImages}
        titleHtml={title}
        description={t.description}
        whatsappText={t.whatsapp_button}
        callText={t.call_button}
        badges={t.badges}
      />

      {/* About teaser */}
      <section className="bg-paper py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-ink mb-2">{dictionary.page.about.team.title}</h3>
              <p className="text-ink/70 max-w-3xl">{dictionary.page.about.team.subtitle}</p>
            </div>
            <a href={`/${lang}/hakkimizda`} className="inline-flex items-center justify-center bg-accent text-white font-semibold py-3 px-6 rounded-lg hover:brightness-95 transition-all duration-200">{dictionary.components.header.nav.about}</a>
          </div>
        </div>
      </section>
      <FeaturedServices lang={lang} />
      <WhyChooseUs lang={lang} />
    </>
  );
};

export default HomePage;
