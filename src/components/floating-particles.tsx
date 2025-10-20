'use client';

import { motion } from 'framer-motion';

interface FloatingParticlesProps {
  count?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function FloatingParticles({
  count = 30,
  className = '',
  size = 'sm',
}: FloatingParticlesProps) {
  const sizeClasses = {
    sm: 'w-1 h-1',
    md: 'w-2 h-2',
    lg: 'w-3 h-3',
    xl: 'w-4 h-4',
  };

  // Deterministic PRNG to avoid hydration mismatches between SSR and CSR
  function mulberry32(seed: number) {
    return function () {
      let t = (seed += 0x6d2b79f5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  return (
    <>
      {[...Array(count)].map((_, i) => {
        // Seed per particle index for stable positions/animation
        const rand = mulberry32(123456 + i);
        const left = rand() * 100;
        const top = rand() * 100;
        const yAmp = rand() * 30 - 15;
        const duration = 2 + rand() * 2;
        const delay = rand() * 2;

        return (
          <motion.div
            key={i}
            className={`absolute ${sizeClasses[size]} bg-lime-400/20 rounded-full ${className}`}
            style={{
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={{
              y: [0, yAmp, 0],
              opacity: [0, 1, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </>
  );
}
