'use client';

import { ReactNode, useEffect, useState } from 'react';

import { StackIcon } from 'tech-stack-icons/react';
import { motion } from 'framer-motion';

// Tech Icon Component
function TechIcon({ name }: { name: string }) {
  return <StackIcon name={name} className='w-5 h-5' />;
}

// Basic Animated Components
export function AnimatedSection({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.section
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

// Tech Stack Icons Component
export function TechStackIcons() {
  const techCategories = [
    {
      title: 'Frontend',
      technologies: [
        { name: 'nextjs', label: 'Next.js' },
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
          <h3 className='text-2xl font-bold text-white text-center'>
            {category.title}
          </h3>
          <div className='flex flex-wrap justify-center gap-4'>
            {category.technologies.map((tech, techIndex) => (
              <motion.div
                key={tech.name}
                className='flex items-center gap-3 px-4 py-3 bg-gray-800 dark:bg-gray-800 border border-gray-700 dark:border-gray-700 rounded-lg hover:border-green-500 dark:hover:border-green-500 transition-all duration-300'
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
                <span className='text-white text-sm font-medium'>
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
