'use client';

import { ArrowRight, Bot, Code2, Database, Zap } from 'lucide-react';
import {
  FadeUp,
  StaggeredFade,
  TypingEffect,
  WordsPullUp,
} from './text-animations';
import { usePathname, useRouter } from 'next/navigation';

import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface AnimatedBannerProps {
  onNavigate?: (page: string) => void;
}

export function AnimatedBanner({ onNavigate }: AnimatedBannerProps) {
  const t = useTranslations('home.hero');
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'en';

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      // Default navigation using Next.js router
      router.push(`/${currentLocale}/${page}`);
    }
  };

  return (
    <section className='relative bg-gradient-to-br from-gray-50 via-lime-50 to-background dark:from-lime-950/20 dark:via-green-950/10 dark:to-background py-20 px-4 overflow-hidden transition-colors duration-300'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 -z-10'>
        {/* Floating circles - More particles throughout the hero section */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-lime-400/30 rounded-full'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 70 - 35, 0],
              scale: [1, 0.8 + Math.random() * 0.4, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}
        <motion.div
          className='absolute w-96 h-96 bg-green-500/20 rounded-full blur-3xl'
          animate={{
            x: [0, 75, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className='absolute w-80 h-80 bg-lime-500/20 rounded-full blur-3xl'
          animate={{
            x: [0, -75, 0],
            y: [0, -30, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          style={{ bottom: '20%', right: '15%' }}
        />
      </div>

      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          {/* Left Content */}
          <motion.div
            className='text-center lg:text-left'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className='inline-flex items-center gap-2 px-4 py-2 bg-lime-500/20 dark:bg-lime-500/20 text-gray-800 dark:text-lime-400 rounded-full text-sm border border-lime-500/30 dark:border-lime-500/30 backdrop-blur-sm'>
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                >
                  ✨
                </motion.span>
                {t('badge')}
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <StaggeredFade
                text={t('title')}
                className='block text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white'
              />
              <motion.div
                className='block bg-gradient-to-r from-lime-500 via-green-500 to-lime-600 bg-clip-text text-transparent'
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              >
                <StaggeredFade
                  text={t('titleHighlight')}
                  className='block text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-lime-500 via-green-500 to-lime-600 bg-clip-text text-transparent'
                />
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.div
              className='mt-6 text-lg text-gray-900 dark:text-gray-300 sm:text-xl max-w-3xl mx-auto'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <FadeUp
                text={t('description')}
                className='text-lg text-gray-900 dark:text-gray-300 sm:text-xl'
              />
            </motion.div>

            {/* Icons below description */}
            <motion.div
              className='flex justify-center gap-8 my-12'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.div
                className='flex flex-col items-center gap-2'
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className='w-16 h-16 bg-gradient-to-br from-green-500 to-lime-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30'>
                  <Code2 className='w-8 h-8 text-white' />
                </div>
                <span className='text-sm text-gray-700 dark:text-green-100'>
                  Software
                </span>
              </motion.div>
              <motion.div
                className='flex flex-col items-center gap-2'
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              >
                <div className='w-16 h-16 bg-gradient-to-br from-green-500 to-lime-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30'>
                  <Database className='w-8 h-8 text-white' />
                </div>
                <span className='text-sm text-gray-700 dark:text-green-100'>
                  Data Analysis
                </span>
              </motion.div>
              <motion.div
                className='flex flex-col items-center gap-2'
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              >
                <div className='w-16 h-16 bg-gradient-to-br from-green-500 to-lime-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30'>
                  <Bot className='w-8 h-8 text-white' />
                </div>
                <span className='text-sm text-gray-700 dark:text-green-100'>
                  LINE Bot
                </span>
              </motion.div>
              <motion.div
                className='flex flex-col items-center gap-2'
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.5,
                }}
              >
                <div className='w-16 h-16 bg-gradient-to-br from-green-500 to-lime-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30'>
                  <Zap className='w-8 h-8 text-white' />
                </div>
                <span className='text-sm text-gray-700 dark:text-green-100'>
                  Automation
                </span>
              </motion.div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className='mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => handleNavigation('services')}
                  size='lg'
                  className='bg-lime-500 hover:bg-lime-600 text-black font-semibold px-10 py-4 rounded-xl shadow-xl shadow-lime-500/40 hover:shadow-2xl hover:shadow-lime-500/50 transition-all duration-300'
                >
                  {t('cta')}
                  <motion.div
                    className='ml-3'
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => handleNavigation('portfolio')}
                  size='lg'
                  variant='outline'
                  className='border border-gray-300 dark:border-green-400/30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm text-gray-700 dark:text-green-300 hover:bg-gray-50/95 dark:hover:bg-slate-800/95 hover:border-gray-400 dark:hover:border-green-400/50 hover:text-gray-900 dark:hover:text-green-200 font-medium px-8 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300'
                >
                  {t('ctaSecondary')}
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className='mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div className='flex flex-col text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300'>
                <div className='text-5xl font-bold text-lime-600 dark:text-lime-400 mb-2'>
                  {t('stats.projects')}
                </div>
                <div className='text-sm text-gray-700 dark:text-green-200 font-medium'>
                  {t('stats.projectsLabel')}
                </div>
              </div>
              <div className='flex flex-col text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300'>
                <div className='text-5xl font-bold text-lime-600 dark:text-lime-400 mb-2'>
                  {t('stats.clients')}
                </div>
                <div className='text-sm text-gray-700 dark:text-green-200 font-medium'>
                  {t('stats.clientsLabel')}
                </div>
              </div>
              <div className='flex flex-col text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300'>
                <div className='text-5xl font-bold text-lime-600 dark:text-lime-400 mb-2'>
                  {t('stats.satisfaction')}
                </div>
                <div className='text-sm text-gray-700 dark:text-green-200 font-medium'>
                  {t('stats.satisfactionLabel')}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Mascot & Visual */}
          <motion.div
            className='relative'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* 3D Card Effect */}
            <motion.div
              className='relative'
              animate={{
                rotateY: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Background Glow */}
              <div className='absolute inset-0 bg-gradient-to-br from-green-400 to-lime-500 dark:from-green-400 dark:to-lime-500 rounded-2xl transform rotate-3 blur-2xl opacity-30 dark:opacity-30'></div>

              {/* Main Card */}
              <div className='relative bg-gradient-to-br from-green-50/80 to-lime-50/80 dark:from-green-500/20 dark:to-lime-500/20 backdrop-blur-xl rounded-2xl p-8 border border-green-200/50 dark:border-green-500/20 shadow-2xl'>
                {/* Mascot */}
                <div className='flex justify-center mb-8'>
                  <motion.div
                    className='w-32 h-32 relative'
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 2, 0, -2, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    {/* Mascot SVG from user's provided HTML */}
                    <svg
                      viewBox='0 0 200 200'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-full h-full'
                    >
                      <g
                        style={{
                          transform: 'translateY(-0.248438px)',
                          transformOrigin: '100px 99.5px',
                        }}
                      >
                        <ellipse
                          cx='100'
                          cy='80'
                          rx='45'
                          ry='40'
                          fill='url(#gradient1)'
                        ></ellipse>
                        <circle cx='85' cy='75' r='8' fill='#0a0a0a'></circle>
                        <circle cx='115' cy='75' r='8' fill='#0a0a0a'></circle>
                        <circle
                          cx='87'
                          cy='73'
                          r='3'
                          fill='#22c55e'
                          opacity='0.9894991819892311'
                        ></circle>
                        <circle
                          cx='117'
                          cy='73'
                          r='3'
                          fill='#22c55e'
                          opacity='0.9894991819892311'
                        ></circle>
                        <path
                          d='M 85 90 Q 100 98 115 90'
                          stroke='#0a0a0a'
                          strokeWidth='3'
                          fill='none'
                          strokeLinecap='round'
                        ></path>
                        <line
                          x1='100'
                          y1='40'
                          x2='100'
                          y2='25'
                          stroke='#22c55e'
                          strokeWidth='3'
                          strokeLinecap='round'
                        ></line>
                        <circle
                          cx='100'
                          cy='20'
                          r='6'
                          fill='#22c55e'
                          style={{
                            transform: 'scale(1.0109)',
                            transformOrigin: '100px 20px',
                          }}
                        >
                          <animate
                            attributeName='opacity'
                            values='0.5;1;0.5'
                            dur='1.5s'
                            repeatCount='indefinite'
                          ></animate>
                        </circle>
                        <rect
                          x='70'
                          y='110'
                          width='60'
                          height='50'
                          rx='15'
                          fill='url(#gradient2)'
                        ></rect>
                        <rect
                          x='45'
                          y='120'
                          width='20'
                          height='30'
                          rx='10'
                          fill='#22c55e'
                          style={{
                            transformOrigin: '55px 135px',
                            transform: 'rotate(0.210016deg)',
                          }}
                        ></rect>
                        <rect
                          x='135'
                          y='120'
                          width='20'
                          height='30'
                          rx='10'
                          fill='#22c55e'
                          style={{
                            transformOrigin: '145px 135px',
                            transform: 'rotate(-0.210016deg)',
                          }}
                        ></rect>
                        <g
                          style={{
                            transformOrigin: '150px 152.5px',
                            transform: 'rotate(-0.315025deg)',
                          }}
                        >
                          <rect
                            x='148'
                            y='145'
                            width='4'
                            height='20'
                            rx='2'
                            fill='#16a34a'
                          ></rect>
                          <polygon
                            points='150,145 148,140 152,140'
                            fill='#0a0a0a'
                          ></polygon>
                        </g>
                        <text
                          x='100'
                          y='140'
                          fontSize='16'
                          fill='#0a0a0a'
                          textAnchor='middle'
                          fontWeight='bold'
                        >
                          DEV
                        </text>
                        <rect
                          x='80'
                          y='160'
                          width='15'
                          height='25'
                          rx='8'
                          fill='#16a34a'
                        ></rect>
                        <rect
                          x='105'
                          y='160'
                          width='15'
                          height='25'
                          rx='8'
                          fill='#16a34a'
                        ></rect>
                      </g>
                      <circle
                        cx='60'
                        cy='60'
                        r='2'
                        fill='#22c55e'
                        opacity='0.021001636021537706'
                        style={{
                          transform: 'scale(0.0315025)',
                          transformOrigin: '60px 60px',
                        }}
                      ></circle>
                      <circle
                        cx='140'
                        cy='70'
                        r='2'
                        fill='#16a34a'
                        opacity='0.44334568371414207'
                        style={{
                          transform: 'scale(0.665019)',
                          transformOrigin: '140px 70px',
                        }}
                      ></circle>
                      <circle
                        cx='70'
                        cy='140'
                        r='2'
                        fill='#22c55e'
                        opacity='0.9789983639784623'
                        style={{
                          transform: 'scale(1.4685)',
                          transformOrigin: '70px 140px',
                        }}
                      ></circle>
                      <defs>
                        <linearGradient
                          id='gradient1'
                          x1='0%'
                          y1='0%'
                          x2='100%'
                          y2='100%'
                        >
                          <stop offset='0%' stopColor='#22c55e'></stop>
                          <stop offset='100%' stopColor='#16a34a'></stop>
                        </linearGradient>
                        <linearGradient
                          id='gradient2'
                          x1='0%'
                          y1='0%'
                          x2='100%'
                          y2='100%'
                        >
                          <stop offset='0%' stopColor='#16a34a'></stop>
                          <stop offset='100%' stopColor='#22c55e'></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>
                </div>

                {/* Floating UI Elements */}
                <div className='relative h-48'>
                  {/* Wireframe */}
                  <motion.div
                    className='absolute top-0 left-0 w-20 h-20 bg-white dark:bg-slate-800 border-2 border-green-500/50 dark:border-green-500/50 rounded-lg p-2 shadow-lg'
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <div className='space-y-2'>
                      <div className='h-1.5 bg-green-500/30 rounded'></div>
                      <div className='h-1.5 bg-green-500/30 rounded w-3/4'></div>
                      <div className='h-1.5 bg-green-500/30 rounded w-1/2'></div>
                    </div>
                  </motion.div>

                  {/* Color Palette */}
                  <motion.div
                    className='absolute top-8 right-0 w-24 h-16 bg-white dark:bg-slate-800 border-2 border-lime-500/50 dark:border-lime-500/50 rounded-lg p-2 shadow-lg'
                    animate={{
                      y: [0, 10, 0],
                      rotate: [0, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 0.5,
                    }}
                  >
                    <div className='grid grid-cols-4 gap-1 h-full'>
                      <div className='bg-green-500 rounded'></div>
                      <div className='bg-lime-500 rounded'></div>
                      <div className='bg-green-400 rounded'></div>
                      <div className='bg-lime-400 rounded'></div>
                    </div>
                  </motion.div>

                  {/* Prototype Screen */}
                  <motion.div
                    className='absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-24 bg-white dark:bg-slate-800 border-2 border-green-500/50 dark:border-green-500/50 rounded-lg p-2 shadow-lg'
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 1,
                    }}
                  >
                    <div className='space-y-1.5'>
                      <div className='h-2 bg-gradient-to-r from-green-500 to-lime-500 rounded'></div>
                      <div className='h-1 bg-slate-600 rounded'></div>
                      <div className='h-1 bg-slate-600 rounded w-4/5'></div>
                      <div className='h-1 bg-slate-600 rounded w-3/5'></div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Floating Particles (additional) */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className='absolute w-2 h-2 bg-lime-400 rounded-full'
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, Math.random() * 30 - 15, 0],
                  opacity: [0, 1, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
      {/* Scroll Down Indicator */}
      <motion.div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer'
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        onClick={() => {
          // Small delay to ensure DOM is ready
          setTimeout(() => {
            const nextSection = document.getElementById('tech-stack-section');
            if (nextSection) {
              nextSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
              });
            } else {
              // Fallback: scroll down by viewport height
              window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
            }
          }, 100);
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className='w-6 h-10 border-2 border-lime-400 rounded-full flex justify-center hover:border-lime-300 transition-colors'>
          <motion.div
            className='w-1 h-3 bg-lime-400 rounded-full mt-2'
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
