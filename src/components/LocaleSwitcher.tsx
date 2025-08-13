'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n, type Locale } from '../../i18n-config'
import { Globe, ChevronDown } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

export default function LocaleSwitcher() {
  const pathName = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null);

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const currentLocale = pathName.split('/')[1] as Locale;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);


  return (
    <div className="relative" ref={wrapperRef}>
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center space-x-2 text-ink/80 hover:text-ink px-3 py-2 rounded-lg hover:bg-gray-100 border border-gray-200 bg-white/80 transition-all"
      >
        <Globe className="w-5 h-5 text-accent" />
        <span className="font-medium">{currentLocale === 'nl' ? 'Dutch' : 'English'}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
      </button>
      <div 
        className={`absolute right-0 mt-2 p-2 w-40 bg-white rounded-xl border border-gray-200 shadow-xl transition-all ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'}`}
      >
        <ul>
          {i18n.locales.map(locale => {
            return (
              <li key={locale}>
                <Link
                  href={redirectedPathName(locale)}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-ink/80 hover:bg-gray-50 rounded-lg"
                >
                  {locale === 'nl' ? '🇳🇱 Dutch' : '🇬🇧 English'}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}