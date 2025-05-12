'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { notFound } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger);

// ✅ Project data with slugs
const projects = [
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    description:
      'An animated portfolio with a 3D hero, smooth transitions, and responsive layout.',
    images: ['/images/project1.jpg', '/images/project2.jpg'],
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
  },
  {
    slug: 'finance-tracker',
    title: 'Finance Tracker',
    description:
      'Track your income/expenses with visual charts and persistent storage.',
    images: ['/images/project3.jpg'],
    tech: ['React', 'Chart.js', 'Zustand'],
  },
  {
    slug: 'personal-finance-visualizer',
    title: 'Personal Finance Visualizer',
    description:
      'A modern, responsive, and lightweight web application to track expenses, view transactions, set budgets, and visualize personal finances — built with Next.js 14 (App Router), React 19, TailwindCSS, shadcn/ui, MongoDB, and Recharts.',
    images: ['/images/finance-visualizer.jpg'],
    tech: ['Next.js', 'React 19', 'TailwindCSS', 'MongoDB', 'Recharts', 'shadcn/ui'],
  },
];

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
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
    <main ref={containerRef} className="min-h-screen py-20 px-6 bg-white dark:bg-black">
      <motion.h1 className="text-4xl font-bold mb-6 fade-in">
        {project.title}
      </motion.h1>
      <motion.p className="text-lg text-gray-700 dark:text-gray-300 mb-10 fade-in">
        {project.description}
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8 mb-10 fade-in">
        {project.images.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={project.title}
            width={800}
            height={500}
            className="rounded-lg object-cover w-full h-auto"
          />
        ))}
      </div>

      <div className="fade-in">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <ul className="list-disc list-inside text-gray-800 dark:text-gray-200">
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}