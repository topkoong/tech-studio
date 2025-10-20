import Footer from '@/components/footer';
import Navigation from '@/components/navigation';
import { getTranslations } from 'next-intl/server';

export default async function ContactPage() {
  const t = await getTranslations('contact');

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

      {/* Contact Form */}
      <section className='py-20 bg-white dark:bg-slate-800'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Information */}
            <div>
              <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>
                Get in Touch
              </h2>
              <p className='text-slate-600 dark:text-slate-300 mb-8'>
                Ready to start your custom software development project? We'd
                love to hear from you. Send us a message and we'll respond
                within 24 hours.
              </p>

              <div className='space-y-6'>
                <div className='flex items-start'>
                  <div className='w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4'>
                    <svg
                      className='w-6 h-6 text-blue-600 dark:text-blue-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-slate-900 dark:text-white mb-1'>
                      Email
                    </h3>
                    <p className='text-slate-600 dark:text-slate-300'>
                      hello@techstudio.com
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4'>
                    <svg
                      className='w-6 h-6 text-green-600 dark:text-green-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-slate-900 dark:text-white mb-1'>
                      Phone
                    </h3>
                    <p className='text-slate-600 dark:text-slate-300'>
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4'>
                    <svg
                      className='w-6 h-6 text-purple-600 dark:text-purple-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-slate-900 dark:text-white mb-1'>
                      Office
                    </h3>
                    <p className='text-slate-600 dark:text-slate-300'>
                      123 Tech Street
                      <br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className='space-y-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'
                  >
                    {t('form.name')}
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    required
                    className='w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white'
                    placeholder='Your full name'
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'
                  >
                    {t('form.email')}
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    required
                    className='w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white'
                    placeholder='your@email.com'
                  />
                </div>

                <div>
                  <label
                    htmlFor='company'
                    className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'
                  >
                    {t('form.company')}
                  </label>
                  <input
                    type='text'
                    id='company'
                    name='company'
                    className='w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white'
                    placeholder='Your company name'
                  />
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'
                  >
                    {t('form.message')}
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={5}
                    required
                    className='w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white'
                    placeholder='Tell us about your project requirements...'
                  />
                </div>

                <button
                  type='submit'
                  className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors'
                >
                  {t('form.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-20'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-slate-900 dark:text-white mb-4'>
              Frequently Asked Questions
            </h2>
            <p className='text-lg text-slate-600 dark:text-slate-300'>
              Common questions about our custom software development services
            </p>
          </div>

          <div className='space-y-8'>
            <div className='bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg'>
              <h3 className='text-xl font-semibold text-slate-900 dark:text-white mb-3'>
                How long does a typical project take?
              </h3>
              <p className='text-slate-600 dark:text-slate-300'>
                Project timelines vary depending on complexity and requirements.
                Simple web applications typically take 2-4 months, while complex
                enterprise solutions can take 6-12 months. We provide detailed
                project timelines during our initial consultation.
              </p>
            </div>

            <div className='bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg'>
              <h3 className='text-xl font-semibold text-slate-900 dark:text-white mb-3'>
                What technologies do you work with?
              </h3>
              <p className='text-slate-600 dark:text-slate-300'>
                We work with modern technologies including React, Next.js,
                Node.js, Python, TypeScript, and various databases. We choose
                the best technology stack based on your specific requirements
                and business needs.
              </p>
            </div>

            <div className='bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg'>
              <h3 className='text-xl font-semibold text-slate-900 dark:text-white mb-3'>
                Do you provide ongoing support?
              </h3>
              <p className='text-slate-600 dark:text-slate-300'>
                Yes, we offer comprehensive support and maintenance services
                including bug fixes, updates, feature enhancements, and
                technical support. We have flexible support packages to meet
                your needs.
              </p>
            </div>

            <div className='bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg'>
              <h3 className='text-xl font-semibold text-slate-900 dark:text-white mb-3'>
                How do you ensure project quality?
              </h3>
              <p className='text-slate-600 dark:text-slate-300'>
                We follow industry best practices including code reviews,
                automated testing, continuous integration, and regular client
                feedback sessions. Our quality assurance process ensures
                reliable and maintainable software.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
