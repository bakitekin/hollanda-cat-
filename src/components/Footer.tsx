import React from 'react';
import { Github, Linkedin, Twitter, Building2, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { Locale } from '../../i18n-config';
import { getDictionary } from '../../get-dictionary';

const Footer = ({ lang }: { lang: Locale }) => {
  const dictionary = getDictionary(lang);
  const t = dictionary.components.footer;
  const nav = dictionary.components.header.nav;

  const navLinks = [
    { href: '/hizmetlerimiz', label: nav.services },
    { href: '/hakkimizda', label: nav.about },
    { href: '/referanslar', label: nav.references },
    { href: '/iletisim', label: nav.contact }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-700/20 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href={`/${lang}`} className="group inline-block">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">
                    BRK <span className="text-blue-400">DAK</span>
                  </h1>
                  <p className="text-xs text-gray-400 -mt-1">{dictionary.components.header.slogan}</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t.quick_links}</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={`/${lang}${link.href}`} className="hover:text-blue-400 transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t.contact_us}</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+31629188688" className="hover:text-blue-400 transition-colors duration-300">+31 6 29188688</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:brkdak.nl@gmail.com" className="hover:text-blue-400 transition-colors duration-300">brkdak.nl@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t.follow_us}</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/bakitekin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/tekinbaki/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://x.com/Fx_SoldieRR" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700/50 text-center text-sm">
          <p className="mb-2">&copy; {new Date().getFullYear()} BRK DAK. {t.rights_reserved}</p>
          <p>{t.developed_by} <a href="https://x.com/Fx_SoldieRR" target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-blue-400 transition-colors duration-300">Baki TEKİN</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;