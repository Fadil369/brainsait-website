'use client'

import { Globe } from 'lucide-react'
import { useTranslation } from '../lib/useTranslation'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200"
      title={i18n.language === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
    >
      <Globe size={16} />
      <span className="text-sm font-medium">
        {i18n.language === 'en' ? 'العربية' : 'English'}
      </span>
    </button>
  )
}