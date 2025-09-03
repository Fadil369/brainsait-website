'use client'

import { ExternalLink, Heart } from 'lucide-react'
import { useTranslation } from '../lib/useTranslation'

export default function Footer() {
  const { t } = useTranslation()

  const links = [
    { key: 'platform', href: 'https://app.brainsait.com' },
    { key: 'api_docs', href: 'https://docs.brainsait.com/docs' },
    { key: 'monitoring', href: 'https://grafana.brainsait.com' },
    { key: 'github', href: 'https://github.com/Fadil369/brainsait-website' },
  ]

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'GitHub', href: 'https://github.com/Fadil369/brainsait-website', icon: '🔗' },
  ]

  return (
    <footer className="bg-black border-t border-white/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">BrainSAIT</h3>
                <p className="text-gray-400 text-sm">{t('site.tagline')}</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Revolutionary AI-powered healthcare platform with intelligent agents, 
              FHIR/NPHIES integration, and comprehensive medical workflow automation 
              for the next generation of healthcare solutions.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-lg transition-colors duration-200"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Healthcare Platform</h4>
            <ul className="space-y-3">
              <li>
                <a href="#healthcare" className="text-gray-400 hover:text-white transition-colors duration-200">
                  AI Assistant
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Medical AI Features
                </a>
              </li>
              <li>
                <a href="#dashboard" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Live Dashboard
                </a>
              </li>
              <li>
                <a href="https://docs.brainsait.com/docs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                  API Documentation
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Platform Access</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    {t(`footer.links.${link.key}`)}
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Healthcare Compliance */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <h5 className="text-sm font-semibold text-white mb-3">Compliance</h5>
              <div className="space-y-2">
                <div className="flex items-center text-xs text-gray-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  HIPAA Compliant
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  FHIR R4 Compatible
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  NPHIES Integrated
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {t('footer.copyright')}
            </p>
            
            <div className="flex items-center text-gray-400 text-sm">
              <span>Built with</span>
              <Heart className="w-4 h-4 mx-1 text-red-400" />
              <span>for the next generation of AI-powered healthcare</span>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Last updated: September 3, 2025 | Version 2.0.0 - Healthcare AI Platform
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}