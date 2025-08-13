import { Star, Quote, MapPin, Calendar, CheckCircle, UserCircle, Building, Home, Trophy, Shield, FileText, Zap, MessageCircle, Phone, Mail, Clock } from 'lucide-react';
import fs from 'fs';
import path from 'path';
import { getDictionary } from '../../../../get-dictionary';
import { Locale } from '../../../../i18n-config';

const ReferanslarPage = async ({
  params,
}: {
  params: { lang: Locale };
}) => {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const t = dictionary.page.references;
  const c = dictionary.page.contact;
  const burakDir = path.join(process.cwd(), 'public/images/burak');
  const defaultDir = path.join(process.cwd(), 'public/images');
  const useBurak = fs.existsSync(burakDir);
  const dirToUse = useBurak ? burakDir : defaultDir;
  const heroCandidate = fs
    .readdirSync(dirToUse)
    .filter((f) => /\.(jpe?g|png)$/i.test(f) && !f.toLowerCase().includes('logo'))
    .sort()[0];
  const heroImageUrl = heroCandidate
    ? `${useBurak ? '/images/burak' : '/images'}/${heroCandidate}`
    : '/images/genel-1.jpeg';

  const testimonials = t.testimonials;
  const projects = t.projects;
  const stats = t.stats;
  const trustIndicators = t.trust_indicators;
  const phoneNumber = '+31 6 29188688';
  const whatsappNumber = '31629188688';
  const ownerName = c.owner_highlight.name;

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
    <main className="bg-paper text-ink min-h-screen pt-24">
      {/* Hero Section */}
      <section
        className="relative py-20 bg-center bg-cover"
        style={{ backgroundImage: `url(${heroImageUrl})` }}
      >
        <div className="absolute inset-0 bg-paper/70 backdrop-blur-[1px]"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-ink">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-ink/70 mb-8 max-w-4xl mx-auto">
            {t.hero.subtitle}
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="text-2xl md:text-3xl font-bold text-ink mb-1">{stat.number}</div>
                <p className="text-ink/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-paper">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ink mb-4">{t.testimonials_section.title}</h2>
            <p className="text-xl text-ink/70">{t.testimonials_section.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-6 border border-gray-200 hover:-translate-y-1 transition-transform duration-200 group shadow-sm">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <UserCircle className="w-10 h-10 text-accent" />
                    <div>
                      <h3 className="text-lg font-bold text-ink">{testimonial.name}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <MapPin className="w-3 h-3" />
                        <span>{testimonial.location}</span>
                        <Calendar className="w-3 h-3 ml-2" />
                        <span>{testimonial.date}</span>
                      </div>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-accent" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-sun fill-current" />
                  ))}
                </div>

                {/* Service */}
                  <div className="mb-4">
                    <span className="bg-lavender/20 text-ink px-3 py-1 rounded-full text-xs font-semibold border border-lavender/40">
                    {testimonial.service}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-ink/70 leading-relaxed">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-paper">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ink mb-4">{t.projects_section.title}</h2>
            <p className="text-xl text-ink/70">{t.projects_section.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = projectIcons[project.title] || Home;
              return (
                <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-200 group hover:-translate-y-1 transition-transform duration-200 shadow-sm">
                  {/* Project Image/Icon */}
                  <div className="bg-lavender/20 p-8 text-center border-b border-lavender/30">
                    <IconComponent className="w-16 h-16 text-accent mx-auto mb-4" />
                    <div className="text-ink text-sm font-semibold">{project.year}</div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-ink mb-2">{project.title}</h3>
                    <div className="flex items-center space-x-2 text-ink/60 mb-3">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <p className="text-ink/70 mb-4 leading-relaxed">{project.description}</p>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-accent" />
                          <span className="text-ink/70 text-sm">{feature}</span>
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
      <section className="py-20 bg-paper">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-ink mb-8">{t.trust_section.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustIndicators.map((indicator, index) => {
               const IconComponent = trustIcons[indicator.title] || Zap;
               return (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <IconComponent className="w-10 h-10 text-accent mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-ink mb-2">{indicator.title}</h3>
                  <p className="text-ink/70 text-sm">{indicator.subtitle}</p>
                </div>
               );
            })}
          </div>
        </div>
      </section>

      {/* CTA to Contact */}
      <section className="py-16 bg-paper">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-ink mb-4">{t.cta.title}</h2>
          <p className="text-lg text-ink/70 mb-6 max-w-2xl mx-auto">{t.cta.subtitle}</p>
          <a href={`#contact`} className="inline-flex items-center justify-center bg-accent text-white font-bold py-4 px-8 rounded-xl hover:brightness-95 transition-colors duration-200">
            <MessageCircle className="w-5 h-5 mr-2" />
            {t.cta.button}
          </a>
        </div>
      </section>

      {/* Combined Contact Section */}
      <section id="contact" className="py-20 bg-paper">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <UserCircle className="w-16 h-16 text-accent mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-ink mb-2">{ownerName}</h2>
              <p className="text-accent font-semibold text-lg mb-2">{c.owner_highlight.role}</p>
              <p className="text-ink/70 mb-6">{c.owner_highlight.experience}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a 
                  href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                  className="inline-flex items-center justify-center bg-accent hover:brightness-95 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  <span>{phoneNumber}</span>
                </a>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(c.owner_highlight.whatsapp_message)}`}
                  target="_blank"
                  className="inline-flex items-center justify-center bg-lavender hover:brightness-95 text-ink font-semibold py-3 px-6 rounded-xl transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  <span>{c.owner_highlight.whatsapp_button_text}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {c.contact_methods.map((method: any, index: number) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 text-center group hover:-translate-y-1 transition-transform duration-200">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                  {method.icon === "Phone" && <Phone className="w-8 h-8" />}
                  {method.icon === "MessageCircle" && <MessageCircle className="w-8 h-8" />}
                  {method.icon === "Mail" && <Mail className="w-8 h-8" />}
                  {method.icon === "Clock" && <Clock className="w-8 h-8" />}
                </div>
                <h3 className="text-xl font-bold text-ink mb-2">{method.title}</h3>
                <p className="text-ink/70 mb-4">{method.subtitle}</p>
                <a href={method.link} className="text-accent font-semibold hover:brightness-95">
                  {method.link_text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ReferanslarPage;
