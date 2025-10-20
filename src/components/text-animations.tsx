'use client';

import * as React from 'react';

import { motion, useInView } from 'framer-motion';

import { cn } from '@/lib/cn';

type TextStaggeredFadeProps = {
  text: string;
  className?: string;
};

export const StaggeredFade: React.FC<TextStaggeredFadeProps> = ({
  text,
  className = '',
}) => {
  const variants = {
    hidden: { opacity: 0 },
    show: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.07 },
    }),
  };

  const letters = text.split('');
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial='hidden'
      animate={isInView ? 'show' : ''}
      variants={variants}
      viewport={{ once: true }}
      className={cn(
        'text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]',
        className
      )}
    >
      {letters.map((word, i) => (
        <motion.span key={`${word}-${i}`} variants={variants} custom={i}>
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Letters Pull Up Animation
type LettersPullUpProps = {
  text: string;
  className?: string;
};

export const LettersPullUp: React.FC<LettersPullUpProps> = ({
  text,
  className = '',
}) => {
  const letters = text.split('');
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      className={cn('inline-block', className)}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: i * 0.05 }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Words Pull Up Animation
type WordsPullUpProps = {
  text: string;
  className?: string;
};

export const WordsPullUp: React.FC<WordsPullUpProps> = ({
  text,
  className = '',
}) => {
  const words = text.split(' ');
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      className={cn('inline-block', className)}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: i * 0.1 }}
          className='inline-block mr-2'
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Fade Up Animation
type FadeUpProps = {
  text: string;
  className?: string;
};

export const FadeUp: React.FC<FadeUpProps> = ({ text, className = '' }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn('inline-block', className)}
    >
      {text}
    </motion.span>
  );
};

// Typing Effect Animation
type TypingEffectProps = {
  text: string;
  className?: string;
};

export const TypingEffect: React.FC<TypingEffectProps> = ({
  text = 'Typing Effect',
  className = '',
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      className={cn(
        'text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]',
        className
      )}
    >
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};
