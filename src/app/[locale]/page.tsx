import {
  AnimatedButton,
  AnimatedCard,
  AnimatedDiv,
  AnimatedSection,
  BlurIn,
  FadeUp,
  LettersPullUp,
  TechStackIcons,
} from '@/components/animated-components';
import {
  ArrowRight,
  Globe,
  MessageCircle,
  Star,
  TrendingUp,
  Users,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { AnimatedAvatar } from '@/components/animated-avatar';
import { AnimatedBanner } from '@/components/animated-banner';
import { AnimatedStars } from '@/components/animated-stars';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FloatingMascots } from '@/components/floating-mascots';
import { FloatingParticles } from '@/components/floating-particles';
import { FloatingParticlesBanner } from '@/components/floating-particles-banner';
import Footer from '@/components/footer';
import Navigation from '@/components/navigation';
import { Separator } from '@/components/ui/separator';
import { TypingEffect } from '@/components/text-animations';
import { getTranslations } from 'next-intl/server';

const locales = ['en', 'th'] as const;

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface HomePageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const t = await getTranslations('home');

  return (
    <main className='min-h-screen bg-background dark:bg-background relative overflow-hidden'>
      <Navigation />

      {/* Animated Banner - Main Hero Section with darker background */}
      <header className='relative bg-gradient-to-br from-green-950 via-green-900 to-background dark:from-green-950 dark:via-green-900 dark:to-background'>
        {/* Floating particles in hero section */}
        <FloatingParticlesBanner />
        <AnimatedBanner />
      </header>

      {/* Tech Stack Section */}
      <AnimatedSection
        id='tech-stack-section'
        className='relative py-20 md:py-32 bg-gradient-to-br from-slate-50 via-emerald-50 to-lime-50 dark:from-green-800 dark:via-green-900 dark:to-lime-900 text-gray-900 dark:text-white overflow-hidden'
      >
        {/* Floating particles - moved outside z-index container */}
        <FloatingParticles
          count={100}
          className='text-emerald-500/30 dark:text-lime-400/60'
          size='md'
        />

        {/* Floating Mascots */}
        <FloatingMascots
          count={1}
          className='text-emerald-500/25 dark:text-lime-400/40'
        />

        <div className='absolute inset-0 -z-10'>
          {/* Enhanced background blur elements */}
          <div
            className='absolute w-96 h-96 bg-gradient-to-r from-emerald-400/15 to-lime-400/15 dark:from-lime-500/30 dark:to-green-500/30 rounded-full blur-3xl'
            style={{ top: '10%', left: '10%' }}
          />
          <div
            className='absolute w-80 h-80 bg-gradient-to-r from-lime-400/10 to-emerald-400/10 dark:from-green-400/25 dark:to-lime-400/25 rounded-full blur-3xl'
            style={{ bottom: '20%', right: '15%' }}
          />
          <div
            className='absolute w-64 h-64 bg-gradient-to-r from-emerald-300/8 to-lime-300/8 dark:from-lime-400/20 dark:to-green-400/20 rounded-full blur-2xl'
            style={{ top: '60%', left: '50%' }}
          />

          {/* Additional accent elements */}
          <div
            className='absolute w-32 h-32 bg-gradient-to-r from-lime-400/12 to-emerald-400/12 dark:from-lime-500/40 dark:to-green-500/40 rounded-full blur-xl'
            style={{ top: '30%', right: '30%' }}
          />
          <div
            className='absolute w-48 h-48 bg-gradient-to-r from-emerald-300/8 to-lime-300/8 dark:from-green-400/25 dark:to-lime-400/25 rounded-full blur-2xl'
            style={{ bottom: '40%', left: '20%' }}
          />
        </div>

        <div className='container relative z-10'>
          <div className='mx-auto max-w-4xl text-center mb-16'>
            <TypingEffect
              text={t('techStack.title')}
              className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-green-600 to-lime-600 dark:from-green-400 dark:to-lime-400 bg-clip-text text-transparent'
            />
            <p className='text-lg text-gray-700 dark:text-green-100 max-w-3xl mx-auto mt-4'>
              {t('techStack.subtitle')}
            </p>
          </div>

          <FadeUp>
            <TechStackIcons />
          </FadeUp>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection className='py-20 px-4 sm:px-6 lg:px-8 bg-background dark:bg-background'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <AnimatedDiv className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
              {t('services.title')}
            </AnimatedDiv>
            <AnimatedDiv className='text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto'>
              {t('services.subtitle')}
            </AnimatedDiv>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {/* UI/UX Design */}
            <AnimatedCard>
              <Card className='h-full hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-lime-500 dark:hover:border-lime-500'>
                <CardHeader className='pb-4'>
                  <div className='w-10 h-10 bg-lime-500 dark:bg-primary rounded-lg flex items-center justify-center mb-4'>
                    <svg
                      className='w-5 h-5 text-primary-foreground'
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
                  </div>
                  <CardTitle className='text-gray-900 dark:text-white text-lg font-semibold'>
                    {t('services.uiuxDesign.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-gray-700 dark:text-gray-300 text-sm leading-relaxed'>
                    {t('services.uiuxDesign.description')}
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedCard>

            {/* Web Development */}
            <AnimatedCard>
              <Card className='h-full hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-lime-500 dark:hover:border-lime-500'>
                <CardHeader className='pb-4'>
                  <div className='w-10 h-10 bg-lime-500 dark:bg-primary rounded-lg flex items-center justify-center mb-4'>
                    <svg
                      className='w-5 h-5 text-primary-foreground'
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
                  <CardTitle className='text-gray-900 dark:text-white text-lg font-semibold'>
                    {t('services.webDevelopment.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-gray-700 dark:text-gray-300 text-sm leading-relaxed'>
                    {t('services.webDevelopment.description')}
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedCard>

            {/* Full-Stack Development */}
            <AnimatedCard>
              <Card className='h-full hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-lime-500 dark:hover:border-lime-500'>
                <CardHeader className='pb-4'>
                  <div className='w-10 h-10 bg-lime-500 dark:bg-primary rounded-lg flex items-center justify-center mb-4'>
                    <svg
                      className='w-5 h-5 text-primary-foreground'
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
                  <CardTitle className='text-gray-900 dark:text-white text-lg font-semibold'>
                    {t('services.fullStackDevelopment.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-gray-700 dark:text-gray-300 text-sm leading-relaxed'>
                    {t('services.fullStackDevelopment.description')}
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedCard>

            {/* Web Design */}
            <AnimatedCard>
              <Card className='h-full hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-lime-500 dark:hover:border-lime-500'>
                <CardHeader className='pb-4'>
                  <div className='w-10 h-10 bg-lime-500 dark:bg-primary rounded-lg flex items-center justify-center mb-4'>
                    <svg
                      className='w-5 h-5 text-primary-foreground'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                      />
                    </svg>
                  </div>
                  <CardTitle className='text-gray-900 dark:text-white text-lg font-semibold'>
                    {t('services.webDesign.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-gray-700 dark:text-gray-300 text-sm leading-relaxed'>
                    {t('services.webDesign.description')}
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedCard>

            {/* LINE Bot Development */}
            <AnimatedCard>
              <Card className='h-full hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-lime-500 dark:hover:border-lime-500'>
                <CardHeader className='pb-4'>
                  <div className='w-10 h-10 bg-lime-500 dark:bg-primary rounded-lg flex items-center justify-center mb-4'>
                    <svg
                      className='w-5 h-5 text-primary-foreground'
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
                  <CardTitle className='text-gray-900 dark:text-white text-lg font-semibold'>
                    LINE Bot Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-gray-700 dark:text-gray-300 text-sm leading-relaxed'>
                    Intelligent chatbots and automation solutions for LINE
                    platform integration
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedCard>

            {/* Business Automation */}
            <AnimatedCard>
              <Card className='h-full hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-lime-500 dark:hover:border-lime-500'>
                <CardHeader className='pb-4'>
                  <div className='w-10 h-10 bg-lime-500 dark:bg-primary rounded-lg flex items-center justify-center mb-4'>
                    <svg
                      className='w-5 h-5 text-primary-foreground'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                  </div>
                  <CardTitle className='text-gray-900 dark:text-white text-lg font-semibold'>
                    Business Automation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-gray-700 dark:text-gray-300 text-sm leading-relaxed'>
                    Streamline your business processes with intelligent
                    automation and workflow optimization
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedCard>

            {/* API Development */}
            <AnimatedCard>
              <Card className='h-full hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-lime-500 dark:hover:border-lime-500'>
                <CardHeader className='pb-4'>
                  <div className='w-10 h-10 bg-lime-500 dark:bg-primary rounded-lg flex items-center justify-center mb-4'>
                    <svg
                      className='w-5 h-5 text-primary-foreground'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
                      />
                    </svg>
                  </div>
                  <CardTitle className='text-gray-900 dark:text-white text-lg font-semibold'>
                    API Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-gray-700 dark:text-gray-300 text-sm leading-relaxed'>
                    Robust and scalable APIs that power your applications and
                    integrate with third-party services
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Customer Feedback Section */}
      <AnimatedSection className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-emerald-50 to-lime-50 dark:from-slate-900 dark:via-emerald-900 dark:to-lime-900 relative'>
        <div className='absolute inset-0 overflow-hidden'>
          {/* SVG Background Elements */}
          <svg
            className='absolute top-10 left-10 w-20 h-20 text-emerald-500/15 dark:text-lime-500/20'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
              stroke='currentColor'
              strokeWidth={1}
            />
          </svg>
          <svg
            className='absolute bottom-20 right-20 w-16 h-16 text-emerald-500/15 dark:text-lime-500/20'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              stroke='currentColor'
              strokeWidth={1}
            />
          </svg>
          {/* Floating particles */}
          <FloatingParticles
            count={60}
            className='text-emerald-400/30 dark:text-lime-400/40'
            size='lg'
          />
        </div>

        {/* Floating Mascots */}
        <FloatingMascots
          count={1}
          className='text-emerald-400/25 dark:text-lime-400/50'
        />

        <div className='max-w-7xl mx-auto relative z-10'>
          <div className='text-center mb-16'>
            <div className='flex items-center justify-center gap-3 mb-4'>
              <MessageCircle className='w-6 h-6 text-lime-500 dark:text-lime-400' />
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-sans'>
                {t('testimonials.title')}
              </h2>
            </div>
            <p className='text-gray-700 dark:text-gray-300 text-lg font-sans'>
              {t('testimonials.subtitle')}
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Testimonial 1 */}
            <AnimatedCard>
              <Card className='bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6'>
                <AnimatedStars count={5} />
                <p className='text-gray-900 dark:text-white mb-6 leading-relaxed font-sans'>
                  "{t('testimonials.testimonial1.quote')}"
                </p>
                <div className='flex items-center gap-3'>
                  <AnimatedAvatar initial='S' />
                  <div>
                    <p className='text-gray-900 dark:text-white font-semibold font-sans'>
                      {t('testimonials.testimonial1.name')}
                    </p>
                    <p className='text-gray-600 dark:text-gray-400 text-sm font-sans'>
                      {t('testimonials.testimonial1.company')}
                    </p>
                  </div>
                </div>
              </Card>
            </AnimatedCard>

            {/* Testimonial 2 */}
            <AnimatedCard>
              <Card className='bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6'>
                <AnimatedStars count={5} />
                <p className='text-gray-900 dark:text-white mb-6 leading-relaxed font-sans'>
                  "{t('testimonials.testimonial2.quote')}"
                </p>
                <div className='flex items-center gap-3'>
                  <AnimatedAvatar initial='O' />
                  <div>
                    <p className='text-gray-900 dark:text-white font-semibold font-sans'>
                      {t('testimonials.testimonial2.name')}
                    </p>
                    <p className='text-gray-600 dark:text-gray-400 text-sm font-sans'>
                      {t('testimonials.testimonial2.company')}
                    </p>
                  </div>
                </div>
              </Card>
            </AnimatedCard>

            {/* Testimonial 3 */}
            <AnimatedCard>
              <Card className='bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6'>
                <AnimatedStars count={5} />
                <p className='text-gray-900 dark:text-white mb-6 leading-relaxed font-sans'>
                  "{t('testimonials.testimonial3.quote')}"
                </p>
                <div className='flex items-center gap-3'>
                  <AnimatedAvatar initial='W' />
                  <div>
                    <p className='text-gray-900 dark:text-white font-semibold font-sans'>
                      {t('testimonials.testimonial3.name')}
                    </p>
                    <p className='text-gray-600 dark:text-gray-400 text-sm font-sans'>
                      {t('testimonials.testimonial3.company')}
                    </p>
                  </div>
                </div>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us Section */}
      <AnimatedSection className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-gray-900'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <AnimatedDiv>
              <Badge
                variant='secondary'
                className='bg-lime-500 text-black mb-4 text-sm font-semibold px-4 py-2'
              >
                {t('whyChoose.badge')}
              </Badge>
            </AnimatedDiv>
            <AnimatedDiv className='text-3xl md:text-4xl font-bold text-white mb-4'>
              {t('whyChoose.title')}
            </AnimatedDiv>
            <AnimatedDiv className='text-lg text-gray-300 max-w-2xl mx-auto'>
              {t('whyChoose.subtitle')}
            </AnimatedDiv>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <AnimatedCard>
              <div className='text-center'>
                <div className='w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Users className='w-8 h-8 text-black' />
                </div>
                <h3 className='text-xl font-semibold text-white mb-2'>
                  {t('whyChoose.features.expertTeam.title')}
                </h3>
                <p className='text-gray-300'>
                  {t('whyChoose.features.expertTeam.description')}
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard>
              <div className='text-center'>
                <div className='w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <TrendingUp className='w-8 h-8 text-black' />
                </div>
                <h3 className='text-xl font-semibold text-white mb-2'>
                  {t('whyChoose.features.scalableSolutions.title')}
                </h3>
                <p className='text-gray-300'>
                  {t('whyChoose.features.scalableSolutions.description')}
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard>
              <div className='text-center'>
                <div className='w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Star className='w-8 h-8 text-black' />
                </div>
                <h3 className='text-xl font-semibold text-white mb-2'>
                  {t('whyChoose.features.qualityFocus.title')}
                </h3>
                <p className='text-gray-300'>
                  {t('whyChoose.features.qualityFocus.description')}
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard>
              <div className='text-center'>
                <div className='w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Globe className='w-8 h-8 text-black' />
                </div>
                <h3 className='text-xl font-semibold text-white mb-2'>
                  {t('whyChoose.features.globalReach.title')}
                </h3>
                <p className='text-gray-300'>
                  {t('whyChoose.features.globalReach.description')}
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className='py-20 px-4 bg-gradient-to-br from-lime-500 to-green-600 dark:from-lime-600 dark:to-green-700 transition-colors duration-300 relative overflow-hidden'>
        {/* Background SVG Elements */}
        <div className='absolute inset-0 -z-10'>
          {/* Large decorative SVG circles */}
          <svg
            className='absolute top-10 left-10 w-20 h-20 text-white/10'
            viewBox='0 0 24 24'
            fill='none'
          >
            <circle
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth={1}
            />
            <circle
              cx='12'
              cy='12'
              r='6'
              stroke='currentColor'
              strokeWidth={1}
            />
            <circle cx='12' cy='12' r='2' fill='currentColor' />
          </svg>

          <svg
            className='absolute top-20 right-20 w-16 h-16 text-white/10'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
              stroke='currentColor'
              strokeWidth={1}
            />
          </svg>

          <svg
            className='absolute bottom-20 left-20 w-24 h-24 text-white/10'
            viewBox='0 0 24 24'
            fill='none'
          >
            <rect
              x='3'
              y='3'
              width='18'
              height='18'
              rx='2'
              stroke='currentColor'
              strokeWidth={1}
            />
            <rect
              x='7'
              y='7'
              width='10'
              height='10'
              rx='1'
              stroke='currentColor'
              strokeWidth={1}
            />
            <rect
              x='9'
              y='9'
              width='6'
              height='6'
              rx='0.5'
              fill='currentColor'
            />
          </svg>

          <svg
            className='absolute bottom-10 right-10 w-18 h-18 text-white/10'
            viewBox='0 0 24 24'
            fill='none'
          >
            <polygon
              points='12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5'
              stroke='currentColor'
              strokeWidth={1}
            />
            <polygon
              points='12,6 18,9.5 18,14.5 12,18 6,14.5 6,9.5'
              stroke='currentColor'
              strokeWidth={1}
            />
            <polygon
              points='12,10 15,12 15,14 12,16 9,14 9,12'
              fill='currentColor'
            />
          </svg>

          {/* Additional geometric shapes */}
          <svg
            className='absolute top-1/3 left-1/4 w-12 h-12 text-white/10'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M12 2l4 4-4 4-4-4 4-4z'
              stroke='currentColor'
              strokeWidth={1}
            />
            <path
              d='M12 10l4 4-4 4-4-4 4-4z'
              stroke='currentColor'
              strokeWidth={1}
            />
            <path
              d='M12 18l4 4-4 4-4-4 4-4z'
              stroke='currentColor'
              strokeWidth={1}
            />
          </svg>

          <svg
            className='absolute top-2/3 right-1/3 w-14 h-14 text-white/10'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
              stroke='currentColor'
              strokeWidth={1}
            />
          </svg>
        </div>

        {/* Lots of Floating Particles */}
        <FloatingParticles count={120} className='text-white/20' size='lg' />

        {/* Floating Mascots */}
        <FloatingMascots count={1} className='text-white/30' />

        <div className='max-w-4xl mx-auto text-center relative z-10'>
          <AnimatedDiv className='text-3xl md:text-4xl font-bold text-white mb-4'>
            {t('cta.title')}
          </AnimatedDiv>
          <AnimatedDiv className='text-xl text-lime-100 mb-8'>
            {t('cta.subtitle')}
          </AnimatedDiv>
          <AnimatedDiv className='flex flex-col sm:flex-row gap-4 justify-center'>
            <AnimatedButton>
              <Button
                size='lg'
                variant='secondary'
                className='bg-white text-lime-600 hover:bg-lime-50 font-semibold px-8 py-3'
              >
                {t('cta.primaryButton')}
                <ArrowRight className='w-4 h-4 ml-2' />
              </Button>
            </AnimatedButton>
            <AnimatedButton>
              <Button
                size='lg'
                variant='outline'
                className='border-white text-white hover:bg-white/10 font-semibold px-8 py-3'
              >
                {t('cta.secondaryButton')}
              </Button>
            </AnimatedButton>
          </AnimatedDiv>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  );
}
