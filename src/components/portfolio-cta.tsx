'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

interface PortfolioCTAProps {
  title: string;
  description: string;
  buttonText: string;
}

export function PortfolioCTA({ title, description, buttonText }: PortfolioCTAProps) {
  return (
    <section className='py-20 bg-gradient-to-br from-emerald-600 to-lime-600 dark:from-emerald-700 dark:to-lime-700 relative z-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <h2 className='text-3xl font-bold text-white mb-4'>
            {title}
          </h2>
          <p className='text-lg text-white/90 mb-8 max-w-2xl mx-auto'>
            {description}
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size='lg'
              className='bg-white text-emerald-600 hover:bg-white/90 font-semibold px-8 py-3'
            >
              {buttonText}
              <ArrowRight className='w-4 h-4 ml-2' />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
