'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="font-bold text-2xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link href="/" className="text-black dark:text-white">My Portfolio</Link>
      </motion.div>
      
      <div className="flex items-center space-x-6">
        <Link href="/#about" className="text-lg text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
          About
        </Link>
        <Link href="/#projects" className="text-lg text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
          Projects
        </Link>
        <Link href="/blog" className="text-lg text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
          Blog
        </Link>
        <Link href="/contact" className="text-lg text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
          Contact
        </Link>
        
        <ThemeToggle />
      </div>
    </motion.nav>
  );
};

export default Navbar;