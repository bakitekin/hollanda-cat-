import type { Locale } from './i18n-config'
import nl from './dictionaries/nl.json'
import en from './dictionaries/en.json'

const dictionaries = {
  nl,
  en,
}

export const getDictionary = (locale: Locale) => {
  return dictionaries[locale] ?? dictionaries.nl
}
