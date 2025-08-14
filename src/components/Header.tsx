'use client';
import Link from 'next/link';
import { useState } from 'react';
import Logo from './Logo';
import { 
  Wrench, 
  Users, 
  Star, 
  Phone, 
  Menu, 
  X
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
  ];

  const mobileNavLinks = [
    ...navLinks,
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur-md border-b border-gray-200">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href={`/${lang}`} className="group relative">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Logo className="h-12 w-auto md:h-14" />
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
              className="px-4 py-2 text-ink/80 hover:text-ink font-medium transition-colors duration-200"
                >
                  <div className="flex items-center space-x-2">
                    <IconComponent className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                </Link>
              );
            })}
            
            <LocaleSwitcher />

          </div>

          <div className="flex items-center lg:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-4 relative w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-900 border border-gray-200"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

          <div className={`lg:hidden mt-4 transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="bg-paper rounded-2xl border border-gray-200 p-6 space-y-4">
            {mobileNavLinks.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link 
                  key={item.href}
                  href={`/${lang}${item.href}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 p-3 text-gray-700 hover:text-gray-900 font-medium rounded-xl hover:bg-gray-50 transition-colors duration-200"
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <div className="p-3">
              <LocaleSwitcher />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
