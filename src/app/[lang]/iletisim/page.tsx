import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock,
  User,
  CheckCircle,
  UserCircle,
  AlertTriangle,
  Zap,
  Wrench,
  Check
} from 'lucide-react';
import { getDictionary } from '../../../../get-dictionary';
import { Locale } from '../../../../i18n-config';

const IletisimPage = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const dictionary = getDictionary(lang);
  const t = dictionary.page.contact;
  
  const phoneNumber = '+31 6 29188688';
  const whatsappNumber = '31629188688';
  const ownerName = t.owner_highlight.name;

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
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          {/* Owner Contact Highlight */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/30 text-center">
              <UserCircle className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-2">{ownerName}</h2>
              <p className="text-blue-400 font-semibold text-xl mb-4">{t.owner_highlight.role}</p>
              <p className="text-gray-300 mb-6">{t.owner_highlight.experience}</p>
              
              <div className="space-y-4">
                <a 
                  href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                  className="block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-6 h-6" />
                    <span className="text-xl">{phoneNumber}</span>
                  </div>
                  <p className="text-blue-200 text-sm mt-1">{t.owner_highlight.call_button_subtext}</p>
                </a>
                
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t.owner_highlight.whatsapp_message)}`}
                  target="_blank"
                  className="block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <MessageCircle className="w-6 h-6" />
                    <span className="text-xl">{t.owner_highlight.whatsapp_button_text}</span>
                  </div>
                  <p className="text-green-200 text-sm mt-1">{t.owner_highlight.whatsapp_button_subtext}</p>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.contact_methods.map((method, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 text-center group hover:-translate-y-2 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon === "Phone" && <Phone className="w-8 h-8 text-white" />}
                  {method.icon === "MessageCircle" && <MessageCircle className="w-8 h-8 text-white" />}
                  {method.icon === "Mail" && <Mail className="w-8 h-8 text-white" />}
                  {method.icon === "Clock" && <Clock className="w-8 h-8 text-white" />}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-gray-300 mb-4">{method.subtitle}</p>
                <a href={method.link} className={`${method.link_color} hover:opacity-80 font-semibold`}>
                  {method.link_text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t.service_areas.title}</h2>
            <p className="text-xl text-gray-300">{t.service_areas.subtitle}</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {t.service_areas.cities.map((city, index) => (
              <div key={index} className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-3 text-center border border-gray-600/30 hover:border-blue-500/50 transition-colors duration-300">
                <MapPin className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                <p className="text-white text-sm font-semibold">{city}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-300">{t.service_areas.footer_text_part1} <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="text-blue-400 hover:text-blue-300">{t.service_areas.footer_text_part2}</a></p>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6 flex items-center justify-center gap-2"><AlertTriangle className="w-8 h-8 text-red-500" /> {t.emergency.title}</h2>
            <p className="text-xl text-gray-300 mb-8" dangerouslySetInnerHTML={{ __html: t.emergency.subtitle }} />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <Zap className="w-8 h-8 text-red-400 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">{t.emergency.steps[0].title}</h3>
                  <p className="text-gray-300 text-sm">{t.emergency.steps[0].description}</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <Wrench className="w-8 h-8 text-red-400 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">{t.emergency.steps[1].title}</h3>
                  <p className="text-gray-300 text-sm">{t.emergency.steps[1].description}</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <Check className="w-8 h-8 text-red-400 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">{t.emergency.steps[2].title}</h3>
                  <p className="text-gray-300 text-sm">{t.emergency.steps[2].description}</p>
                </div>
            </div>
            
            <a 
              href={`tel:${phoneNumber.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl text-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              {t.emergency.button_text} {phoneNumber}
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Contact */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t.why_choose_us.title}</h2>
            <p className="text-xl text-gray-300">{t.why_choose_us.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.why_choose_us.reasons.map((reason, index) => (
               <div key={index} className="text-center">
                 <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    {reason.icon === 'CheckCircle' && <CheckCircle className="w-8 h-8 text-white" />}
                    {reason.icon === 'User' && <User className="w-8 h-8 text-white" />}
                    {reason.icon === 'Clock' && <Clock className="w-8 h-8 text-white" />}
                    {reason.icon === 'MapPin' && <MapPin className="w-8 h-8 text-white" />}
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                 <p className="text-gray-300">{reason.description}</p>
               </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default IletisimPage;