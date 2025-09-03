'use client'

import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import HealthcareAssistant from '../components/HealthcareAssistant'
import HealthcareFeatures from '../components/HealthcareFeatures'
import LiveDashboard from '../components/LiveDashboard'
import Footer from '../components/Footer'

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HealthcareAssistant />
      <HealthcareFeatures />
      <LiveDashboard />
      <Footer />
    </main>
  )
}