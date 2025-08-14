import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import dynamic from 'next/dynamic';
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

  const GalleryClient = dynamic(() => import('./GalleryClient'), { ssr: false });

  return (
    <section className="py-16 bg-paper">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">{t.title}</h2>
          <p className="text-xl text-ink/70 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
        <GalleryClient images={images} />
      </div>
    </section>
  );
};

export default PhotoGallery;
