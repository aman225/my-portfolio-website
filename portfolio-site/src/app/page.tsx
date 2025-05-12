'use client';

import dynamic from 'next/dynamic';
import AnimatedSection from '@/components/AnimatedSection';
import ProjectsGallery from '@/components/ProjectsGallery';

const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });

export default function HomePage() {
  return (
    <main>
      <Hero />

      <AnimatedSection>
        <section className="min-h-screen px-4 py-20">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg max-w-2xl">
            I'm a passionate developer focused on building performant, accessible, and beautiful web experiences.
          </p>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <section className="min-h-screen px-4 py-20 bg-gray-100 dark:bg-gray-900">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <p className="text-lg max-w-2xl">
            React, Next.js, TypeScript, Tailwind, Framer Motion, MongoDB, Express.js and more.
          </p>
        </section>
      </AnimatedSection> 
      <ProjectsGallery />
    </main>
  );
}