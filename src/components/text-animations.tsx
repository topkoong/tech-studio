'use client';

import * as React from 'react';

import { motion, useInView } from 'framer-motion';

import { cn } from '@/lib/cn';

type TextStaggeredFadeProps = {
  text: string;
  className?: string;
};

/**
 * Staggered fade animation component
 * Animates each letter with a staggered delay for a wave-like effect
 */
export const StaggeredFade: React.FC<TextStaggeredFadeProps> = ({
  text,
  className = '',
}) => {
  // Animation variants for staggered effect
  const variants = {
    hidden: { opacity: 0 }, // Initial state: invisible
    show: (i: number) => ({
      // Animated state: visible with delay
      y: 0, // No vertical offset
      opacity: 1, // Fully visible
      transition: { delay: i * 0.07 }, // Staggered delay (70ms per letter)
    }),
  };

  // Split text into individual letters for animation
  const letters = text.split('');
  const ref = React.useRef(null);
  // Track if component is in viewport (triggers animation once)
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial='hidden' // Start in hidden state
      animate={isInView ? 'show' : ''} // Animate to show when in view
      variants={variants}
      viewport={{ once: true }} // Only animate once
      className={cn(className)}
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

/**
 * Letters pull up animation component
 * Animates each letter pulling up from below with staggered timing
 */
export const LettersPullUp: React.FC<LettersPullUpProps> = ({
  text,
  className = '',
}) => {
  // Split text into individual letters
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
            hidden: { y: 20, opacity: 0 }, // Start 20px below, invisible
            visible: { y: 0, opacity: 1 }, // End at normal position, visible
          }}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: i * 0.05 }} // 50ms delay per letter
        >
          {/* Replace spaces with non-breaking spaces to maintain spacing */}
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

/**
 * Words pull up animation component
 * Animates each word pulling up from below with staggered timing
 */
export const WordsPullUp: React.FC<WordsPullUpProps> = ({
  text,
  className = '',
}) => {
  // Split text into individual words
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
            hidden: { y: 20, opacity: 0 }, // Start 20px below, invisible
            visible: { y: 0, opacity: 1 }, // End at normal position, visible
          }}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: i * 0.1 }} // 100ms delay per word
          className='inline-block mr-2' // Add margin between words
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

/**
 * Fade up animation component
 * Simple fade in with upward movement for entire text block
 */
export const FadeUp: React.FC<FadeUpProps> = ({ text, className = '' }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }} // Start invisible, 20px below
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }} // 600ms duration with ease-out
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

/**
 * Typing effect animation component
 * Simulates typing by revealing letters one by one with a delay
 */
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
          initial={{ opacity: 0 }} // Start invisible
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: index * 0.1 }} // 200ms duration, 100ms delay per letter
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Gradual Spacing Animation
type GradualSpacingProps = {
  text: string;
  className?: string;
};

/**
 * Gradual spacing animation component
 * Animates letters with increasing spacing between them
 */
export const GradualSpacing: React.FC<GradualSpacingProps> = ({
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
            hidden: { letterSpacing: '0px', opacity: 0 },
            visible: {
              letterSpacing: `${i * 0.1}px`,
              opacity: 1,
              transition: { delay: i * 0.05, duration: 0.3 },
            },
          }}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Rotate Words Animation
type RotateWordsProps = {
  words: string[];
  className?: string;
};

/**
 * Rotate words animation component
 * Cycles through different words with rotation effect
 */
export const RotateWords: React.FC<RotateWordsProps> = ({
  words,
  className = '',
}) => {
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, [isInView, words.length]);

  return (
    <motion.span ref={ref} className={cn('inline-block', className)}>
      <motion.span
        key={currentWordIndex}
        initial={{ rotateX: 90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        exit={{ rotateX: -90, opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {words[currentWordIndex]}
      </motion.span>
    </motion.span>
  );
};

// Blur In Animation
type BlurInProps = {
  text: string;
  className?: string;
};

/**
 * Blur in animation component
 * Text appears with a blur-to-focus effect
 */
export const BlurIn: React.FC<BlurInProps> = ({ text, className = '' }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ filter: 'blur(10px)', opacity: 0 }}
      animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={cn('inline-block', className)}
    >
      {text}
    </motion.span>
  );
};

// Fade Down Animation
type FadeDownProps = {
  text: string;
  className?: string;
};

/**
 * Fade down animation component
 * Text fades in while moving down
 */
export const FadeDown: React.FC<FadeDownProps> = ({ text, className = '' }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn('inline-block', className)}
    >
      {text}
    </motion.span>
  );
};

// Logo Animation Component
type LogoAnimationProps = {
  text: string;
  className?: string;
  variant?: 'letters-pull-up' | 'gradual-spacing' | 'blur-in' | 'fade-up';
};

/**
 * Logo animation component with multiple variants
 * Perfect for navbar logos and branding
 */
export const LogoAnimation: React.FC<LogoAnimationProps> = ({
  text,
  className = '',
  variant = 'letters-pull-up',
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const renderAnimation = () => {
    switch (variant) {
      case 'letters-pull-up':
        return <LettersPullUp text={text} className={className} />;
      case 'gradual-spacing':
        return <GradualSpacing text={text} className={className} />;
      case 'blur-in':
        return <BlurIn text={text} className={className} />;
      case 'fade-up':
        return <FadeUp text={text} className={className} />;
      default:
        return <LettersPullUp text={text} className={className} />;
    }
  };

  return (
    <motion.span ref={ref} className={cn('inline-block', className)}>
      {renderAnimation()}
    </motion.span>
  );
};
