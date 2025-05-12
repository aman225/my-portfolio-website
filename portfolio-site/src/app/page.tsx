'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import ProjectGallery from '@/components/ProjectsGallery'

const HomePage = () => {
  // Handle mounting to prevent hydration mismatch with theme
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    // You can render a simple loading state or return null
    return <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  }
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectGallery />
    </div>
  )
}

export default HomePage