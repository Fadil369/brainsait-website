import { useState, useEffect } from 'react'
import enTranslations from '../locales/en/common.json'
import arTranslations from '../locales/ar/common.json'

type Language = 'en' | 'ar'
type TranslationKey = string

const translations = {
  en: enTranslations,
  ar: arTranslations,
}

export function useTranslation(namespace: string = 'common') {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    // Get saved language from localStorage or use default
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language') as Language
      if (savedLang && ['en', 'ar'].includes(savedLang)) {
        setLanguage(savedLang)
      }
    }
  }, [])

  const t = (key: TranslationKey, options?: { returnObjects?: boolean }): any => {
    const keys = key.split('.')
    let value: any = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    if (options?.returnObjects && typeof value === 'object') {
      return value
    }
    
    return typeof value === 'string' ? value : key
  }

  const changeLanguage = (newLang: Language) => {
    setLanguage(newLang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLang)
      document.documentElement.lang = newLang
      document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr'
    }
  }

  return {
    t,
    i18n: {
      language,
      changeLanguage,
    }
  }
}