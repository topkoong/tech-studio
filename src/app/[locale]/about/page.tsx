import Footer from '@/components/footer';
import Navigation from '@/components/navigation';
import { getTranslations } from 'next-intl/server';
import {
  Target,
  Heart,
  Zap,
  Users,
  Code,
  Palette,
  LineChart,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default async function AboutPage() {
  const t = await getTranslations('about');

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
    { icon: Code, name: 'React', description: 'Development' },
    { icon: Palette, name: 'Tailwind', description: 'Styling' },
    { icon: LineChart, name: 'Analytics', description: 'Testing & Tracking' },
  ];

  return (
    <div className='min-h-screen bg-black dark:bg-black'>
      <Navigation />

      {/* Header */}
      <div className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h1 className='text-5xl md:text-6xl font-bold text-white dark:text-white mb-6 font-sans'>
              {t('title')}
            </h1>
            <p className='text-xl text-gray-300 dark:text-gray-300 max-w-3xl mx-auto font-sans leading-relaxed'>
              {t('subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'>
            <Card className='p-8 text-center border-gray-300 dark:border-gray-700 hover:border-lime-500/50 transition-colors bg-white dark:bg-gray-800'>
              <div className='w-16 h-16 bg-lime-500/20 dark:bg-lime-500/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Target className='w-8 h-8 text-lime-500' />
              </div>
              <h3 className='text-xl mb-3 text-gray-900 dark:text-white font-sans font-semibold'>
                {t('vision.title')}
              </h3>
              <p className='text-gray-600 dark:text-gray-300 font-sans leading-relaxed'>
                {t('vision.content')}
              </p>
            </Card>
            <Card className='p-8 text-center border-gray-300 dark:border-gray-700 hover:border-lime-500/50 transition-colors bg-white dark:bg-gray-800'>
              <div className='w-16 h-16 bg-green-500/20 dark:bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Heart className='w-8 h-8 text-green-500' />
              </div>
              <h3 className='text-xl mb-3 text-gray-900 dark:text-white font-sans font-semibold'>
                {t('mission.title')}
              </h3>
              <p className='text-gray-600 dark:text-gray-300 font-sans leading-relaxed'>
                {t('mission.content')}
              </p>
            </Card>
            <Card className='p-8 text-center border-gray-300 dark:border-gray-700 hover:border-lime-500/50 transition-colors bg-white dark:bg-gray-800'>
              <div className='w-16 h-16 bg-emerald-500/20 dark:bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Zap className='w-8 h-8 text-emerald-500' />
              </div>
              <h3 className='text-xl mb-3 text-gray-900 dark:text-white font-sans font-semibold'>
                {t('values.title')}
              </h3>
              <p className='text-gray-600 dark:text-gray-300 font-sans leading-relaxed'>
                {t('values.content')}
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-3xl mb-8 text-center text-white font-sans font-bold'>
            ทีมงานของเรา
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {team.map((member, index) => (
              <Card
                key={index}
                className='p-6 text-center hover:shadow-lg transition-all border-gray-700 hover:border-lime-500/50 bg-gray-800 dark:bg-gray-800'
              >
                <div className='w-20 h-20 bg-gradient-to-br from-lime-400 to-green-500 rounded-full flex items-center justify-center text-black mx-auto mb-4 text-2xl shadow-lg shadow-lime-500/30'>
                  <Users size={32} />
                </div>
                <h3 className='mb-1 text-white font-sans font-semibold'>
                  {member.name}
                </h3>
                <p className='text-sm text-gray-300 mb-4 font-sans'>
                  {member.role}
                </p>
                <div className='flex flex-wrap gap-2 justify-center'>
                  {member.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant='secondary'
                      className='text-xs bg-gray-700 text-gray-200 border-gray-600'
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Tools & Tech */}
      <div className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-3xl mb-8 text-center text-white font-sans font-bold'>
            เครื่องมือที่เราใช้
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Card
                  key={index}
                  className='p-6 text-center hover:shadow-lg transition-all border-gray-700 hover:border-lime-500/50 bg-gray-800 dark:bg-gray-800'
                >
                  <Icon className='w-12 h-12 text-lime-500 mx-auto mb-3' />
                  <h3 className='mb-1 text-white font-sans font-semibold'>
                    {tool.name}
                  </h3>
                  <p className='text-sm text-gray-300 font-sans'>
                    {tool.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
