'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const ParticleField = () => {
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

  useFrame(({ mouse }) => {
    if (points.current) {
      points.current.rotation.y = mouse.x * 0.5;
      points.current.rotation.x = mouse.y * 0.5;
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
      <pointsMaterial color="#ffffff" size={0.03} sizeAttenuation />
    </points>
  );
};

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ParticleField />
      </Canvas>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-black text-center pointer-events-none">
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
          className="text-lg mt-4"
        >
          I build modern, high-performance web apps.
        </motion.p>
      </div>
    </section>
  );
}