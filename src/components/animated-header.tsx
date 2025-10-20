'use client';

import { FadeUp, LettersPullUp } from './text-animations';

import { motion } from 'framer-motion';

interface AnimatedHeaderProps {
  title: string;
  subtitle: string;
}

export function AnimatedHeader({ title, subtitle }: AnimatedHeaderProps) {
  return (
    <div className='text-center mb-20 md:mb-24 px-4'>
      <div className='overflow-hidden'>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <LettersPullUp
            text={title}
            className='block text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-10 md:mb-12 font-sans'
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ y: [0, -2, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      >
        <FadeUp
          text={subtitle}
          className='block text-2xl md:text-3xl text-gray-700 dark:text-gray-300 max-w-3xl md:max-w-4xl mx-auto font-sans leading-relaxed'
        />
      </motion.div>
    </div>
  );
}
