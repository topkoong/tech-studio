import Footer from '@/components/footer';
import Navigation from '@/components/navigation';
import { getTranslations } from 'next-intl/server';

export default async function ServicesPage() {
  const t = await getTranslations('services');

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800'>
      <Navigation />

      {/* Hero Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto text-center'>
          <h1 className='text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6'>
            {t('title')}
          </h1>
          <p className='text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto'>
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-20 bg-white dark:bg-slate-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* UI/UX Design */}
            <div className='bg-slate-50 dark:bg-slate-700 p-8 rounded-lg'>
              <div className='w-16 h-16 bg-lime-100 dark:bg-lime-900 rounded-lg flex items-center justify-center mb-6'>
                <svg
                  className='w-8 h-8 text-lime-600 dark:text-lime-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z'
                  />
                </svg>
              </div>
              <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>
                UI/UX Design
              </h2>
              <p className='text-slate-600 dark:text-slate-300 mb-6'>
                Beautiful, user-friendly interfaces that engage and convert visitors into customers
              </p>
              <ul className='space-y-2 text-slate-600 dark:text-slate-300'>
                <li className='flex items-center'>
                  <svg className='w-4 h-4 text-lime-500 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                  </svg>
                  User Interface Design
                </li>
                <li className='flex items-center'>
                  <svg className='w-4 h-4 text-lime-500 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                  </svg>
                  User Experience Research
                </li>
                <li className='flex items-center'>
                  <svg className='w-4 h-4 text-lime-500 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                  </svg>
                  Prototyping & Wireframing
                </li>
                <li className='flex items-center'>
                  <svg className='w-4 h-4 text-lime-500 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                  </svg>
                  Design Systems
                </li>
              </ul>
            </div>

            {/* Web Development */}
            <div className='bg-slate-50 dark:bg-slate-700 p-8 rounded-lg'>
              <div className='w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6'>
                <svg
                  className='w-8 h-8 text-blue-600 dark:text-blue-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
              </div>
              <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>
                Web Development
              </h2>
              <p className='text-slate-600 dark:text-slate-300 mb-6'>
                Custom websites and web applications built with modern technologies and best practices
              </p>
              <ul className='space-y-2 text-slate-600 dark:text-slate-300'>
                <li className='flex items-center'>
                  <svg className='w-4 h-4 text-blue-500 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                  </svg>
                  React & Next.js Applications
                </li>
                <li className='flex items-center'>
                  <svg className='w-4 h-4 text-blue-500 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                  </svg>
                  Responsive Design
                </li>
                <li className='flex items-center'>
                  <svg className='w-4 h-4 text-blue-500 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                  </svg>
                  Performance Optimization
                </li>
                <li className='flex items-center'>
                  <svg className='w-4 h-4 text-blue-500 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                  </svg>
                  SEO & Accessibility
                </li>
              </ul>
            </div>

            {/* Full-Stack Development */}
            <div className='bg-slate-50 dark:bg-slate-700 p-8 rounded-lg'>
              <div className='w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6'>
                <svg
                  className='w-8 h-8 text-purple-600 dark:text-purple-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4'
                  />
                </svg>
              </div>
              <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>
                Full-Stack Development
              </h2>
              <p className='text-slate-600 dark:text-slate-300 mb-6'>
                Complete end-to-end solutions from frontend to backend with seamless integration
              </p>
              <ul className='space-y-2 text-slate-600 dark:text-slate-300'>
                <li className='flex items-center'>
                  <svg className='w-4 h-4 text-purple-500 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                  </svg>
                  RESTful APIs
                </li>
                <li className='flex items-center'>
                  <svg className='w-4 h-4 text-purple-500 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                  </svg>
                  Database Design
                </li>
                <li className='flex items-center'>
                  <svg className='w-4 h-4 text-purple-500 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                  </svg>
                  System Integration
                </li>
                <li className='flex items-center'>
                  <svg className='w-4 h-4 text-purple-500 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                  </svg>
                  Microservices Architecture
                </li>
              </ul>
            </div>

            {/* LINE Bot Development */}
            <div className='bg-slate-50 dark:bg-slate-700 p-8 rounded-lg'>
              <div className='w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-6'>
                <svg
                  className='w-8 h-8 text-green-600 dark:text-green-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                  />
                </svg>
              </div>
              <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>
                LINE Bot Development
              </h2>
              <p className='text-slate-600 dark:text-slate-300 mb-6'>
                Intelligent chatbots and automation solutions for LINE platform integration
              </p>
              <ul className='space-y-2 text-slate-600 dark:text-slate-300'>
                <li className='flex items-center'>
                  <svg className='w-4 h-4 text-green-500 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                  </svg>
                  Chatbot Development
                </li>
                <li className='flex items-center'>
                  <svg className='w-4 h-4 text-green-500 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                  </svg>
                  LINE API Integration
                </li>
                <li className='flex items-center'>
                  <svg className='w-4 h-4 text-green-500 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                  </svg>
                  Rich Message Templates
                </li>
                <li className='flex items-center'>
                  <svg className='w-4 h-4 text-green-500 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                  </svg>
                  Customer Support Automation
                </li>
              </ul>
            </div>

            {/* Business Automation */}
            <div className='bg-slate-50 dark:bg-slate-700 p-8 rounded-lg'>
              <div className='w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-6'>
                <svg
                  className='w-8 h-8 text-orange-600 dark:text-orange-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  />
                </svg>
              </div>
              <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>
                Business Automation
              </h2>
              <p className='text-slate-600 dark:text-slate-300 mb-6'>
                Streamline your business processes with intelligent automation and workflow optimization
              </p>
              <ul className='space-y-2 text-slate-600 dark:text-slate-300'>
                <li className='flex items-center'>
                  <svg className='w-4 h-4 text-orange-500 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                  </svg>
                  Workflow Automation
                </li>
                <li className='flex items-center'>
                  <svg className='w-4 h-4 text-orange-500 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                  </svg>
                  Data Processing
                </li>
                <li className='flex items-center'>
                  <svg className='w-4 h-4 text-orange-500 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                  </svg>
                  Task Scheduling
                </li>
                <li className='flex items-center'>
                  <svg className='w-4 h-4 text-orange-500 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                  </svg>
                  Error Handling
                </li>
              </ul>
            </div>

            {/* API Development */}
            <div className='bg-slate-50 dark:bg-slate-700 p-8 rounded-lg'>
              <div className='w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-6'>
                <svg
                  className='w-8 h-8 text-indigo-600 dark:text-indigo-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
                  />
                </svg>
              </div>
              <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>
                API Development
              </h2>
              <p className='text-slate-600 dark:text-slate-300 mb-6'>
                Robust and scalable APIs that power your applications and integrate with third-party services
              </p>
              <ul className='space-y-2 text-slate-600 dark:text-slate-300'>
                <li className='flex items-center'>
                  <svg className='w-4 h-4 text-indigo-500 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                  </svg>
                  RESTful APIs
                </li>
                <li className='flex items-center'>
                  <svg className='w-4 h-4 text-indigo-500 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                  </svg>
                  GraphQL Services
                </li>
                <li className='flex items-center'>
                  <svg className='w-4 h-4 text-indigo-500 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                  </svg>
                  Third-party Integrations
                </li>
                <li className='flex items-center'>
                  <svg className='w-4 h-4 text-indigo-500 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                  </svg>
                  API Documentation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-slate-900 dark:text-white mb-4'>
              Our Development Process
            </h2>
            <p className='text-lg text-slate-600 dark:text-slate-300'>
              We follow a structured approach to ensure successful project
              delivery
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-blue-600 dark:text-blue-400'>
                  1
                </span>
              </div>
              <h3 className='text-xl font-semibold text-slate-900 dark:text-white mb-2'>
                Discovery
              </h3>
              <p className='text-slate-600 dark:text-slate-300'>
                Understanding your business requirements and technical needs
              </p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-green-600 dark:text-green-400'>
                  2
                </span>
              </div>
              <h3 className='text-xl font-semibold text-slate-900 dark:text-white mb-2'>
                Planning
              </h3>
              <p className='text-slate-600 dark:text-slate-300'>
                Creating detailed project plans and technical specifications
              </p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-purple-600 dark:text-purple-400'>
                  3
                </span>
              </div>
              <h3 className='text-xl font-semibold text-slate-900 dark:text-white mb-2'>
                Development
              </h3>
              <p className='text-slate-600 dark:text-slate-300'>
                Building your custom solution with regular progress updates
              </p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-orange-600 dark:text-orange-400'>
                  4
                </span>
              </div>
              <h3 className='text-xl font-semibold text-slate-900 dark:text-white mb-2'>
                Launch
              </h3>
              <p className='text-slate-600 dark:text-slate-300'>
                Deploying your solution and providing ongoing support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-white dark:bg-slate-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold text-slate-900 dark:text-white mb-4'>
            Ready to Start Your Project?
          </h2>
          <p className='text-lg text-slate-600 dark:text-slate-300 mb-8'>
            Let's discuss your requirements and create a custom solution for
            your business
          </p>
          <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors'>
            Get Started Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
