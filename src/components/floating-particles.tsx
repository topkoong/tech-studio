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

  return (
    <>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute ${sizeClasses[size]} bg-lime-400/20 rounded-full ${className}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 30 - 15, 0],
            opacity: [0, 1, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </>
  );
}
