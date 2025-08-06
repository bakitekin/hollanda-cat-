import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import { getDictionary } from '../../get-dictionary';
import { Locale } from '../../i18n-config';

const PhotoGallery = async ({ lang }: { lang: Locale }) => {
  const dictionary = await getDictionary(lang);
  const t = dictionary.components.photo_gallery;

  const imageDirectory = path.join(process.cwd(), 'public/images');
  const imageFilenames = fs.readdirSync(imageDirectory).filter(file => 
    /\.(jpe?g|png|gif)$/i.test(file) && !file.includes('logo')
  );

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {imageFilenames.map((filename, index) => (
            <div key={index} className="overflow-hidden rounded-lg break-inside-avoid">
              <Image
                src={`/images/${filename}`}
                alt={`Proje fotoğrafı ${index + 1}`}
                width={500}
                height={500}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
