'use client'

import { Hospital, Pill, Smartphone, Dna } from 'lucide-react'
import { useTranslation } from '../lib/useTranslation'

export default function HealthcareFeatures() {
  const { t } = useTranslation()

  const features = [
    {
      key: 'ai_diagnosis',
      icon: Hospital,
      color: 'from-red-500 to-pink-500',
      gradientClass: 'bg-gradient-to-br from-red-500/20 to-pink-500/20',
    },
    {
      key: 'smart_pharma',
      icon: Pill,
      color: 'from-orange-500 to-yellow-500',
      gradientClass: 'bg-gradient-to-br from-orange-500/20 to-yellow-500/20',
    },
    {
      key: 'telemedicine',
      icon: Smartphone,
      color: 'from-green-500 to-teal-500',
      gradientClass: 'bg-gradient-to-br from-green-500/20 to-teal-500/20',
    },
    {
      key: 'genomic',
      icon: Dna,
      color: 'from-purple-500 to-indigo-500',
      gradientClass: 'bg-gradient-to-br from-purple-500/20 to-indigo-500/20',
    },
  ]

  return (
    <section id="features" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-teal-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Healthcare <span className="gradient-text">AI Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced AI-powered healthcare solutions for better patient outcomes and medical efficiency
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={feature.key}
                className="group glass-card p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Feature Icon */}
                <div className={`w-16 h-16 rounded-2xl ${feature.gradientClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Feature Title */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {t(`features.${feature.key}.title`)}
                </h3>

                {/* Feature Description */}
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  {t(`features.${feature.key}.description`)}
                </p>

                {/* Feature Stats */}
                <div className="space-y-3">
                  {Object.entries(t(`features.${feature.key}.stats`, { returnObjects: true }) || {}).map(([statKey, statValue]) => (
                    <div key={statKey} className="flex justify-between items-center p-2 rounded-lg bg-white/5">
                      <span className="text-gray-400 text-xs uppercase tracking-wide">
                        {statKey.replace('_', ' ')}
                      </span>
                      <span className="text-white font-semibold text-sm">
                        {String(statValue)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`h-1 bg-gradient-to-r ${feature.color} rounded-full`}></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Ready to Transform Healthcare?
            </h3>
            <p className="text-gray-300 mb-6">
              Join the revolution in AI-powered healthcare solutions. Our platform is designed for healthcare providers, 
              insurers, and patients who demand the best in medical technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                {t('common.book_demo')}
              </button>
              <button className="px-8 py-3 border-2 border-white/20 hover:border-blue-400 text-white rounded-lg font-semibold transition-all duration-300 backdrop-blur-lg">
                {t('common.contact_us')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}