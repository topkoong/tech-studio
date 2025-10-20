'use client';

import { motion } from 'framer-motion';

interface FloatingMascotsProps {
  count?: number;
  className?: string;
}

export function FloatingMascots({
  count = 8,
  className = '',
}: FloatingMascotsProps) {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute ${className}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 40 - 20, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
        >
          {/* Simplified Mascot SVG */}
          <svg
            viewBox='0 0 100 100'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='w-16 h-16 opacity-20'
          >
            {/* Robot Head */}
            <ellipse
              cx='50'
              cy='35'
              rx='20'
              ry='18'
              fill='url(#mascotGradient)'
            />
            {/* Eyes */}
            <circle cx='42' cy='32' r='3' fill='#0a0a0a' />
            <circle cx='58' cy='32' r='3' fill='#0a0a0a' />
            {/* Eye highlights */}
            <circle cx='43' cy='31' r='1' fill='#22c55e' />
            <circle cx='59' cy='31' r='1' fill='#22c55e' />
            {/* Smile */}
            <path
              d='M 40 40 Q 50 45 60 40'
              stroke='#0a0a0a'
              strokeWidth='2'
              fill='none'
              strokeLinecap='round'
            />
            {/* Body */}
            <rect
              x='35'
              y='50'
              width='30'
              height='25'
              rx='8'
              fill='url(#mascotGradient)'
            />
            {/* Arms */}
            <rect x='25' y='55' width='8' height='15' rx='4' fill='#22c55e' />
            <rect x='67' y='55' width='8' height='15' rx='4' fill='#22c55e' />
            {/* Legs */}
            <rect x='40' y='75' width='8' height='15' rx='4' fill='#16a34a' />
            <rect x='52' y='75' width='8' height='15' rx='4' fill='#16a34a' />
            {/* Antenna */}
            <line
              x1='50'
              y1='17'
              x2='50'
              y2='25'
              stroke='#0a0a0a'
              strokeWidth='2'
            />
            <circle cx='50' cy='15' r='2' fill='#22c55e' />

            <defs>
              <linearGradient
                id='mascotGradient'
                x1='0%'
                y1='0%'
                x2='100%'
                y2='100%'
              >
                <stop offset='0%' stopColor='#22c55e' />
                <stop offset='100%' stopColor='#16a34a' />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}
    </>
  );
}
