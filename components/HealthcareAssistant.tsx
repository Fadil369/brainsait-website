'use client'

import { MessageSquare, Calendar, Shield, BarChart3, Stethoscope, FileText, Brain, Database } from 'lucide-react'
import { useTranslation } from '../lib/useTranslation'

export default function HealthcareAssistant() {
  const { t } = useTranslation()

  const modules = [
    {
      category: 'patient_engagement',
      icon: MessageSquare,
      color: 'from-blue-500 to-blue-600',
      features: [
        { key: 'ai_chat', icon: Brain },
        { key: 'symptom_checker', icon: Stethoscope },
        { key: 'appointments', icon: Calendar },
        { key: 'education', icon: FileText },
      ]
    },
    {
      category: 'clinical_workflow',
      icon: BarChart3,
      color: 'from-teal-500 to-teal-600',
      features: [
        { key: 'ehr_integration', icon: Database },
        { key: 'voice_text', icon: MessageSquare },
        { key: 'soap_notes', icon: FileText },
        { key: 'decision_support', icon: Brain },
      ]
    },
    {
      category: 'compliance',
      icon: Shield,
      color: 'from-purple-500 to-purple-600',
      features: [
        { key: 'encryption', icon: Shield },
        { key: 'audit_logs', icon: FileText },
        { key: 'rbac', icon: MessageSquare },
        { key: 'analytics', icon: BarChart3 },
      ]
    }
  ]

  return (
    <section id="healthcare" className="py-20 bg-navy-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">{t('healthcare.title')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('healthcare.subtitle')}
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {modules.map((module) => {
            const IconComponent = module.icon
            return (
              <div
                key={module.category}
                className="group glass-card p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Module Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${module.color} flex items-center justify-center mr-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {t(`healthcare.${module.category}.title`)}
                    </h3>
                  </div>
                </div>

                {/* Module Description */}
                <p className="text-gray-300 mb-6">
                  {t(`healthcare.${module.category}.description`)}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  {module.features.map((feature) => {
                    const FeatureIcon = feature.icon
                    return (
                      <div
                        key={feature.key}
                        className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200"
                      >
                        <FeatureIcon className="w-4 h-4 text-gray-400 mr-3" />
                        <span className="text-gray-300 text-sm">
                          {t(`healthcare.${module.category}.features.${feature.key}`)}
                        </span>
                      </div>
                    )
                  })}
                </div>

                {/* Module Action */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
                    {t('common.learn_more')}
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Phase Roadmap */}
        <div className="glass-card p-8">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Implementation Roadmap
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { phase: 'Phase 1', title: 'Conversational AI', items: ['AI Chat Bot', 'Appointment Booking'], status: 'active' },
              { phase: 'Phase 2', title: 'EHR Integration', items: ['FHIR Support', 'NPHIES Integration'], status: 'planned' },
              { phase: 'Phase 3', title: 'Automation', items: ['Insurance Verification', 'Documentation'], status: 'planned' },
              { phase: 'Phase 4', title: 'Analytics', items: ['Predictive Analytics', 'Dashboards'], status: 'planned' },
            ].map((phase, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border-2 transition-all duration-300 ${
                  phase.status === 'active' 
                    ? 'border-blue-500 bg-blue-500/10' 
                    : 'border-gray-600 bg-gray-800/20'
                }`}
              >
                <div className="text-center">
                  <div className={`w-8 h-8 rounded-full mx-auto mb-3 flex items-center justify-center text-sm font-bold ${
                    phase.status === 'active' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-600 text-gray-300'
                  }`}>
                    {index + 1}
                  </div>
                  <h4 className="font-bold text-white mb-1">{phase.phase}</h4>
                  <h5 className="text-sm text-gray-300 mb-3">{phase.title}</h5>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {phase.items.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}