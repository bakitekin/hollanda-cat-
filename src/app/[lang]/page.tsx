import React from 'react';
import FeaturedServices from '@/components/FeaturedServices';
import WhyChooseUs from '@/components/WhyChooseUs';
import { getDictionary } from '../../../get-dictionary';
import { Locale } from '../../../i18n-config';
import { MessageCircle, Phone } from 'lucide-react';

const HomePage = async ({
  params,
}: {
  params: { lang: string };
}) => {
  const lang = params.lang;
  const dictionary = await getDictionary(lang as Locale);
  const t = dictionary.page.home;

  const title = t.title.replace(/<1>(.*?)<\/1>/g, '<span class="text-blue-400">$1</span>')
                       .replace(/<2>(.*?)<\/2>/g, '<br class="hidden md:block" /><span class="text-blue-400">$1</span>');

  return (
    <>
      <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-32 px-4 mt-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto text-center">
          <h1 
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            {t.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/31629188688?text=${encodeURIComponent('Merhaba! BRK DAK çatı hizmetleri hakkında bilgi almak istiyorum.')}`} target="_blank" className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
              <MessageCircle className="w-6 h-6" />
              <span>{t.whatsapp_button}</span>
            </a>
            <a href="tel:+31629188688" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
              <Phone className="w-6 h-6" />
              <span>{t.call_button}</span>
            </a>
          </div>
        </div>
      </div>
      <FeaturedServices lang={lang} />
      <WhyChooseUs lang={lang} />
    </>
  );
};

export default HomePage;
