'use client';

import { motion } from 'framer-motion';

interface AnimatedAvatarProps {
  initial: string;
  className?: string;
}

export function AnimatedAvatar({
  initial,
  className = 'w-12 h-12 bg-gradient-to-br from-lime-500 to-green-500 rounded-full flex items-center justify-center shadow-lg shadow-lime-500/30',
}: AnimatedAvatarProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <span className='text-white font-bold text-lg'>{initial}</span>
    </motion.div>
  );
}
