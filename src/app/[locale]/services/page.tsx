import {
  AnimatedCard,
  AnimatedDiv,
  AnimatedSection,
} from '@/components/animated-components';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FloatingMascots } from '@/components/floating-mascots';
import { FloatingObstacles } from '@/components/floating-obstacles';
import { FloatingParticles } from '@/components/floating-particles';
import { FloatingParticlesBanner } from '@/components/floating-particles-banner';
import Footer from '@/components/footer';
import { LemonGlow } from '@/components/lemon-glow';
import Navigation from '@/components/navigation';
// Use the same floating mascots style as the home banner
import { getTranslations } from 'next-intl/server';

const locales = ['en', 'th'] as const;

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface ServicesPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  const t = await getTranslations('services');

  return (
    <main className='min-h-screen bg-gradient-to-br from-green-950 via-green-900 to-background dark:from-green-950 dark:via-green-900 dark:to-background relative overflow-hidden'>
      <Navigation />
      <FloatingParticles
        count={120}
        className='text-emerald-500/30 dark:text-lime-400/60'
        size='md'
      />
      <LemonGlow />
      <FloatingMascots
        count={1}
        className='text-emerald-400/30 dark:text-lime-400/50'
      />

      {/* Hero Section */}
      <AnimatedSection className='py-20 px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='max-w-7xl mx-auto text-center'>
          <AnimatedDiv className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6'>
            {t('title')}
          </AnimatedDiv>
          <AnimatedDiv className='text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto'>
            {t('subtitle')}
          </AnimatedDiv>
        </div>
      </AnimatedSection>

      {/* Services Grid */}
      <AnimatedSection className='py-20 px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* UI/UX Design */}
            <AnimatedCard>
              <Card className='h-full hover:shadow-lg transition-all duration-300 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 hover:border-lime-500/50 dark:hover:border-lime-500/50 shadow-xl hover:shadow-lime-500/25'>
                <CardHeader className='pb-4'>
                  <div className='w-16 h-16 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br from-green-500 to-lime-500 text-white shadow-lg shadow-lime-500/30'>
                    <AnimatedDiv className='text-lime-600 dark:text-lime-400'>
                      <svg
                        className='w-8 h-8 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
                        />
                      </svg>
                    </AnimatedDiv>
                  </div>
                  <CardTitle className='text-gray-900 dark:text-white text-xl font-semibold'>
                    {t('offerings.uiuxDesign.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4'>
                    {t('offerings.uiuxDesign.description')}
                  </CardDescription>
                  <ul className='space-y-2 text-gray-600 dark:text-gray-400 text-sm'>
                    <li className='flex items-center'>
                      <CheckCircle2 className='w-4 h-4 text-lime-500 mr-2' />
                      User Interface Design
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle2 className='w-4 h-4 text-lime-500 mr-2' />
                      User Experience Research
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle2 className='w-4 h-4 text-lime-500 mr-2' />
                      Prototyping & Wireframing
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle2 className='w-4 h-4 text-lime-500 mr-2' />
                      Design Systems
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedCard>

            {/* Web Development */}
            <AnimatedCard>
              <Card className='h-full hover:shadow-lg transition-all duration-300 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 hover:border-lime-500/50 dark:hover:border-lime-500/50 shadow-xl hover:shadow-lime-500/25'>
                <CardHeader className='pb-4'>
                  <div className='w-16 h-16 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br from-green-500 to-lime-500 text-white shadow-lg shadow-lime-500/30'>
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                      />
                    </svg>
                  </div>
                  <CardTitle className='text-gray-900 dark:text-white text-xl font-semibold'>
                    {t('offerings.webDevelopment.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4'>
                    {t('offerings.webDevelopment.description')}
                  </CardDescription>
                  <ul className='space-y-2 text-gray-600 dark:text-gray-400 text-sm'>
                    <li className='flex items-center'>
                      <CheckCircle2 className='w-4 h-4 text-lime-500 mr-2' />
                      React & Next.js Applications
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle2 className='w-4 h-4 text-lime-500 mr-2' />
                      Responsive Design
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle2 className='w-4 h-4 text-lime-500 mr-2' />
                      Performance Optimization
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle2 className='w-4 h-4 text-lime-500 mr-2' />
                      SEO & Accessibility
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedCard>

            {/* Full-Stack Development */}
            <AnimatedCard>
              <Card className='h-full hover:shadow-lg transition-all duration-300 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 hover:border-lime-500/50 dark:hover:border-lime-500/50 shadow-xl hover:shadow-lime-500/25'>
                <CardHeader className='pb-4'>
                  <div className='w-16 h-16 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br from-green-500 to-lime-500 text-white shadow-lg shadow-lime-500/30'>
                    <svg
                      className='w-8 h-8 text-white'
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
                  <CardTitle className='text-gray-900 dark:text-white text-xl font-semibold'>
                    {t('offerings.fullStackDevelopment.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4'>
                    {t('offerings.fullStackDevelopment.description')}
                  </CardDescription>
                  <ul className='space-y-2 text-gray-600 dark:text-gray-400 text-sm'>
                    <li className='flex items-center'>
                      <CheckCircle2 className='w-4 h-4 text-lime-500 mr-2' />
                      RESTful APIs
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle2 className='w-4 h-4 text-lime-500 mr-2' />
                      Database Design
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle2 className='w-4 h-4 text-lime-500 mr-2' />
                      System Integration
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle2 className='w-4 h-4 text-lime-500 mr-2' />
                      Microservices Architecture
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedCard>

            {/* LINE Bot Development */}
            <AnimatedCard>
              <Card className='h-full hover:shadow-lg transition-all duration-300 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 hover:border-lime-500/50 dark:hover:border-lime-500/50 shadow-xl hover:shadow-lime-500/25'>
                <CardHeader className='pb-4'>
                  <div className='w-16 h-16 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br from-green-500 to-lime-500 text-white shadow-lg shadow-lime-500/30'>
                    <svg
                      className='w-8 h-8 text-white'
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
                  <CardTitle className='text-gray-900 dark:text-white text-xl font-semibold'>
                    {t('offerings.lineBot.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4'>
                    {t('offerings.lineBot.description')}
                  </CardDescription>
                  <ul className='space-y-2 text-gray-600 dark:text-gray-400 text-sm'>
                    <li className='flex items-center'>
                      <CheckCircle2 className='w-4 h-4 text-lime-500 mr-2' />
                      Chatbot Development
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle2 className='w-4 h-4 text-lime-500 mr-2' />
                      LINE API Integration
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle2 className='w-4 h-4 text-lime-500 mr-2' />
                      Rich Message Templates
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle2 className='w-4 h-4 text-lime-500 mr-2' />
                      Customer Support Automation
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedCard>

            {/* Business Automation */}
            <AnimatedCard>
              <Card className='h-full hover:shadow-lg transition-all duration-300 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 hover:border-lime-500/50 dark:hover:border-lime-500/50 shadow-xl hover:shadow-lime-500/25'>
                <CardHeader className='pb-4'>
                  <div className='w-16 h-16 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br from-green-500 to-lime-500 text-white shadow-lg shadow-lime-500/30'>
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z'
                      />
                    </svg>
                  </div>
                  <CardTitle className='text-gray-900 dark:text-white text-xl font-semibold'>
                    {t('offerings.businessAutomation.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4'>
                    {t('offerings.businessAutomation.description')}
                  </CardDescription>
                  <ul className='space-y-2 text-gray-600 dark:text-gray-400 text-sm'>
                    <li className='flex items-center'>
                      <CheckCircle2 className='w-4 h-4 text-lime-500 mr-2' />
                      Workflow Automation
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle2 className='w-4 h-4 text-lime-500 mr-2' />
                      Data Processing
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle2 className='w-4 h-4 text-lime-500 mr-2' />
                      Task Scheduling
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle2 className='w-4 h-4 text-lime-500 mr-2' />
                      Error Handling
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedCard>

            {/* API Development */}
            <AnimatedCard>
              <Card className='h-full hover:shadow-lg transition-all duration-300 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 hover:border-lime-500/50 dark:hover:border-lime-500/50 shadow-xl hover:shadow-lime-500/25'>
                <CardHeader className='pb-4'>
                  <div className='w-16 h-16 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br from-green-500 to-lime-500 text-white shadow-lg shadow-lime-500/30'>
                    <svg
                      className='w-8 h-8 text-white'
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
                  <CardTitle className='text-gray-900 dark:text-white text-xl font-semibold'>
                    {t('offerings.apiDevelopment.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4'>
                    {t('offerings.apiDevelopment.description')}
                  </CardDescription>
                  <ul className='space-y-2 text-gray-600 dark:text-gray-400 text-sm'>
                    <li className='flex items-center'>
                      <CheckCircle2 className='w-4 h-4 text-lime-500 mr-2' />
                      RESTful APIs
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle2 className='w-4 h-4 text-lime-500 mr-2' />
                      GraphQL Services
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle2 className='w-4 h-4 text-lime-500 mr-2' />
                      Third-party Integrations
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle2 className='w-4 h-4 text-lime-500 mr-2' />
                      API Documentation
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection className='py-20 px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <AnimatedDiv className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
              {t('process.title')}
            </AnimatedDiv>
            <AnimatedDiv className='text-lg text-gray-700 dark:text-gray-300'>
              {t('process.subtitle')}
            </AnimatedDiv>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <AnimatedCard>
              <div className='text-center'>
                <div className='w-16 h-16 bg-lime-100 dark:bg-lime-900 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl font-bold text-lime-600 dark:text-lime-400'>
                    1
                  </span>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
                  {t('process.steps.one.title')}
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  {t('process.steps.one.description')}
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard>
              <div className='text-center'>
                <div className='w-16 h-16 bg-lime-100 dark:bg-lime-900 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl font-bold text-lime-600 dark:text-lime-400'>
                    2
                  </span>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
                  {t('process.steps.two.title')}
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  {t('process.steps.two.description')}
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard>
              <div className='text-center'>
                <div className='w-16 h-16 bg-lime-100 dark:bg-lime-900 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl font-bold text-lime-600 dark:text-lime-400'>
                    3
                  </span>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
                  {t('process.steps.three.title')}
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  {t('process.steps.three.description')}
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard>
              <div className='text-center'>
                <div className='w-16 h-16 bg-lime-100 dark:bg-lime-900 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl font-bold text-lime-600 dark:text-lime-400'>
                    4
                  </span>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
                  {t('process.steps.four.title')}
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  {t('process.steps.four.description')}
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className='py-20 px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='max-w-7xl mx-auto text-center'>
          <AnimatedDiv className='text-3xl font-bold mb-4 bg-gradient-to-r from-lime-400 via-green-500 to-lime-400 bg-clip-text text-transparent'>
            {t('cta.title')}
          </AnimatedDiv>
          <AnimatedDiv className='text-lg text-white/90 mb-8'>
            {t('cta.description')}
          </AnimatedDiv>
          <AnimatedDiv>
            <Button className='bg-lime-500 hover:bg-lime-600 text-black font-semibold px-8 py-3 shadow-xl shadow-lime-500/30 hover:shadow-lime-500/40'>
              {t('cta.button')}
              <ArrowRight className='w-4 h-4 ml-2' />
            </Button>
          </AnimatedDiv>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  );
}
