'use client';

import { motion } from 'framer-motion';

export function AboutMascot() {
  return (
    <div className='absolute inset-0 pointer-events-none overflow-hidden'>
      {/* Unique About page mascot - different from home page */}
      <motion.div
        className='absolute w-16 h-16 text-lime-400/60 dark:text-lime-400/80'
        style={{
          top: '15%',
          right: '10%',
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* About-specific robot mascot */}
        <svg viewBox='0 0 64 64' fill='none' className='w-full h-full'>
          {/* Robot body */}
          <rect
            x='16'
            y='20'
            width='32'
            height='32'
            rx='4'
            fill='currentColor'
            opacity='0.8'
          />
          {/* Robot head */}
          <rect
            x='20'
            y='12'
            width='24'
            height='16'
            rx='3'
            fill='currentColor'
            opacity='0.9'
          />
          {/* Eyes */}
          <circle cx='26' cy='20' r='2' fill='white' />
          <circle cx='38' cy='20' r='2' fill='white' />
          {/* Antenna */}
          <line
            x1='32'
            y1='12'
            x2='32'
            y2='8'
            stroke='currentColor'
            strokeWidth='2'
            opacity='0.7'
          />
          <circle cx='32' cy='6' r='2' fill='currentColor' opacity='0.8' />
          {/* Arms */}
          <rect
            x='8'
            y='24'
            width='8'
            height='16'
            rx='2'
            fill='currentColor'
            opacity='0.7'
          />
          <rect
            x='48'
            y='24'
            width='8'
            height='16'
            rx='2'
            fill='currentColor'
            opacity='0.7'
          />
          {/* Legs */}
          <rect
            x='20'
            y='52'
            width='8'
            height='8'
            rx='2'
            fill='currentColor'
            opacity='0.6'
          />
          <rect
            x='36'
            y='52'
            width='8'
            height='8'
            rx='2'
            fill='currentColor'
            opacity='0.6'
          />
        </svg>
      </motion.div>

      {/* Secondary floating element */}
      <motion.div
        className='absolute w-8 h-8 text-emerald-400/40 dark:text-emerald-400/60'
        style={{
          top: '25%',
          left: '15%',
        }}
        animate={{
          y: [0, 15, 0],
          x: [0, 10, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {/* Gear icon */}
        <svg viewBox='0 0 32 32' fill='none' className='w-full h-full'>
          <circle
            cx='16'
            cy='16'
            r='12'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          />
          <circle cx='16' cy='16' r='4' fill='currentColor' />
          <rect x='14' y='2' width='4' height='8' fill='currentColor' />
          <rect x='14' y='22' width='4' height='8' fill='currentColor' />
          <rect x='2' y='14' width='8' height='4' fill='currentColor' />
          <rect x='22' y='14' width='8' height='4' fill='currentColor' />
        </svg>
      </motion.div>

      {/* Third floating element */}
      <motion.div
        className='absolute w-6 h-6 text-green-400/30 dark:text-green-400/50'
        style={{
          bottom: '20%',
          right: '20%',
        }}
        animate={{
          y: [0, -25, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Code brackets */}
        <svg viewBox='0 0 24 24' fill='none' className='w-full h-full'>
          <path
            d='M8 6L2 12L8 18M16 6L22 12L16 18'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </motion.div>
    </div>
  );
}
