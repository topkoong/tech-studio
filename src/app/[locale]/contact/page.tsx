import {
  AnimatedCard,
  AnimatedDiv,
  AnimatedSection,
} from '@/components/animated-components';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  FadeUp,
  LettersPullUp,
  TypingEffect,
} from '@/components/text-animations';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { FAQAccordion } from '@/components/faq-accordion';
import { FloatingMascots } from '@/components/floating-mascots';
import { FloatingParticles } from '@/components/floating-particles';
import { FloatingParticlesBanner } from '@/components/floating-particles-banner';
import Footer from '@/components/footer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LemonGlow } from '@/components/lemon-glow';
import Navigation from '@/components/navigation';
import { Textarea } from '@/components/ui/textarea';
import { getTranslations } from 'next-intl/server';

export default async function ContactPage() {
  const t = await getTranslations('contact');

  const faqs = [
    {
      question: t('faq.question1'),
      answer: t('faq.answer1'),
    },
    {
      question: t('faq.question2'),
      answer: t('faq.answer2'),
    },
    {
      question: t('faq.question3'),
      answer: t('faq.answer3'),
    },
    {
      question: t('faq.question4'),
      answer: t('faq.answer4'),
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-green-950 via-green-900 to-background dark:from-green-950 dark:via-green-900 dark:to-background relative overflow-hidden'>
      <Navigation />
      <LemonGlow />
      <FloatingParticles
        count={120}
        className='text-emerald-500/30 dark:text-lime-400/60'
        size='md'
      />

      {/* Hero Section */}
      <AnimatedSection className='py-20 px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='max-w-7xl mx-auto text-center'>
          <LettersPullUp
            text={t('title')}
            className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-sans block'
          />
          <FadeUp
            text={t('subtitle')}
            className='text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-sans leading-relaxed block'
          />
        </div>
      </AnimatedSection>

      {/* Contact Form */}
      <AnimatedSection className='py-20 px-4 sm:px-6 lg:px-8 relative z-10'>
        <FloatingMascots
          count={1}
          className='text-emerald-400/25 dark:text-lime-400/50'
        />
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Information */}
            <div>
              <AnimatedDiv>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  {t('contactInfo.title')}
                </h2>
                <p className='text-gray-600 dark:text-gray-300 mb-8'>
                  {t('contactInfo.description')}
                </p>
              </AnimatedDiv>

              <div className='space-y-6'>
                <AnimatedCard>
                  <div className='flex items-start p-6 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 rounded-2xl shadow-xl hover:shadow-lime-500/25 transition-all duration-300'>
                    <div className='w-12 h-12 bg-lime-100 dark:bg-lime-900 rounded-lg flex items-center justify-center mr-4'>
                      <Mail className='w-6 h-6 text-lime-600 dark:text-lime-400' />
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-1'>
                        {t('contactInfo.email')}
                      </h3>
                      <p className='text-gray-600 dark:text-gray-300'>
                        hello@techstudio.com
                      </p>
                    </div>
                  </div>
                </AnimatedCard>

                <AnimatedCard>
                  <div className='flex items-start p-6 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 rounded-2xl shadow-xl hover:shadow-lime-500/25 transition-all duration-300'>
                    <div className='w-12 h-12 bg-lime-100 dark:bg-lime-900 rounded-lg flex items-center justify-center mr-4'>
                      <Phone className='w-6 h-6 text-lime-600 dark:text-lime-400' />
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-1'>
                        {t('contactInfo.phone')}
                      </h3>
                      <p className='text-gray-600 dark:text-gray-300'>
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>
                </AnimatedCard>

                <AnimatedCard>
                  <div className='flex items-start p-6 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 rounded-2xl shadow-xl hover:shadow-lime-500/25 transition-all duration-300'>
                    <div className='w-12 h-12 bg-lime-100 dark:bg-lime-900 rounded-lg flex items-center justify-center mr-4'>
                      <MapPin className='w-6 h-6 text-lime-600 dark:text-lime-400' />
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-1'>
                        {t('contactInfo.office')}
                      </h3>
                      <p className='text-gray-600 dark:text-gray-300'>
                        123 Tech Street
                        <br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                </AnimatedCard>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <AnimatedCard>
                <Card className='p-6 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 shadow-xl hover:shadow-lime-500/25 transition-all duration-300'>
                  <CardHeader>
                    <CardTitle className='text-gray-900 dark:text-white'>
                      {t('form.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className='space-y-6'>
                      <div>
                        <Label
                          htmlFor='name'
                          className='text-gray-700 dark:text-gray-300'
                        >
                          {t('form.name')}
                        </Label>
                        <Input
                          type='text'
                          id='name'
                          name='name'
                          required
                          className='mt-2 bg-white/20 dark:bg-gray-800/20 border-white/30 dark:border-gray-700/30 backdrop-blur-sm'
                          placeholder={t('form.namePlaceholder')}
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor='email'
                          className='text-gray-700 dark:text-gray-300'
                        >
                          {t('form.email')}
                        </Label>
                        <Input
                          type='email'
                          id='email'
                          name='email'
                          required
                          className='mt-2 bg-white/20 dark:bg-gray-800/20 border-white/30 dark:border-gray-700/30 backdrop-blur-sm'
                          placeholder={t('form.emailPlaceholder')}
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor='company'
                          className='text-gray-700 dark:text-gray-300'
                        >
                          {t('form.company')}
                        </Label>
                        <Input
                          type='text'
                          id='company'
                          name='company'
                          className='mt-2 bg-white/20 dark:bg-gray-800/20 border-white/30 dark:border-gray-700/30 backdrop-blur-sm'
                          placeholder={t('form.companyPlaceholder')}
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor='message'
                          className='text-gray-700 dark:text-gray-300'
                        >
                          {t('form.message')}
                        </Label>
                        <Textarea
                          id='message'
                          name='message'
                          rows={5}
                          required
                          className='mt-2 bg-white/20 dark:bg-gray-800/20 border-white/30 dark:border-gray-700/30 backdrop-blur-sm'
                          placeholder={t('form.messagePlaceholder')}
                        />
                      </div>

                      <Button
                        type='submit'
                        className='w-full bg-lime-600 hover:bg-lime-700 text-white font-semibold shadow-lg hover:shadow-lime-500/25 transition-all duration-300'
                      >
                        <Send className='w-4 h-4 mr-2' />
                        {t('form.submit')}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className='py-20 px-4 sm:px-6 lg:px-8 relative z-10'>
        <FloatingMascots
          count={1}
          className='text-emerald-400/25 dark:text-lime-400/50'
        />
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-16'>
            <TypingEffect
              text={t('faq.title')}
              className='block text-3xl font-bold text-gray-900 dark:text-white mb-2'
            />
            <FadeUp
              text={t('faq.subtitle')}
              className='block text-lg text-gray-600 dark:text-gray-300 mt-2'
            />
          </div>

          <FAQAccordion faqs={faqs} />
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
}
