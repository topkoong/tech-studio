'use client';

import { motion } from 'framer-motion';
import { LettersPullUp, FadeUp } from './text-animations';

interface PortfolioHeroProps {
  title: string;
  subtitle: string;
}

export function PortfolioHero({ title, subtitle }: PortfolioHeroProps) {
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
            className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6'
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FadeUp
            text={subtitle}
            className='text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto'
          />
        </motion.div>
      </div>
    </section>
  );
}
