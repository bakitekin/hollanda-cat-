import React from 'react';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';
import { Locale } from '../../i18n-config';
import { getDictionary } from '../../get-dictionary';

const reasonIcons: { [key: string]: React.ElementType } = {
  "Kwaliteitsmaterialen": Award,
  "Deskundig Team": Users,
  "Tijdige Oplevering": Clock,
  "Quality Materials": Award,
  "Expert Team": Users,
  "Timely Delivery": Clock,
};

export default function WhyChooseUs({ lang }: { lang: Locale }) {
  const dictionary = getDictionary(lang);
  const t = dictionary.components.why_choose_us;

  const reasons = t.reasons.map(reason => {
    const key = Object.keys(reasonIcons).find(k => reason.title.includes(k.split(' ')[0]));
    return {
      ...reason,
      icon: key ? reasonIcons[key] : CheckCircle,
      color: reason.title.includes('Materiaal') || reason.title.includes('Materials') ? 'from-purple-500 to-purple-600' :
             reason.title.includes('Team') ? 'from-green-500 to-green-600' :
             'from-yellow-500 to-yellow-600'
    }
  });

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div key={index} className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700/50 text-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${reason.color} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">{reason.title}</h3>
                <p className="text-gray-300 leading-relaxed max-w-xs mx-auto">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}