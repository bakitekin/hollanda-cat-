import { Star, Quote, MapPin, Calendar, CheckCircle, UserCircle, Building, Home, Trophy, Shield, FileText, Zap, MessageCircle } from 'lucide-react';
import { getDictionary } from '../../../../get-dictionary';
import { Locale } from '../../../../i18n-config';

const ReferanslarPage = ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const dictionary = getDictionary(lang);
  const t = dictionary.page.references;

  const testimonials = t.testimonials;
  const projects = t.projects;
  const stats = t.stats;
  const trustIndicators = t.trust_indicators;

  const projectIcons: { [key: string]: React.ElementType } = {
    "Modern Villa Roof Renovation": Home,
    "Apartment Complex Waterproofing": Building,
    "Historic Building Restoration": Home,
    "Moderne Villa Dakrenovatie": Home,
    "Appartementencomplex Waterdichting": Building,
    "Restauratie Historisch Pand": Home
  };

  const trustIcons: { [key: string]: React.ElementType } = {
    "Industry Leader": Trophy,
    "Insured": Shield,
    "Certified": FileText,
    "Fast Service": Zap,
    "Industrieleider": Trophy,
    "Verzekerd": Shield,
    "Gecertificeerd": FileText,
    "Snelle Service": Zap
  };

  return (
    <main className="bg-gray-900 text-white min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            {t.hero.subtitle}
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t.testimonials_section.title}</h2>
            <p className="text-xl text-gray-300">{t.testimonials_section.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:-translate-y-2 transition-all duration-300 group">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <UserCircle className="w-10 h-10 text-blue-400" />
                    <div>
                      <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <MapPin className="w-3 h-3" />
                        <span>{testimonial.location}</span>
                        <Calendar className="w-3 h-3 ml-2" />
                        <span>{testimonial.date}</span>
                      </div>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-blue-400" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Service */}
                <div className="mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {testimonial.service}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-gray-300 leading-relaxed">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t.projects_section.title}</h2>
            <p className="text-xl text-gray-300">{t.projects_section.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = projectIcons[project.title] || Home;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 group hover:-translate-y-2 transition-all duration-300">
                  {/* Project Image/Icon */}
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-center">
                    <IconComponent className="w-16 h-16 text-white mx-auto mb-4" />
                    <div className="text-white text-sm font-semibold">{project.year}</div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex items-center space-x-2 text-gray-400 mb-3">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">{t.trust_section.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustIndicators.map((indicator, index) => {
               const IconComponent = trustIcons[indicator.title] || Zap;
               return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                  <IconComponent className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">{indicator.title}</h3>
                  <p className="text-gray-300 text-sm">{indicator.subtitle}</p>
                </div>
               );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{t.cta.title}</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>
          <a href={`/${lang}/iletisim`} className="inline-flex items-center justify-center bg-white text-blue-900 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-300">
            <MessageCircle className="w-5 h-5 mr-2" />
            {t.cta.button}
          </a>
        </div>
      </section>
    </main>
  );
};

export default ReferanslarPage;
