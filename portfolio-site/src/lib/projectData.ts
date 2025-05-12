export interface Project {
    slug: string;
    title: string;
    description: string;
    image: string;
    images: string[];
    tags: string[];
    tech: string[];
  }
  
  export const projects: Project[] = [
    {
      slug: 'personal-finance-visualizer',
      title: 'Personal Finance Visualizer',
      description:
        'A modern, responsive, and lightweight web application to track expenses, view transactions, set budgets, and visualize personal finances — built with Next.js 14 (App Router), React 19, TailwindCSS, shadcn/ui, MongoDB, and Recharts.',
      image: '/images/finance-visualizer.jpg',
      images: ['/images/finance-visualizer.jpg', '/images/project2.jpg'],
      tags: ['Next.js', 'React 19', 'TailwindCSS'],
      tech: ['Next.js', 'React 19', 'TailwindCSS', 'MongoDB', 'Recharts', 'shadcn/ui'],
    },
    {
      slug: 'finance-tracker',
      title: 'Finance Tracker',
      description: 'Track your personal finances with beautiful charts.',
      image: '/images/project2.jpg',
      images: ['/images/project3.jpg'],
      tags: ['React', 'Chart.js'],
      tech: ['React', 'Chart.js', 'Zustand'],
    },
    {
      slug: 'e-commerce-admin',
      title: 'E-commerce Admin',
      description: 'A dashboard for managing products, orders, and users.',
      image: '/images/project3.jpg',
      images: ['/images/project3.jpg', '/images/project2.jpg'],
      tags: ['Next.js', 'Shadcn/ui'],
      tech: ['Next.js', 'TypeScript', 'Shadcn/ui', 'Prisma'],
    },
    {
      slug: 'portfolio-website',
      title: 'Portfolio Website',
      description: 'An animated portfolio with a 3D hero, smooth transitions, and responsive layout.',
      image: '/images/project1.jpg',
      images: ['/images/project1.jpg', '/images/project2.jpg'],
      tags: ['Next.js', 'Tailwind CSS'],
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Three.js'],
    },
  ];
  
  export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find(project => project.slug === slug);
  }