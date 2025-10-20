import {
  AnimatedCard,
  AnimatedDiv,
  AnimatedSection,
} from '@/components/animated-components';
import {
  Code,
  Heart,
  LineChart,
  Palette,
  Target,
  Users,
  Zap,
} from 'lucide-react';
import {
  FadeUp,
  LettersPullUp,
  TypingEffect,
} from '@/components/text-animations';

import { AboutMascot } from '@/components/about-mascot';
import { AnimatedHeader } from '@/components/animated-header';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { FloatingParticles } from '@/components/floating-particles';
import Footer from '@/components/footer';
import Navigation from '@/components/navigation';
import StackIcon from 'tech-stack-icons';
import { getTranslations } from 'next-intl/server';

const locales = ['en', 'th'] as const;

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface AboutPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const t = await getTranslations('about');
  const tTech = await getTranslations('techDescriptions');

  const team = [
    {
      name: 'UX Designer',
      role: 'Lead Designer',
      skills: ['User Research', 'Wireframing', 'Prototyping'],
    },
    {
      name: 'UI Designer',
      role: 'Visual Designer',
      skills: ['Visual Design', 'Design System', 'Branding'],
    },
    {
      name: 'UX Researcher',
      role: 'Research Specialist',
      skills: ['User Testing', 'Analytics', 'A/B Testing'],
    },
    {
      name: 'Frontend Dev',
      role: 'Developer',
      skills: ['React', 'Tailwind CSS', 'Framer'],
    },
  ];

  const tools = [
    {
      stackName: 'nextjs',
      name: 'Next.js',
      description:
        'Full-stack React framework with SSR, routing, and optimization',
    },
    {
      stackName: 'react',
      name: 'React',
      description:
        'Component-based UI library for interactive web applications',
    },
    {
      stackName: 'typescript',
      name: 'TypeScript',
      description: 'Type-safe JavaScript for scalable and maintainable code',
    },
    {
      stackName: 'tailwindcss',
      name: 'Tailwind CSS',
      description: 'Utility-first CSS framework for rapid UI development',
    },
    {
      stackName: 'astro',
      name: 'Astro',
      description: 'Modern static site generator with island architecture',
    },
    {
      stackName: 'vercel',
      name: 'Vercel',
      description: 'Cloud platform for frontend deployment and edge functions',
    },
    {
      stackName: 'aws',
      name: 'AWS',
      description: 'Comprehensive cloud computing and infrastructure services',
    },
    {
      stackName: 'auth0',
      name: 'Auth0',
      description:
        'Identity and access management platform for secure authentication',
    },
    {
      stackName: 'claude',
      name: 'Claude',
      description: 'AI assistant for development workflows and code generation',
    },
    {
      stackName: 'figma',
      name: 'Figma',
      description: 'Collaborative design and prototyping tool for UI/UX',
    },
    {
      stackName: 'git',
      name: 'Git',
      description: 'Distributed version control for collaborative development',
    },
    {
      stackName: 'html5',
      name: 'HTML5',
      description: 'Modern web markup standard with semantic elements',
    },
    {
      stackName: 'java',
      name: 'Java',
      description: 'Enterprise-grade programming language for backend services',
    },
    {
      stackName: 'kubernetes',
      name: 'Kubernetes',
      description: 'Container orchestration platform for scalable deployments',
    },
    {
      stackName: 'kong',
      name: 'Kong',
      description:
        'API gateway and service mesh for microservices architecture',
    },
    {
      stackName: 'nodejs',
      name: 'Node.js',
      description: 'JavaScript runtime for server-side development',
    },
    {
      stackName: 'go',
      name: 'Go',
      description: 'Fast, efficient programming language for backend services',
    },
    {
      stackName: 'springboot',
      name: 'Spring Boot',
      description: 'Enterprise Java framework for microservices and web apps',
    },
    {
      stackName: 'python',
      name: 'Python',
      description:
        'Versatile language for backend, data science, and automation',
    },
    {
      stackName: 'postgresql',
      name: 'PostgreSQL',
      description: 'Advanced open-source relational database system',
    },
    {
      stackName: 'redis',
      name: 'Redis',
      description:
        'In-memory data store for caching and real-time applications',
    },
    {
      stackName: 'kafka',
      name: 'Kafka',
      description:
        'Distributed streaming platform for real-time data processing',
    },
    {
      stackName: 'docker',
      name: 'Docker',
      description: 'Containerization platform for consistent deployments',
    },
    {
      stackName: 'line',
      name: 'LINE',
      description: 'Messaging platform integration for chatbots and automation',
    },
    {
      stackName: 'n8n',
      name: 'n8n',
      description:
        'Workflow automation platform for business process automation',
    },
    {
      stackName: 'make',
      name: 'Make',
      description:
        'No-code automation platform for connecting apps and services',
    },
  ];

  function TechIcon({ name }: { name: string }) {
    if (name === 'kafka') {
      return (
        <img src='/kafka.png' alt='Kafka' className='w-5 h-5 object-contain' />
      );
    }
    if (name === 'line') {
      return (
        <img src='/line.png' alt='LINE' className='w-5 h-5 object-contain' />
      );
    }
    if (name === 'springboot') {
      return <StackIcon name='spring' className='w-5 h-5' />;
    }
    if (name === 'kong') {
      return (
        <svg
          className='w-5 h-5'
          fill='none'
          viewBox='0 0 126 40'
          xmlns='http://www.w3.org/2000/svg'
        >
          <linearGradient
            id='kong-gradient'
            gradientUnits='userSpaceOnUse'
            x1='32.8979'
            x2='3.4258'
            y1='13.2258'
            y2='43.3513'
          >
            <stop offset='0' stopColor='#11a06b'></stop>
            <stop offset='1' stopColor='#286feb'></stop>
          </linearGradient>
          <g fill='url(#kong-gradient)'>
            <path d='m14.6993 32.947-1.0995 1.3902 2.4875 3.8722-.2593 1.7906h10.553l.7306-1.7906-4.2446-5.2624z'></path>
            <path d='m20.4707 9.38222-3.8172 6.65638 18.6185 21.9488-.5296 2.0126h8.5403l1.5451-7.1404-19.9225-23.48102z'></path>
            <path d='m23.0058 4.37813-1.8155 3.33h4.504l7.7294 9.16387 4.5953-3.7595v-2.3874l-1.5963-2.23452 1.1798-1.22282-9.2197-7.26776z'></path>
            <path d='m9.14695 22.9278h-2.51681l-6.62989586 8.3851v8.6871h7.11207586l1.25657-1.6268 5.48661-7.0785h7.9376l2.4437-3.7303-8.6061-10.1756z'></path>
          </g>
          <path
            clipRule='evenodd'
            d='m77.1217 27.387h6.1921v-9.4607h-6.1921zm.2169 3.7843c-1.7235 0-2.6188-.2793-3.3563-1.0464-1.1083-1.1093-1.5382-2.6514-1.5382-7.4309s.4299-6.3215 1.5382-7.4623c.7099-.7395 1.6328-1.0188 3.3563-1.0188h5.7583c1.7235 0 2.6188.2793 3.3563 1.0188 1.1083 1.1408 1.5382 2.6513 1.5382 7.4623s-.4299 6.3216-1.5382 7.4309c-.7375.771-1.6328 1.0464-3.3563 1.0464z'
            fill='#181c1f'
            fillRule='evenodd'
          ></path>
          <path
            clipRule='evenodd'
            d='m101.997 19.5589v.1809 11.4276h4.709v-11.9822c0-2.4862-.276-3.3791-.986-4.0557-.647-.6452-1.574-.9363-3.021-.9363l-4.1416.0118-2.3743 2.1361v-2.1361h-1.5894-3.104v16.9584h4.7092v-13.2449h5.7901v1.6325z'
            fill='#181c1f'
            fillRule='evenodd'
          ></path>
          <path
            clipRule='evenodd'
            d='m65.0766 9.53952h5.6084l-8.0537 10.16478 8.3929 11.463h-5.9476l-6.3853-9.0044-1.5145-.0078v9.0122h-5.0484v-21.62778h5.0484v8.38278h1.5145z'
            fill='#181c1f'
            fillRule='evenodd'
          ></path>
          <path
            clipRule='evenodd'
            d='m121.161 14.2092v2.136l-2.375-2.136-3.534-.0118c-1.692 0-2.685.2911-3.455 1.0267-1.017 1.0424-1.51 3.324-1.51 7.5016 0 4.1777.402 6.3648 1.384 7.3797.769.7357 1.684 1.0622 3.503 1.0622h5.975l.008 2.4271-8.295.0157.008.9953 2.142 2.3681h6.484c1.723 0 2.709-.3069 3.325-.952.769-.7985 1.076-1.2942 1.076-4.2091v-17.5996h-4.74zm.031 13.1584h-6.192v-9.445h6.188v9.445z'
            fill='#181c1f'
            fillRule='evenodd'
          ></path>
        </svg>
      );
    }
    return <StackIcon name={name} className='w-5 h-5' />;
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-green-950 via-green-900 to-background dark:from-green-950 dark:via-green-900 dark:to-background relative overflow-hidden'>
      <Navigation />
      {/* Floating particles - moved outside z-index container */}
      <FloatingParticles
        count={100}
        className='text-emerald-500/30 dark:text-lime-400/60'
        size='md'
      />
      <AboutMascot />

      {/* Header */}
      <AnimatedSection className='py-12 px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='max-w-7xl mx-auto'>
          <AnimatedHeader title={t('title')} subtitle={t('subtitle')} />
        </div>
      </AnimatedSection>

      {/* Vision & Mission */}
      <AnimatedSection className='py-12 px-4 sm:px-6 lg:px-8 relative z-10 '>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 mb-20'>
            <AnimatedCard>
              <Card className='p-8 text-center border-gray-200 dark:border-gray-700 hover:border-lime-500 dark:hover:border-lime-500 transition-colors bg-white/80 dark:bg-gray-800/80 backdrop-blur shadow-lg'>
                <div className='w-16 h-16 bg-lime-100 dark:bg-lime-900 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Target className='w-8 h-8 text-lime-600 dark:text-lime-400' />
                </div>
                <h3 className='text-xl mb-3 text-gray-900 dark:text-white font-sans font-semibold'>
                  {t('vision.title')}
                </h3>
                <p className='text-gray-600 dark:text-gray-300 font-sans leading-relaxed'>
                  {t('vision.content')}
                </p>
              </Card>
            </AnimatedCard>
            <AnimatedCard>
              <Card className='p-8 text-center border-gray-200 dark:border-gray-700 hover:border-lime-500 dark:hover:border-lime-500 transition-colors bg-white/80 dark:bg-gray-800/80 backdrop-blur shadow-lg'>
                <div className='w-16 h-16 bg-lime-100 dark:bg-lime-900 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Heart className='w-8 h-8 text-lime-600 dark:text-lime-400' />
                </div>
                <h3 className='text-xl mb-3 text-gray-900 dark:text-white font-sans font-semibold'>
                  {t('mission.title')}
                </h3>
                <p className='text-gray-600 dark:text-gray-300 font-sans leading-relaxed'>
                  {t('mission.content')}
                </p>
              </Card>
            </AnimatedCard>
            <AnimatedCard>
              <Card className='p-8 text-center border-gray-200 dark:border-gray-700 hover:border-lime-500 dark:hover:border-lime-500 transition-colors bg-white/80 dark:bg-gray-800/80 backdrop-blur shadow-lg'>
                <div className='w-16 h-16 bg-lime-100 dark:bg-lime-900 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Zap className='w-8 h-8 text-lime-600 dark:text-lime-400' />
                </div>
                <h3 className='text-xl mb-3 text-gray-900 dark:text-white font-sans font-semibold'>
                  {t('values.title')}
                </h3>
                <p className='text-gray-600 dark:text-gray-300 font-sans leading-relaxed'>
                  {t('values.content')}
                </p>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Team */}
      <AnimatedSection className='py-12 px-4 sm:px-6 lg:px-8 relative z-10 '>
        <div className='max-w-7xl mx-auto'>
          <TypingEffect
            text={t('team.title')}
            className='text-3xl mb-12 mt-8 text-center text-gray-900 dark:text-white font-sans font-bold'
          />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
            {team.map((member, index) => (
              <AnimatedCard key={index}>
                <Card className='p-6 text-center hover:shadow-lg transition-all border-gray-200 dark:border-gray-700 hover:border-lime-500 dark:hover:border-lime-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur shadow-lg'>
                  <div className='w-20 h-20 bg-gradient-to-br from-lime-400 to-green-500 rounded-full flex items-center justify-center text-black mx-auto mb-4 text-2xl shadow-lg shadow-lime-500/30'>
                    <Users size={32} />
                  </div>
                  <h3 className='mb-1 text-gray-900 dark:text-white font-sans font-semibold'>
                    {member.name}
                  </h3>
                  <p className='text-sm text-gray-600 dark:text-gray-300 mb-4 font-sans'>
                    {member.role}
                  </p>
                  <div className='flex flex-wrap gap-2 justify-center'>
                    {member.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant='secondary'
                        className='text-xs bg-lime-100 dark:bg-lime-900 text-lime-800 dark:text-lime-200 border-lime-200 dark:border-lime-700'
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Tools & Tech */}
      <AnimatedSection className='py-12 px-4 sm:px-6 lg:px-8 relative z-10 '>
        <div className='max-w-7xl mx-auto'>
          <TypingEffect
            text={t('tools.title')}
            className='text-3xl mb-12 mt-8 text-center text-gray-900 dark:text-white font-sans font-bold'
          />
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6'>
            {tools.map((tool, index) => (
              <AnimatedCard key={tool.stackName + index}>
                <Card className='group p-6 text-center hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 hover:border-lime-400 dark:hover:border-lime-500 shadow-xl hover:shadow-lime-500/25 dark:hover:shadow-lime-400/25 rounded-2xl hover:-translate-y-2'>
                  <div className='flex flex-col items-center gap-4 mb-5'>
                    <div className='w-16 h-16 bg-gradient-to-br from-lime-200 via-emerald-200 to-green-200 dark:from-lime-800/40 dark:via-emerald-800/40 dark:to-green-800/40 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-lime-500/30 dark:group-hover:shadow-lime-400/30 transition-all duration-300 group-hover:scale-110'>
                      <TechIcon name={tool.stackName} />
                    </div>
                    <h3 className='text-gray-900 dark:text-white text-base font-bold group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors duration-300'>
                      {tool.name}
                    </h3>
                  </div>
                  <p className='text-sm text-gray-600 dark:text-gray-300 font-medium leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300'>
                    {tTech(tool.stackName as any, {
                      fallback: tool.description,
                    })}
                  </p>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
}
