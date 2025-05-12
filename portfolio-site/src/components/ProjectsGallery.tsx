// src/components/ProjectsGallery.tsx
'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useProjectFilter } from '@/lib/store';
import Link from 'next/link';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Animated portfolio with 3D hero section, scroll effects, and responsive UI.',
    image: '/images/project1.jpg',
    tags: ['Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Finance Tracker',
    description: 'Track your personal finances with beautiful charts.',
    image: '/images/project2.jpg',
    tags: ['React', 'Chart.js'],
  },
  {
    title: 'E-commerce Admin',
    description: 'A dashboard for managing products, orders, and users.',
    image: '/images/project3.jpg',
    tags: ['Next.js', 'Shadcn/ui'],
  },
];

function slugify(str: string) {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
}

export default function ProjectsGallery() {
  const containerRef = useRef(null);
  const { filter } = useProjectFilter();

  const filteredProjects = filter
    ? projects.filter((proj) => proj.tags.includes(filter))
    : projects;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 px-6 bg-gray-50 dark:bg-black">
      <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <Link
            key={index}
            href={`/project/${slugify(project.title)}`}
            className="block project-card bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}