import { 
  Building2, 
  Users, 
  Award, 
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
import fs from 'fs';
import path from 'path';

type HakkimizdaPageProps = {
  params: { lang: Locale };
};

const HakkimizdaPage = async ({ params }: HakkimizdaPageProps) => {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
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
      emoji: '👨‍💼',
      phone: '+31 6 29188688'
    },
    {
      name: t.team.coordinator.name,
      role: t.team.coordinator.role,
      experience: t.team.coordinator.experience,
      description: t.team.coordinator.description,
      emoji: '👩‍💻'
    },
    {
      name: t.team.chief.name,
      role: t.team.chief.role,
      experience: t.team.chief.experience,
      description: t.team.chief.description,
      emoji: '👷‍♂️'
    }
  ];

  // Select a hero background image from public images
  const imagesDir = fs.existsSync(path.join(process.cwd(), 'public/images/burak'))
    ? path.join(process.cwd(), 'public/images/burak')
    : path.join(process.cwd(), 'public/images');
  const heroImage = fs
    .readdirSync(imagesDir)
    .filter((f) => /\.(jpe?g|png)$/i.test(f) && !f.toLowerCase().includes('logo'))
    .sort()[1] || 'genel-2.jpeg';
  const heroImageUrl = `${imagesDir.endsWith('/burak') ? '/images/burak' : '/images'}/${heroImage}`;

  return (
    <main className="bg-paper text-ink min-h-screen pt-24">
      {/* Hero Section (image + gradient) */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-paper/70 via-paper/70 to-paper"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-ink">{t.hero.title}</h1>
            <p className="text-lg md:text-2xl text-ink/80 mb-6 leading-relaxed">{t.hero.subtitle}</p>
            <div className="inline-flex items-center gap-2 bg-white/80 border border-gray-200 rounded-full px-4 py-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm md:text-base font-medium">{t.hero.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section removed as requested */}

      {/* Mission & Vision (cards) */}
      <section className="py-20 bg-paper">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-ink">{t.mission_vision.mission.title}</h2>
              </div>
              <p className="text-ink/70 leading-relaxed text-base md:text-lg">{t.mission_vision.mission.description}</p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-lavender rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-ink" />
                </div>
                <h2 className="text-2xl font-bold text-ink">{t.mission_vision.vision.title}</h2>
              </div>
              <p className="text-ink/70 leading-relaxed text-base md:text-lg">{t.mission_vision.vision.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline (built from stats) */}
      <section className="py-16 bg-paper">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <ol className="relative border-s border-gray-200">
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <li key={idx} className="mb-10 ms-6">
                    <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white ring-8 ring-accent/10">
                      <IconComponent className="w-3.5 h-3.5" />
                    </span>
                    <h3 className="text-lg font-semibold text-ink">{stat.label}</h3>
                    <p className="text-ink/60 text-sm">{stat.number}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* Values (scrollable on mobile) */}
      <section className="py-20 bg-paper">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ink mb-4">{t.values.title}</h2>
            <p className="text-xl text-ink/70">{t.values.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-x-auto lg:overflow-visible snap-x">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="group text-center snap-center">
                  <div className={`w-20 h-20 ${index % 2 === 0 ? 'bg-accent' : 'bg-lavender'} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${index % 2 === 0 ? 'text-white' : 'text-ink'}`} />
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-2">{value.title}</h3>
                  <p className="text-ink/70 leading-relaxed text-sm md:text-base">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team (cards with gradient header) */}
      <section className="py-20 bg-paper">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ink mb-4">{t.team.title}</h2>
            <p className="text-xl text-ink/70">{t.team.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 text-center group hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                <div className={`h-24 ${index % 2 === 0 ? 'bg-accent' : 'bg-lavender'}`}></div>
                <div className="-mt-10 mx-auto w-20 h-20 rounded-2xl bg-paper border border-gray-200 flex items-center justify-center text-4xl">
                  {member.emoji}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-ink mb-1">{member.name}</h3>
                  <p className="text-accent font-semibold mb-1">{member.role}</p>
                  <p className="text-ink/60 text-sm mb-3">{member.experience}</p>
                  <p className="text-ink/70 mb-4">{member.description}</p>
                </div>
                {member.phone && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <a 
                      href={`tel:${member.phone.replace(/\s/g, '')}`}
                      className="bg-accent hover:brightness-95 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 inline-flex items-center space-x-2"
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

      {/* Photo Gallery removed on About page as requested */}

      {/* CTA */}
      <section className="py-20 bg-paper">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-ink mb-6">{t.cta.title}</h2>
          <p className="text-xl text-ink/70 mb-8 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>
          <a href={`/${lang}/iletisim`} className="inline-block bg-accent text-white font-bold py-4 px-8 rounded-xl hover:brightness-95 transition-colors duration-300">
            <Handshake className="inline-block w-5 h-5 mr-2" />
            {t.cta.button}
          </a>
        </div>
      </section>
    </main>
  );
};

export default HakkimizdaPage;
