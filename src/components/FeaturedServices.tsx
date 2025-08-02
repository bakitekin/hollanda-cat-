import React from 'react';
import { Hammer, Wrench, Home, ArrowRight, Star, Clock, Shield } from 'lucide-react';
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

export default function FeaturedServices({ lang }: { lang: Locale }) {
  const dictionary = getDictionary(lang);
  const t = dictionary.components.featured_services;

  const services = t.services.map(service => {
    const key = Object.keys(serviceIcons).find(k => service.title.includes(k.split(' ')[0]));
    return {
      ...service,
      icon: key ? serviceIcons[key] : Home,
      color: service.title.includes('Nieuwbouw') || service.title.includes('Construction') ? 'from-blue-500 to-blue-600' :
             service.title.includes('Reparatie') || service.title.includes('Repair') ? 'from-green-500 to-green-600' :
             'from-purple-500 to-purple-600'
    }
  });

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Star className="w-8 h-8 text-yellow-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">{t.title}</h2>
            <Star className="w-8 h-8 text-yellow-400" />
          </div>
          <div className="flex items-center justify-center space-x-2 text-xl text-gray-300 max-w-2xl mx-auto">
            <Shield className="w-5 h-5 text-blue-400" />
            <span>{t.description}</span>
            <Clock className="w-5 h-5 text-green-400" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700/50 text-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6 max-w-xs mx-auto">{service.description}</p>
                <a href={`/${lang}/hizmetlerimiz`} className="w-full bg-gray-700/50 hover:bg-blue-600 hover:text-white text-gray-300 font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg border border-gray-600/30 hover:border-blue-500/50">
                  <span>{t.button_text}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}