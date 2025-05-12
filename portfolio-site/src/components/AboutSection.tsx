'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900">
      <AnimatedSection>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative h-80 rounded-xl overflow-hidden"
            >
              <Image 
                src="/images/profile-photo.jpg" 
                alt="Profile Photo"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
                priority
              />
            </motion.div>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="text-lg">
                Hi there! I'm a passionate full-stack developer specializing in creating modern, 
                interactive web applications with React, Next.js, and Three.js.
              </p>
              
              <p>
                With 5+ years of experience in web development, I've worked on a variety of projects 
                from e-commerce platforms to data visualization tools. I love combining beautiful design 
                with clean, efficient code.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or hiking in the mountains.
              </p>
              
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">My Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Three.js', 'TailwindCSS', 'Node.js', 'MongoDB', 'GraphQL'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}