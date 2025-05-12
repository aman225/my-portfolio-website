'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectBySlug } from '@/lib/projectData';
import Navbar from '@/components/Navbar';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.fade-in', {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (!project) return notFound();

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <Navbar />
      
      <main ref={containerRef} className="max-w-7xl mx-auto py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/" className="text-blue-500 hover:underline inline-flex items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Back to Home
          </Link>
        </motion.div>

        <motion.h1 className="text-4xl font-bold mb-6 fade-in">
          {project.title}
        </motion.h1>
        <motion.p className="text-lg text-gray-700 dark:text-gray-300 mb-10 fade-in">
          {project.description}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-10 fade-in">
          {project.images.map((img, i) => (
            <div key={i} className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow-md">
              <Image
                src={img}
                alt={`${project.title} - image ${i+1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        <div className="fade-in">
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tech.map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}