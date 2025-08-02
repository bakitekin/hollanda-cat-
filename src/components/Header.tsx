'use client';

import Link from 'next/link';
import { useState } from 'react';
import { 
  Wrench, 
  Users, 
  Star, 
  Phone, 
  Menu, 
  X,
  Building2
} from 'lucide-react';
import LocaleSwitcher from './LocaleSwitcher';
import type { Locale } from '../../i18n-config';

type HeaderProps = {
  lang: Locale;
  dictionary: {
    slogan: string;
    nav: {
      services: string;
      about: string;
      references: string;
      contact: string;
    },
    call_button: string;
    call_button_mobile: string;
  }
};

export default function Header({ lang, dictionary }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = dictionary;

  const navLinks = [
    { href: '/hizmetlerimiz', label: t.nav.services, icon: Wrench },
    { href: '/hakkimizda', label: t.nav.about, icon: Users },
    { href: '/referanslar', label: t.nav.references, icon: Star },
    { href: '/iletisim', label: t.nav.contact, icon: Phone }
  ];

  const mobileNavLinks = [
    ...navLinks,
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/20 shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href={`/${lang}`} className="group relative">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-300 transition-all duration-300">
                  BRK <span className="text-blue-400">DAK</span>
                </h1>
                <p className="text-xs text-gray-400 -mt-1">{t.slogan}</p>
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link 
                  key={item.href}
                  href={`/${lang}${item.href}`} 
                  className="group relative px-4 py-2 text-gray-300 hover:text-blue-400 font-medium transition-all duration-300"
                >
                  <div className="flex items-center space-x-2">
                    <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>{item.label}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                </Link>
              );
            })}
            
            <div className="w-px h-6 bg-gray-700 mx-4"></div>

            <LocaleSwitcher />

          </div>

          <div className="flex items-center lg:hidden">
            <LocaleSwitcher />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-4 relative w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className={`lg:hidden mt-4 transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="bg-gray-800/90 backdrop-blur-lg rounded-2xl border border-gray-700/30 p-6 space-y-4">
            {mobileNavLinks.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link 
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex items-center space-x-3 p-3 text-gray-300 hover:text-blue-400 font-medium rounded-xl hover:bg-gray-700/30 transition-all duration-300"
                >
                  <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
