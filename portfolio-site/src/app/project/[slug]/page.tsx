'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { notFound } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger);

// Dummy data
const projectData = {
  'portfolio-website': {
    title: 'Portfolio Website',
    description: 'An animated portfolio with a 3D hero, smooth transitions, and responsive layout.',
    images: ['/images/project1.jpg', '/images/project2.jpg'],
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
  },
  'finance-tracker': {
    title: 'Finance Tracker',
    description: 'Track your income/expenses with visual charts and persistent storage.',
    images: ['/images/project3.jpg'],
    tech: ['React', 'Chart.js', 'Zustand'],
  },
};

interface ProjectData {
  title: string;
  description: string;
  images: string[];
  tech: string[];
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const data = projectData[params.slug as keyof typeof projectData];

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

  if (!data) return notFound();

  return (
    <main ref={containerRef} className="px-6 py-20 bg-white dark:bg-gray-950">
      <h1 className="text-4xl font-bold mb-6">{data.title}</h1>
      <p className="text-lg mb-10 max-w-3xl fade-in">{data.description}</p>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {data.images.map((src: string, i: number) => (
          <motion.div
            key={i}
            className="overflow-hidden rounded-xl fade-in"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Image src={src} alt={`screenshot-${i}`} width={800} height={500} className="w-full h-auto" />
          </motion.div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4 fade-in">Technologies Used</h2>
      <ul className="list-disc pl-6 space-y-2 fade-in">
        {data.tech.map((tech: string, i: number) => (
          <li key={i} className="text-lg">
            {tech}
          </li>
        ))}
      </ul>
    </main>
  );
}