import { 
  Building2, 
  Users, 
  Award, 
  Globe, 
  Heart,
  Zap,
  Shield,
  TrendingUp,
  Clock,
  MapPin,
  Target,
  Rocket,
  Phone,
  Handshake
} from 'lucide-react';
import { getDictionary } from '../../../../get-dictionary';
import { Locale } from '../../../../i18n-config';

const HakkimizdaPage = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const dictionary = getDictionary(lang);
  const t = dictionary.page.about;

  const stats = [
    { number: t.stats.projects.number, label: t.stats.projects.label, icon: Building2 },
    { number: t.stats.experience.number, label: t.stats.experience.label, icon: Clock },
    { number: t.stats.satisfaction.number, label: t.stats.satisfaction.label, icon: Heart },
    { number: t.stats.support.number, label: t.stats.support.label, icon: Zap }
  ];

  const values = [
    {
      icon: Shield,
      title: t.values.reliability.title,
      description: t.values.reliability.description,
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: Award,
      title: t.values.quality.title,
      description: t.values.quality.description,
      color: 'from-yellow-500 to-yellow-700'
    },
    {
      icon: Users,
      title: t.values.customer_focus.title,
      description: t.values.customer_focus.description,
      color: 'from-green-500 to-green-700'
    },
    {
      icon: TrendingUp,
      title: t.values.innovation.title,
      description: t.values.innovation.description,
      color: 'from-purple-500 to-purple-700'
    }
  ];

  const team = [
    {
      name: t.team.founder.name,
      role: t.team.founder.role,
      experience: t.team.founder.experience,
      description: t.team.founder.description,
      emoji: '👨‍💼', // This can be replaced with an icon if available, e.g., <UserCircle />
      phone: '+31 6 29188688'
    },
    {
      name: t.team.coordinator.name,
      role: t.team.coordinator.role,
      experience: t.team.coordinator.experience,
      description: t.team.coordinator.description,
      emoji: '👩‍💻' // This can be replaced with an icon, e.g., <Briefcase />
    },
    {
      name: t.team.chief.name,
      role: t.team.chief.role,
      experience: t.team.chief.experience,
      description: t.team.chief.description,
      emoji: '👷‍♂️' // This can be replaced with an icon, e.g., <HardHat />
    }
  ];

  return (
    <main className="bg-gray-900 text-white min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex items-center justify-center space-x-2 text-blue-400">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">{t.hero.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">{t.mission_vision.mission.title}</h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                {t.mission_vision.mission.description}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">{t.mission_vision.vision.title}</h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                {t.mission_vision.vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t.values.title}</h2>
            <p className="text-xl text-gray-300">{t.values.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="group text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t.team.title}</h2>
            <p className="text-xl text-gray-300">{t.team.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center group hover:-translate-y-2 transition-all duration-300">
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4">{member.experience}</p>
                <p className="text-gray-300 mb-4">{member.description}</p>
                {member.phone && (
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <a 
                      href={`tel:${member.phone.replace(/\s/g, '')}`}
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 inline-flex items-center space-x-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{member.phone}</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
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
          <a href={`/${lang}/iletisim`} className="inline-block bg-white text-blue-900 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-300">
            <Handshake className="inline-block w-5 h-5 mr-2" />
            {t.cta.button}
          </a>
        </div>
      </section>
    </main>
  );
};

export default HakkimizdaPage;