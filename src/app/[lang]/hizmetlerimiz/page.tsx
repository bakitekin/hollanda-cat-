import Image from 'next/image';
import ServicesNav from '@/components/ServicesNav';
import { 
  Hammer, 
  Wrench, 
  Home, 
  Shield, 
  Droplets, 
  Leaf,
  CheckCircle,
  Clock,
  Users,
  Star,
  Phone,
  Mail
} from 'lucide-react';
import { getDictionary } from '../../../../get-dictionary';
import { Locale } from '../../../../i18n-config';

const HizmetlerimizPage = async ({
  params,
}: {
  params: { lang: Locale };
}) => {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const t = dictionary.page.services;
  const detailsLabel = dictionary.components.featured_services.button_text;

  const services = [
    {
      id: 1,
      title: t.service_list.new_roof.title,
      description: t.service_list.new_roof.description,
      icon: Hammer,
      features: t.service_list.new_roof.features,
      color: 'from-blue-500 to-blue-700',
      image: '/images/genel-1.jpeg',
    },
    {
      id: 2,
      title: t.service_list.repair.title,
      description: t.service_list.repair.description,
      icon: Wrench,
      features: t.service_list.repair.features,
      color: 'from-green-500 to-green-700',
      image: '/images/genel-2.jpeg',
    },
    {
      id: 3,
      title: t.service_list.insulation.title,
      description: t.service_list.insulation.description,
      icon: Home,
      features: t.service_list.insulation.features,
      color: 'from-purple-500 to-purple-700',
      image: '/images/genel-3.jpeg',
    },
    {
      id: 4,
      title: t.service_list.waterproofing.title,
      description: t.service_list.waterproofing.description,
      icon: Shield,
      features: t.service_list.waterproofing.features,
      color: 'from-cyan-500 to-cyan-700',
      image: '/images/genel-10.jpeg',
    },
    {
      id: 5,
      title: t.service_list.gutters.title,
      description: t.service_list.gutters.description,
      icon: Droplets,
      features: t.service_list.gutters.features,
      color: 'from-indigo-500 to-indigo-700',
      image: '/images/genel-5.jpeg',
    },
    {
      id: 6,
      title: t.service_list.green_roof.title,
      description: t.service_list.green_roof.description,
      icon: Leaf,
      features: t.service_list.green_roof.features,
      color: 'from-emerald-500 to-emerald-700',
      image: '/images/genel-6.jpeg',
    }
  ];

  const whyChooseUs = [
    { icon: CheckCircle, text: t.why_choose_us.projects, color: 'text-green-400' },
    { icon: Clock, text: t.why_choose_us.emergency, color: 'text-blue-400' },
    { icon: Users, text: t.why_choose_us.team, color: 'text-purple-400' },
    { icon: Star, text: t.why_choose_us.satisfaction, color: 'text-yellow-400' }
  ];

  const navItems = services.slice(0, 6).map((s) => ({ id: s.title.toLowerCase().replace(/[^a-z0-9]+/gi, '-'), label: s.title }));

  return (
    <main className="bg-paper text-ink min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative bg-paper py-20">
        <div className="absolute inset-0 bg-paper/70"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-ink">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-ink/70 mb-8 max-w-4xl mx-auto">
            {t.hero.subtitle}
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-4 border border-gray-200">
                  <IconComponent className={`w-8 h-8 text-accent mx-auto mb-2`} />
                  <p className="text-ink font-semibold text-sm text-center">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sticky section nav */}
      <ServicesNav items={navItems} />

      {/* Services Grid */}
      <section className="py-20 bg-paper">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ink mb-4">{t.grid.title}</h2>
            <p className="text-xl text-ink/70">{t.grid.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} id={service.title.toLowerCase().replace(/[^a-z0-9]+/gi, '-')} className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-48 w-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                  </div>
                  <div className="p-8">
                    {/* Service Header */}
                    <div className="text-center mb-6">
                      <div className={`w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 -mt-20 relative z-10 border-4 border-white`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-ink mb-3">{service.title}</h3>
                      <p className="text-ink/70 leading-relaxed">{service.description}</p>
                    </div>

                    {/* Features Accordion */}
                    <details className="mb-6 group">
                      <summary className="cursor-pointer select-none text-ink font-semibold flex items-center gap-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-accent"></span>
                        {detailsLabel}
                      </summary>
                      <div className="mt-3 space-y-2">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-accent" />
                            <span className="text-ink/70 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </details>

                {/* CTA Button */}
                    <a href={`/${lang}/referanslar#contact`} className="block w-full bg-accent text-white font-semibold py-3 px-6 rounded-lg hover:brightness-95 transition-all duration-300 group-hover:shadow-lg text-center">
                      {t.grid.button_text}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-paper">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-ink mb-6">{t.cta.title}</h2>
          <p className="text-xl text-ink/70 mb-8 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+31629188688" className="inline-flex items-center justify-center bg-accent text-white font-bold py-4 px-8 rounded-xl hover:brightness-95 transition-colors duration-300">
              <Phone className="w-5 h-5 mr-2" />
              {t.cta.call_button}
            </a>
            <a href={`/${lang}/iletisim`} className="inline-flex items-center justify-center bg-lavender text-ink font-bold py-4 px-8 rounded-xl hover:brightness-95 transition-all duration-300">
              <Mail className="w-5 h-5 mr-2" />
              {t.cta.quote_button}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HizmetlerimizPage;
