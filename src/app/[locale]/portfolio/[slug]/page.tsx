import { ExternalLink, Github } from 'lucide-react';
import {
  getAllPortfolioProjects,
  getPortfolioProject,
  getRelatedPortfolioProjects,
} from '@/lib/portfolio-content';

import { Button } from '@/components/ui/button';
import { FadeUp } from '@/components/text-animations';
import { FloatingParticles } from '@/components/floating-particles';
import Footer from '@/components/footer';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import PortfolioCard from '@/components/portfolio-card';
import { getTranslations } from 'next-intl/server';
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';

interface PortfolioProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  const projects = getAllPortfolioProjects();
  return projects.map((project) => ({
    slug: project.metadata.id,
  }));
}

export default async function PortfolioProjectPage({
  params,
}: PortfolioProjectPageProps) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);
  const t = await getTranslations('portfolio');

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedPortfolioProjects(slug, 3);

  return (
    <div className='min-h-screen bg-gradient-to-br from-green-950 via-green-900 to-background dark:from-green-950 dark:via-green-900 dark:to-background relative overflow-hidden'>
      <Navigation />

      {/* Floating particles */}
      <FloatingParticles
        count={30}
        className='text-emerald-500/15 dark:text-lime-400/25'
        size='sm'
      />

      {/* Project Header */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            className='mb-8'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href='/portfolio'
              className='text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors font-medium'
            >
              ← Back to Portfolio
            </Link>
          </motion.div>

          <motion.div
            className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <div className='mb-4'>
                <span className='inline-block bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 text-sm font-semibold px-3 py-1 rounded-full'>
                  {project.metadata.category}
                </span>
              </div>
              <h1 className='text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6'>
                {project.metadata.title}
              </h1>
              <p className='text-xl text-slate-600 dark:text-slate-300 mb-8'>
                {project.metadata.longDescription}
              </p>

              <div className='grid grid-cols-2 gap-6 mb-8'>
                <div>
                  <h3 className='text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2'>
                    Client
                  </h3>
                  <p className='text-slate-900 dark:text-white'>
                    {project.metadata.client}
                  </p>
                </div>
                <div>
                  <h3 className='text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2'>
                    Duration
                  </h3>
                  <p className='text-slate-900 dark:text-white'>
                    {project.metadata.duration}
                  </p>
                </div>
              </div>

              <div className='flex flex-wrap gap-3'>
                {project.metadata.liveUrl && (
                  <motion.a
                    href={project.metadata.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors flex items-center gap-2'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className='w-4 h-4' />
                    View Live Site
                  </motion.a>
                )}
                {project.metadata.githubUrl && (
                  <motion.a
                    href={project.metadata.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold py-2 px-6 rounded-lg transition-colors flex items-center gap-2'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className='w-4 h-4' />
                    View Code
                  </motion.a>
                )}
              </div>
            </div>

            <motion.div
              className='bg-slate-200 dark:bg-slate-700 rounded-lg p-8'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className='aspect-video bg-slate-300 dark:bg-slate-600 rounded-lg flex items-center justify-center'>
                <span className='text-slate-500 dark:text-slate-400'>
                  Project Image
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className='py-20 bg-white dark:bg-slate-800 relative z-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='grid grid-cols-1 lg:grid-cols-2 gap-12'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Technologies */}
            <div>
              <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>
                Technologies Used
              </h2>
              <div className='flex flex-wrap gap-2'>
                {project.metadata.technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className='px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>
                Key Features
              </h2>
              <ul className='space-y-3'>
                {project.metadata.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className='flex items-start'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <svg
                      className='w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <span className='text-slate-600 dark:text-slate-300'>
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className='py-20 relative z-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='grid grid-cols-1 lg:grid-cols-2 gap-12'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div>
              <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>
                Challenges
              </h2>
              <ul className='space-y-4'>
                {project.metadata.challenges.map((challenge, index) => (
                  <motion.li
                    key={index}
                    className='flex items-start'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  >
                    <svg
                      className='w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <span className='text-slate-600 dark:text-slate-300'>
                      {challenge}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>
                Solutions
              </h2>
              <ul className='space-y-4'>
                {project.metadata.solutions.map((solution, index) => (
                  <motion.li
                    key={index}
                    className='flex items-start'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <svg
                      className='w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <span className='text-slate-600 dark:text-slate-300'>
                      {solution}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className='py-20 bg-white dark:bg-slate-800 relative z-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center mb-12'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <h2 className='text-3xl font-bold text-slate-900 dark:text-white mb-4'>
              Results & Impact
            </h2>
            <p className='text-lg text-slate-600 dark:text-slate-300'>
              The measurable outcomes and business impact of this project
            </p>
          </motion.div>

          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {project.metadata.results.map((result, index) => (
              <motion.div
                key={index}
                className='text-center'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
              >
                <div className='w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg
                    className='w-8 h-8 text-emerald-600 dark:text-emerald-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <p className='text-slate-600 dark:text-slate-300'>{result}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className='py-20 relative z-10'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.h2
              className='text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Related Projects
            </motion.h2>
            <motion.div
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              {relatedProjects.map((project, index) => (
                <motion.div
                  key={project.metadata.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                >
                  <PortfolioCard project={project.metadata} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
