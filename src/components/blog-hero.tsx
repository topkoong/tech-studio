'use client';

import { FadeUp, LettersPullUp } from './text-animations';

import { motion } from 'framer-motion';

interface BlogHeroProps {
  title: string;
  subtitle: string;
}

export function BlogHero({ title, subtitle }: BlogHeroProps) {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 relative z-10'>
      <div className='max-w-7xl mx-auto text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <LettersPullUp
            text={title}
            className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-sans'
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FadeUp
            text={subtitle}
            className='text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-sans leading-relaxed'
          />
        </motion.div>
      </div>
    </section>
  );
}
