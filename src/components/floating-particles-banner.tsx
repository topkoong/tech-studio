'use client';

import { motion } from 'framer-motion';

export function FloatingParticlesBanner() {
  // Use a deterministic PRNG to avoid SSR/CSR mismatches
  function mulberry32(seed: number) {
    return function () {
      let t = (seed += 0x6d2b79f5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  const particles = (() => {
    const baseSeed = 123456789; // stable seed
    const count = 50;
    const list: Array<{
      left: string;
      top: string;
      yAmp: number;
      scaleMid: number;
      duration: number;
      delay: number;
    }> = [];
    for (let i = 0; i < count; i++) {
      const rng = mulberry32(baseSeed + i * 101);
      const left = `${rng() * 100}%`;
      const top = `${rng() * 100}%`;
      const yAmp = rng() * 70 - 35; // -35..35
      const scaleMid = 0.8 + rng() * 0.4; // 0.8..1.2
      const duration = 5 + rng() * 5; // 5..10
      const delay = rng() * 2; // 0..2
      list.push({ left, top, yAmp, scaleMid, duration, delay });
    }
    return list;
  })();

  return (
    <div className='absolute inset-0 overflow-hidden'>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className='absolute w-1 h-1 bg-lime-400/30 rounded-full'
          style={{ left: p.left, top: p.top }}
          animate={{ y: [0, p.yAmp, 0], scale: [1, p.scaleMid, 1] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
