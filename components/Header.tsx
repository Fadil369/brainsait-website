'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Globe, Moon, Sun } from 'lucide-react'
import { useTranslation } from '../lib/useTranslation'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeSwitcher from './ThemeSwitcher'

export default function Header() {
  const { t } = useTranslation('common')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'platform', href: '#platform' },
    { key: 'healthcare', href: '#healthcare' },
    { key: 'ai_assistant', href: '#ai-assistant' },
    { key: 'features', href: '#features' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-none">BrainSAIT</span>
              <span className="text-gray-400 text-xs leading-none">{t('hero.subtitle')}</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeSwitcher />
            
            {/* API Link */}
            <a
              href="https://app.brainsait.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
            >
              {t('nav.api')}
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}
              <a
                href="https://app.brainsait.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.api')}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}