'use client';

import React from 'react';
import { motion } from 'framer-motion';

type FloatingObstaclesProps = {
  count?: number;
  seed?: number;
};

function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function FloatingObstacles({
  count = 12,
  seed = 1337,
}: FloatingObstaclesProps) {
  const rand = React.useMemo(() => mulberry32(seed), [seed]);

  return (
    <div className='absolute inset-0 -z-10 pointer-events-none'>
      {Array.from({ length: count }).map((_, i) => {
        const left = rand() * 100;
        const top = rand() * 100;
        const size = 20 + rand() * 40; // px
        const up = rand() > 0.5;
        const delay = rand() * 1.5;
        const rotate = (rand() - 0.5) * 10;
        const rounded = rand() > 0.5;
        const bg =
          rand() > 0.5
            ? 'from-lime-400/15 to-emerald-400/15'
            : 'from-emerald-400/15 to-lime-400/15';

        return (
          <motion.div
            key={i}
            className={`absolute bg-gradient-to-br ${bg} border border-lime-500/15 backdrop-blur-[1px] shadow-lg shadow-lime-500/5`}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              borderRadius: rounded ? 12 : 6,
            }}
            animate={{
              y: [0, up ? -12 : 12, 0],
              rotate: [0, rotate, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 6 + rand() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay,
            }}
          />
        );
      })}
    </div>
  );
}
