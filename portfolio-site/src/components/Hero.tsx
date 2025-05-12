'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

type ParticleFieldProps = {
  isDarkMode: boolean;
};


const ParticleField = ({ isDarkMode }: ParticleFieldProps) =>  {
  const points = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 3000; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      positions.push(x, y, z);
    }
    return new Float32Array(positions);
  }, []);

  useFrame(({ mouse, clock }) => {
    if (points.current) {
      // Responsive rotation based on mouse movement
      points.current.rotation.y = mouse.x * 0.5;
      points.current.rotation.x = mouse.y * 0.5;
      
      // Gentle automatic rotation for better effect
      points.current.rotation.y += 0.0005;
      points.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.05) * 0.05;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial 
        color={isDarkMode ? "#4f46e5" : "#6366f1"} 
        size={0.05} 
        sizeAttenuation 
      />
    </points>
  );
};

export default function Hero() {
  // Use next-themes to detect dark mode
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === 'dark';

  return (
    <section className="relative h-screen w-full overflow-hidden pt-16">
      <div className="absolute inset-0 bg-white dark:bg-gray-900 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <ParticleField isDarkMode={isDarkMode} />
        </Canvas>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-black dark:text-white text-center pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Hi, I'm a Web Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg mt-4 max-w-md px-4"
        >
          I build modern, interactive, high-performance web applications.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10"
        >
        </motion.div>
      </div>
    </section>
  );
}