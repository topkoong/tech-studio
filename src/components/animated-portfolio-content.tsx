'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeUp } from '@/components/text-animations';
import { FloatingParticles } from '@/components/floating-particles';
import Link from 'next/link';
import PortfolioCard from '@/components/portfolio-card';
import { PortfolioProject } from '@/lib/portfolio-content';

interface AnimatedPortfolioContentProps {
  project: PortfolioProject;
  relatedProjects: PortfolioProject[];
  translations: {
    backToPortfolio: string;
    technologies: string;
    features: string;
    challenges: string;
    solutions: string;
    results: string;
    relatedProjects: string;
    liveDemo: string;
    viewCode: string;
  };
}

export function AnimatedPortfolioContent({ 
  project, 
  relatedProjects, 
  translations 
}: AnimatedPortfolioContentProps) {
  return (
    <div className='min-h-screen bg-gradient-to-br from-green-950 via-green-900 to-background dark:from-green-950 dark:via-green-900 dark:to-background relative overflow-hidden'>
      <FloatingParticles count={80} />
      
      <article className='py-20 px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='max-w-4xl mx-auto'>
          <motion.div
            className='mb-8'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href='/portfolio'
              className='inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors mb-6'
            >
              ← {translations.backToPortfolio}
            </Link>
          </motion.div>

          <motion.div
            className='mb-12'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
              {project.metadata.title}
            </h1>
            <p className='text-xl text-gray-600 dark:text-gray-300 mb-8'>
              {project.metadata.description}
            </p>
            
            <div className='flex flex-wrap gap-4 mb-8'>
              {project.metadata.liveUrl && (
                <motion.a
                  href={project.metadata.liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className='w-4 h-4 mr-2' />
                  {translations.liveDemo}
                </motion.a>
              )}
              {project.metadata.githubUrl && (
                <motion.a
                  href={project.metadata.githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className='w-4 h-4 mr-2' />
                  {translations.viewCode}
                </motion.a>
              )}
            </div>
          </motion.div>

          <motion.div
            className='mb-12'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
              {translations.technologies}
            </h2>
            <div className='flex flex-wrap gap-2'>
              {project.metadata.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  className='px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm'
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className='mb-12'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
              {translations.features}
            </h2>
            <ul className='space-y-3'>
              {project.metadata.features.map((feature, index) => (
                <motion.li
                  key={index}
                  className='flex items-start text-gray-700 dark:text-gray-300'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className='mb-12'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
              {translations.challenges}
            </h2>
            <ul className='space-y-3'>
              {project.metadata.challenges.map((challenge, index) => (
                <motion.li
                  key={index}
                  className='flex items-start text-gray-700 dark:text-gray-300'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  <span className='w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                  {challenge}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className='mb-12'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
              {translations.solutions}
            </h2>
            <ul className='space-y-3'>
              {project.metadata.solutions.map((solution, index) => (
                <motion.li
                  key={index}
                  className='flex items-start text-gray-700 dark:text-gray-300'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                >
                  <span className='w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                  {solution}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className='mb-12'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
              {translations.results}
            </h2>
            <ul className='space-y-3'>
              {project.metadata.results.map((result, index) => (
                <motion.li
                  key={index}
                  className='flex items-start text-gray-700 dark:text-gray-300'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                >
                  <span className='w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                  {result}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className='mb-12'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className='prose prose-lg max-w-none dark:prose-invert'>
              <div dangerouslySetInnerHTML={{ __html: project.content }} />
            </div>
          </motion.div>
        </div>
      </article>

      {relatedProjects.length > 0 && (
        <section className='py-20 bg-white dark:bg-slate-800 relative z-10'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.h2
              className='text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              {translations.relatedProjects}
            </motion.h2>
            <motion.div
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              {relatedProjects.map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.metadata.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.0 + index * 0.1 }}
                >
                  <PortfolioCard project={relatedProject.metadata} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
