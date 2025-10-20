import {
  getAllPortfolioProjects,
  getPortfolioProject,
  getRelatedPortfolioProjects,
} from '@/lib/portfolio-content';

import Footer from '@/components/footer';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import PortfolioCard from '@/components/portfolio-card';
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

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedPortfolioProjects(slug, 3);

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800'>
      <Navigation />

      {/* Project Header */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='mb-8'>
            <Link
              href='/portfolio'
              className='text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors'
            >
              ← Back to Portfolio
            </Link>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='mb-4'>
                <span className='inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-semibold px-3 py-1 rounded-full'>
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
                  <a
                    href={project.metadata.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors'
                  >
                    View Live Site
                  </a>
                )}
                {project.metadata.githubUrl && (
                  <a
                    href={project.metadata.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold py-2 px-6 rounded-lg transition-colors'
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>

            <div className='bg-slate-200 dark:bg-slate-700 rounded-lg p-8'>
              <div className='aspect-video bg-slate-300 dark:bg-slate-600 rounded-lg flex items-center justify-center'>
                <span className='text-slate-500 dark:text-slate-400'>
                  Project Image
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className='py-20 bg-white dark:bg-slate-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Technologies */}
            <div>
              <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>
                Technologies Used
              </h2>
              <div className='flex flex-wrap gap-2'>
                {project.metadata.technologies.map((tech) => (
                  <span
                    key={tech}
                    className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium'
                  >
                    {tech}
                  </span>
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
                  <li key={index} className='flex items-start'>
                    <svg
                      className='w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0'
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
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <div>
              <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>
                Challenges
              </h2>
              <ul className='space-y-4'>
                {project.metadata.challenges.map((challenge, index) => (
                  <li key={index} className='flex items-start'>
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
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>
                Solutions
              </h2>
              <ul className='space-y-4'>
                {project.metadata.solutions.map((solution, index) => (
                  <li key={index} className='flex items-start'>
                    <svg
                      className='w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0'
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
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className='py-20 bg-white dark:bg-slate-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-slate-900 dark:text-white mb-4'>
              Results & Impact
            </h2>
            <p className='text-lg text-slate-600 dark:text-slate-300'>
              The measurable outcomes and business impact of this project
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {project.metadata.results.map((result, index) => (
              <div key={index} className='text-center'>
                <div className='w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg
                    className='w-8 h-8 text-green-600 dark:text-green-400'
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className='py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center'>
              Related Projects
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {relatedProjects.map((project) => (
                <PortfolioCard
                  key={project.metadata.id}
                  project={project.metadata}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
