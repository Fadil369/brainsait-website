import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enTranslations from '../locales/en/common.json'
import arTranslations from '../locales/ar/common.json'

const resources = {
  en: {
    common: enTranslations,
  },
  ar: {
    common: arTranslations,
  },
}

if (typeof window !== 'undefined') {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'en',
      fallbackLng: 'en',
      debug: false,
      
      interpolation: {
        escapeValue: false,
      },
    })
}

export default i18n