'use client';

import { motion } from 'framer-motion';

interface BlogNewsletterProps {
  title: string;
  description: string;
  placeholder: string;
  subscribeText: string;
  privacyText: string;
}

export function BlogNewsletter({
  title,
  description,
  placeholder,
  subscribeText,
  privacyText,
}: BlogNewsletterProps) {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 relative z-10'>
      <div className='max-w-4xl mx-auto'>
        <motion.div
          className='bg-gradient-to-br from-emerald-600 to-lime-600 dark:from-emerald-700 dark:to-lime-700 rounded-2xl p-12 text-center'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className='w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6'
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              className='w-8 h-8 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
              />
            </svg>
          </motion.div>
          <h2 className='text-3xl font-bold text-white mb-4 font-sans'>
            {title}
          </h2>
          <p className='text-white/90 mb-8 font-sans leading-relaxed'>
            {description}
          </p>
          <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
            <motion.input
              type='email'
              placeholder={placeholder}
              className='flex-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:border-white/50 focus:outline-none backdrop-blur-sm'
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
            <motion.button
              className='px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-white/90 transition-colors'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {subscribeText}
            </motion.button>
          </div>
          <p className='text-sm text-white/80 mt-4 font-sans'>{privacyText}</p>
        </motion.div>
      </div>
    </section>
  );
}
