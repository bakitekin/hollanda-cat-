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

export default async function WhyChooseUs({ lang }: { lang: Locale }) {
  const dictionary = await getDictionary(lang);
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
    <section className="py-16 bg-paper">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3">{t.title}</h2>
          <p className="text-base md:text-lg text-ink/70 max-w-2xl mx-auto">{t.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-paper mx-auto mb-4 border border-gray-200">
                  <IconComponent className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-ink">{reason.title}</h3>
                <p className="text-ink/70 text-sm leading-relaxed max-w-xs mx-auto">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}