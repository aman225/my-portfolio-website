// components/Navbar.tsx
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import Link from 'next/link'

const Navbar = () => {
  const { theme, setTheme } = useTheme()

  return (
    <motion.nav className="flex justify-between items-center p-6">
      <motion.div
        className="font-bold text-2xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link href="/">My Portfolio</Link>
      </motion.div>
      <div className="space-x-6">
        <Link href="/projects" className="text-lg">
          Projects
        </Link>
        <Link href="/blog" className="text-lg">
          Blog
        </Link>
        <Link href="/about" className="text-lg">
          About
        </Link>
        <Link href="/contact" className="text-lg">
          Contact
        </Link>
        <Button
          variant="outline"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          Toggle Theme
        </Button>
      </div>
    </motion.nav>
  )
}

export default Navbar
