'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full p-4 flex justify-between items-center border-b bg-background"
    >
      <Link href="/" className="text-xl font-bold">
        MyPortfolio
      </Link>
      <div className="space-x-4">
        <Link href="/projects"><Button variant="ghost">Projects</Button></Link>
        <Link href="/blog"><Button variant="ghost">Blog</Button></Link>
        <Link href="/about"><Button variant="ghost">About</Button></Link>
        <Link href="/contact"><Button variant="default">Contact</Button></Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;