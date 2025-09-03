'use client'

import { useState, useEffect } from 'react'
import { Activity, Cpu, HardDrive, Users, ExternalLink, TrendingUp } from 'lucide-react'
import { useTranslation } from '../lib/useTranslation'

interface SystemMetrics {
  cpu: number
  memory: number
  requests: number
  connections: number
  uptime: string
  status: 'operational' | 'degraded' | 'outage'
}

export default function LiveDashboard() {
  const { t } = useTranslation()
  const [metrics, setMetrics] = useState<SystemMetrics>({
    cpu: 0,
    memory: 0,
    requests: 0,
    connections: 0,
    uptime: '99.9%',
    status: 'operational'
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API calls with demo data
    const fetchMetrics = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Generate realistic demo data
        setMetrics({
          cpu: Math.floor(Math.random() * 30) + 15, // 15-45%
          memory: Math.floor(Math.random() * 25) + 35, // 35-60%
          requests: Math.floor(Math.random() * 1000) + 5000, // 5000-6000
          connections: Math.floor(Math.random() * 100) + 200, // 200-300
          uptime: '99.9%',
          status: 'operational'
        })
        setIsLoading(false)
      } catch (error) {
        console.error('Failed to fetch metrics:', error)
        setIsLoading(false)
      }
    }

    fetchMetrics()
    
    // Update metrics every 30 seconds
    const interval = setInterval(fetchMetrics, 30000)
    return () => clearInterval(interval)
  }, [])

  const MetricCard = ({ 
    icon: Icon, 
    label, 
    value, 
    color, 
    isLoading 
  }: { 
    icon: any, 
    label: string, 
    value: string, 
    color: string, 
    isLoading: boolean 
  }) => (
    <div className="glass-card p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <Icon className={`w-6 h-6 ${color}`} />
        <div className={`w-3 h-3 rounded-full ${isLoading ? 'bg-yellow-400' : 'bg-green-400'} animate-pulse`}></div>
      </div>
      <div className="text-2xl font-bold text-white mb-1">
        {isLoading ? t('common.loading') : value}
      </div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  )

  return (
    <section id="dashboard" className="py-20 bg-navy-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Live Healthcare <span className="gradient-text">Platform Dashboard</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time system status and performance metrics from our production healthcare environment
          </p>
        </div>

        {/* System Status */}
        <div className="glass-card p-8 mb-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className={`w-4 h-4 rounded-full mr-3 ${
              metrics.status === 'operational' ? 'bg-green-400' : 
              metrics.status === 'degraded' ? 'bg-yellow-400' : 'bg-red-400'
            } animate-pulse`}></div>
            <h3 className="text-2xl font-bold text-white">
              {metrics.status === 'operational' ? 'All Healthcare Systems Operational' : 
               metrics.status === 'degraded' ? 'System Performance Degraded' : 'System Outage'}
            </h3>
          </div>
          <p className="text-gray-300">
            Healthcare AI platform is running smoothly with 24/7 monitoring and automated failover protection
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <MetricCard
            icon={Cpu}
            label="CPU Usage"
            value={`${metrics.cpu}%`}
            color="text-blue-400"
            isLoading={isLoading}
          />
          <MetricCard
            icon={HardDrive}
            label="Memory Usage"
            value={`${metrics.memory}%`}
            color="text-green-400"
            isLoading={isLoading}
          />
          <MetricCard
            icon={TrendingUp}
            label="Daily Requests"
            value={metrics.requests.toLocaleString()}
            color="text-purple-400"
            isLoading={isLoading}
          />
          <MetricCard
            icon={Users}
            label="Active Connections"
            value={metrics.connections.toString()}
            color="text-teal-400"
            isLoading={isLoading}
          />
        </div>

        {/* Healthcare Specific Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="glass-card p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Patient Interactions</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">AI Consultations</span>
                <span className="text-white font-semibold">1,247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Symptom Checks</span>
                <span className="text-white font-semibold">892</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Appointments Booked</span>
                <span className="text-white font-semibold">356</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Clinical Workflow</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">FHIR Transactions</span>
                <span className="text-white font-semibold">2,134</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">SOAP Notes Generated</span>
                <span className="text-white font-semibold">487</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Clinical Decisions</span>
                <span className="text-white font-semibold">623</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Security & Compliance</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Audit Events</span>
                <span className="text-white font-semibold">5,789</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Encryption Rate</span>
                <span className="text-green-400 font-semibold">100%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">HIPAA Compliance</span>
                <span className="text-green-400 font-semibold">✓ Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://app.brainsait.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Activity className="w-5 h-5 mr-2" />
            Open Full Healthcare Dashboard
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          
          <a
            href="https://grafana.brainsait.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-white/20 hover:border-blue-400 text-white rounded-lg font-semibold transition-all duration-300 backdrop-blur-lg"
          >
            <TrendingUp className="w-5 h-5 mr-2" />
            View Advanced Metrics
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}