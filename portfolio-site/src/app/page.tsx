'use client'

import Navbar from '@/components/Navbar'
import HeroSection from '@/components/Hero'
import ProjectGallery from '@/components/ProjectsGallery'

const HomePage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <Navbar />
      <HeroSection />
      <ProjectGallery />
    </div>
  )
}

export default HomePage
