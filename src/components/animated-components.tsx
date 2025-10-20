'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

import StackIcon from 'tech-stack-icons';

// Tech Icon Component
function TechIcon({ name }: { name: string }) {
  // Use local images for specific icons
  if (name === 'kafka') {
    return (
      <img src='/kafka.png' alt='Kafka' className='w-5 h-5 object-contain' />
    );
  }

  if (name === 'line') {
    return (
      <img src='/line.png' alt='LINE' className='w-5 h-5 object-contain' />
    );
  }

  // Use StackIcon for all other icons
  return <StackIcon name={name} className='w-5 h-5' />;
}

// Basic Animated Components
export function AnimatedSection({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
}

export function AnimatedDiv({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedCard({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
    >
      {children}
    </motion.div>
  );
}

// Text Animation Components
export function LettersPullUp({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const letters = children.split('');

  return (
    <span className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </span>
  );
}

export function BlurIn({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}

export function FadeUp({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

// StaggeredFade Component for animated text
export function StaggeredFade({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  const variants = {
    hidden: { opacity: 0 },
    show: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.07 },
    }),
  };

  const letters = text.split('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial='hidden'
      animate={isInView ? 'show' : ''}
      variants={variants}
      viewport={{ once: true }}
      className={`${className}`}
    >
      {letters.map((word, i) => (
        <motion.span key={`${word}-${i}`} variants={variants} custom={i}>
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Tech Stack Icons Component
export function TechStackIcons() {
  const techCategories = [
    {
      title: 'Frontend',
      technologies: [
        { name: 'nextjs2', label: 'Next.js' },
        { name: 'react', label: 'React' },
        { name: 'typescript', label: 'TypeScript' },
        { name: 'tailwindcss', label: 'Tailwind CSS' },
        { name: 'astro', label: 'Astro' },
      ],
    },
    {
      title: 'Backend',
      technologies: [
        { name: 'nodejs', label: 'Node.js' },
        { name: 'go', label: 'Go' },
        { name: 'spring', label: 'Spring Boot' },
        { name: 'python', label: 'Python' },
      ],
    },
    {
      title: 'Database',
      technologies: [
        { name: 'postgresql', label: 'PostgreSQL' },
        { name: 'redis', label: 'Redis' },
        { name: 'mongodb', label: 'MongoDB' },
      ],
    },
    {
      title: 'API & Messaging',
      technologies: [
        { name: 'swagger', label: 'Swagger' },
        { name: 'kafka', label: 'Kafka' },
      ],
    },
    {
      title: 'DevOps',
      technologies: [
        { name: 'docker', label: 'Docker' },
        { name: 'kubernetes', label: 'Kubernetes' },
        { name: 'aws', label: 'AWS' },
      ],
    },
    {
      title: 'Automation',
      technologies: [
        { name: 'line', label: 'LINE' },
        { name: 'n8n', label: 'n8n' },
        { name: 'make', label: 'Make' },
      ],
    },
  ];

  return (
    <div className='space-y-12'>
      {techCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          className='space-y-6'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
        >
          <h3 className='text-2xl font-bold text-gray-900 dark:text-white text-center'>
            {category.title}
          </h3>
          <div className='flex flex-wrap justify-center gap-4'>
            {category.technologies.map((tech, techIndex) => (
              <motion.div
                key={tech.name}
                className='flex items-center gap-3 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-lime-500 dark:hover:border-green-500 transition-all duration-300'
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: categoryIndex * 0.1 + techIndex * 0.05,
                }}
                whileHover={{ scale: 1.05 }}
              >
                <TechIcon name={tech.name} />
                <span className='text-gray-900 dark:text-white text-sm font-medium'>
                  {tech.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
