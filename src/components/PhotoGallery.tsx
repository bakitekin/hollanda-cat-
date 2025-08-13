import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import { getDictionary } from '../../get-dictionary';
import { Locale } from '../../i18n-config';

const PhotoGallery = async ({ lang }: { lang: Locale }) => {
  const dictionary = await getDictionary(lang);
  const t = dictionary.components.photo_gallery;

  const burakDirectory = path.join(process.cwd(), 'public/images/burak');
  const defaultDirectory = path.join(process.cwd(), 'public/images');

  const baseDirectory = fs.existsSync(burakDirectory) ? burakDirectory : defaultDirectory;
  const imageFilenames = fs
    .readdirSync(baseDirectory)
    .filter((file) => /\.(jpe?g|png|gif)$/i.test(file) && !file.toLowerCase().includes('logo'));

  const images = imageFilenames.map((filename) => `${baseDirectory.endsWith('/burak') ? '/images/burak' : '/images'}/${filename}`);

  return (
    <section className="py-16 bg-paper">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">{t.title}</h2>
          <p className="text-xl text-ink/70 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, index) => (
            <div key={index} className="relative h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden border border-gray-200">
              <Image
                src={src}
                alt={`${t.title} ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
