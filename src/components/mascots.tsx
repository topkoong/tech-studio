'use client';

import { motion } from 'framer-motion';

export const ServicesMascot = () => (
  <motion.div
    className='absolute right-6 top-6 w-20 h-20 md:w-24 md:h-24'
    animate={{ y: [0, -8, 0], rotate: [0, 3, 0, -3, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
  >
    <div className='w-full h-full rounded-2xl bg-gradient-to-br from-lime-400 to-emerald-500 grid place-items-center text-black font-bold'>
      DEV
    </div>
  </motion.div>
);

export const ServicesGearsMascot = () => (
  <motion.div
    className='absolute right-8 top-10 w-24 h-24 md:w-28 md:h-28'
    animate={{ rotate: [0, 10, -10, 0] }}
    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
  >
    <div className='relative w-full h-full'>
      <div className='absolute inset-0 rounded-full bg-gradient-to-br from-green-500 to-lime-500 opacity-90 blur-sm' />
      <div className='absolute inset-1 rounded-full bg-gradient-to-br from-green-400 to-lime-400 grid place-items-center shadow-lg shadow-lime-500/30'>
        <div className='relative'>
          <motion.div
            className='w-5 h-5 rounded-full bg-black/70 absolute -top-2 -left-2'
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className='w-6 h-6 rounded-full bg-black/70 absolute top-0 right-0'
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
          <span className='relative z-10 text-black font-extrabold'>GEAR</span>
        </div>
      </div>
    </div>
  </motion.div>
);

export const PortfolioMascot = () => (
  <motion.div
    className='absolute right-8 top-8 w-16 h-16 md:w-20 md:h-20'
    animate={{ y: [0, 10, 0], rotate: [0, -2, 0, 2, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
  >
    <div className='w-full h-full rounded-full bg-gradient-to-br from-emerald-400 to-lime-500 grid place-items-center text-black font-bold'>
      UX
    </div>
  </motion.div>
);

export const BlogMascot = () => (
  <motion.div
    className='absolute right-8 top-10 w-14 h-14 md:w-18 md:h-18'
    animate={{ y: [0, -10, 0], rotate: [0, 4, 0, -4, 0] }}
    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
  >
    <div className='w-full h-full rounded-xl bg-gradient-to-br from-lime-400 to-green-500 grid place-items-center text-black font-bold'>
      AI
    </div>
  </motion.div>
);

export const ContactMascot = () => (
  <motion.div
    className='absolute right-6 top-8 w-16 h-16 md:w-20 md:h-20'
    animate={{ y: [0, 6, 0], rotate: [0, 2, 0, -2, 0] }}
    transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
  >
    <div className='w-full h-full rounded-2xl bg-gradient-to-br from-green-400 to-lime-500 grid place-items-center text-black font-bold'>
      Hi
    </div>
  </motion.div>
);
