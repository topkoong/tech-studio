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
  // Size mapping for different particle sizes
  const sizeClasses = {
    sm: 'w-1 h-1',   // Small particles (4px)
    md: 'w-2 h-2',   // Medium particles (8px)
    lg: 'w-3 h-3',   // Large particles (12px)
    xl: 'w-4 h-4',   // Extra large particles (16px)
  };

  /**
   * Deterministic pseudo-random number generator (PRNG)
   * Uses Mulberry32 algorithm to ensure consistent random values
   * between server-side rendering and client-side hydration
   * 
   * @param seed - Initial seed value for the PRNG
   * @returns Function that generates random numbers between 0 and 1
   */
  function mulberry32(seed: number) {
    return function () {
      // Increment seed by a large prime number for better distribution
      let t = (seed += 0x6d2b79f5);
      
      // First mixing step: XOR with right-shifted value and multiply
      t = Math.imul(t ^ (t >>> 15), t | 1);
      
      // Second mixing step: XOR with addition and multiply
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      
      // Final step: XOR with right-shifted value and normalize to 0-1 range
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  return (
    <>
      {[...Array(count)].map((_, i) => {
        // Create unique PRNG instance for each particle using index-based seed
        // This ensures each particle has consistent but unique random values
        const rand = mulberry32(123456 + i);
        
        // Generate random position values (0-100% for full coverage)
        const left = rand() * 100;  // Horizontal position
        const top = rand() * 100;   // Vertical position
        
        // Generate random animation parameters
        const yAmp = rand() * 30 - 15;  // Vertical movement amplitude (-15 to +15)
        const duration = 2 + rand() * 2; // Animation duration (2-4 seconds)
        const delay = rand() * 2;       // Animation delay (0-2 seconds)

        return (
          <motion.div
            key={i}
            className={`absolute ${sizeClasses[size]} bg-lime-400/20 rounded-full ${className}`}
            style={{
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={{
              // Three-keyframe animation: start -> peak -> end
              y: [0, yAmp, 0],           // Vertical floating movement
              opacity: [0, 1, 0],        // Fade in and out
              scale: [1, 1.2, 1],        // Scale up and down
            }}
            transition={{
              duration,                  // Animation duration
              repeat: Infinity,          // Loop infinitely
              delay,                     // Start delay
              ease: 'easeInOut',         // Smooth acceleration/deceleration
            }}
          />
        );
      })}
    </>
  );
}
