'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useProjectFilter } from '@/lib/store';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/lib/projectData';

gsap.registerPlugin(ScrollTrigger);

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
  }, [filter]);

  return (
    <section ref={containerRef} className="py-20 px-6 bg-gray-50 dark:bg-black">
      <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>
      
      {filter && (
        <p className="text-center mb-8">
          Showing projects with tag: <span className="font-bold">{filter}</span>
          <button 
            onClick={() => useProjectFilter.getState().setFilter(null)}
            className="ml-2 text-blue-500 hover:underline"
          >
            Clear filter
          </button>
        </p>
      )}
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredProjects.map((project, index) => (
          <Link
            key={index}
            href={`/project/${project.slug}`}
            className="block project-card bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  priority={index < 3}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-2 py-1 rounded cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        useProjectFilter.getState().setFilter(tag);
                      }}
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