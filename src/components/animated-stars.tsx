'use client';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface AnimatedStarsProps {
  count?: number;
  className?: string;
}

export function AnimatedStars({
  count = 5,
  className = 'w-5 h-5 text-lime-500 fill-current',
}: AnimatedStarsProps) {
  return (
    <div className='flex mb-4'>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1, duration: 0.3 }}
        >
          <Star className={className} />
        </motion.div>
      ))}
    </div>
  );
}
