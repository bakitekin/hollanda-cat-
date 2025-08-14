import Image from 'next/image';
import Logo from './Logo';
import React from 'react';
import { Github, Linkedin, Twitter, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { Locale } from '../../i18n-config';

interface FooterDictionary {
  footer: {
    rights_reserved: string;
    developed_by: string;
    quick_links: string;
    contact_us: string;
    follow_us: string;
  };
  header: {
    slogan: string;
    nav: {
      services: string;
      about: string;
      references: string;
      contact: string;
    };
  };
}

const Footer = async ({ lang, dictionary }: { lang: Locale; dictionary: FooterDictionary }) => {
  const t = dictionary.footer;
  const nav = dictionary.header.nav;

  const navLinks = [
    { href: '/hizmetlerimiz', label: nav.services },
    { href: '/hakkimizda', label: nav.about },
    { href: '/referanslar', label: nav.references },
    { href: '/iletisim', label: nav.contact }
  ];

  return (
    <footer className="bg-paper border-t border-gray-200 text-ink/70">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href={`/${lang}`} className="group inline-block">
              <div className="flex items-center space-x-3">
                <Logo className="h-16 w-auto md:h-20" />
              </div>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-ink mb-4">{t.quick_links}</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={`/${lang}${link.href}`} className="hover:text-accent transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-ink mb-4">{t.contact_us}</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+31629188688" className="hover:text-accent transition-colors duration-200">+31 6 29188688</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:brkdak.nl@gmail.com" className="hover:text-accent transition-colors duration-200">brkdak.nl@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold text-ink mb-4">{t.follow_us}</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/bakitekin" target="_blank" rel="noopener noreferrer" className="text-ink/40 hover:text-ink transition-colors duration-200">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/tekinbaki/" target="_blank" rel="noopener noreferrer" className="text-ink/40 hover:text-ink transition-colors duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://x.com/Fx_SoldieRR" target="_blank" rel="noopener noreferrer" className="text-ink/40 hover:text-ink transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm">
          <p className="mb-2">&copy; {new Date().getFullYear()} BRK DAK. {t.rights_reserved}</p>
          <p>{t.developed_by} <a href="https://x.com/Fx_SoldieRR" target="_blank" rel="noopener noreferrer" className="font-semibold text-ink hover:text-accent transition-colors duration-200">Baki TEKİN</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;