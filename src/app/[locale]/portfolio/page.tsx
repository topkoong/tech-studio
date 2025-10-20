import { FloatingObstacles } from '@/components/floating-obstacles';
import { FloatingParticles } from '@/components/floating-particles';
import Footer from '@/components/footer';
import { LemonGlow } from '@/components/lemon-glow';
import Navigation from '@/components/navigation';
import { PortfolioCTA } from '@/components/portfolio-cta';
import { PortfolioGrid } from '@/components/portfolio-grid';
import { PortfolioHero } from '@/components/portfolio-hero';
import { PortfolioMascot } from '@/components/mascots';
import { getAllPortfolioProjects } from '@/lib/portfolio-content';
import { getTranslations } from 'next-intl/server';

export default async function PortfolioPage() {
  const projects = getAllPortfolioProjects();
  const t = await getTranslations('portfolio');

  const featuredProjects = projects
    .filter((p) => p.metadata.featured)
    .slice(0, 2);

  return (
    <div className='min-h-screen bg-gradient-to-br from-green-950 via-green-900 to-background dark:from-green-950 dark:via-green-900 dark:to-background relative overflow-hidden'>
      <Navigation />

      {/* Floating particles */}
      <FloatingParticles
        count={50}
        className='text-emerald-500/20 dark:text-lime-400/30'
        size='md'
      />

      <LemonGlow />
      <FloatingObstacles count={12} seed={202} />
      <PortfolioMascot />

      {/* Hero Section */}
      <PortfolioHero title={t('title')} subtitle={t('subtitle')} />

      {/* Featured Projects */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
              {t('featuredProjects')}
            </h2>
            <p className='text-lg text-gray-700 dark:text-gray-300'>
              {t('featuredDescription')}
            </p>
          </div>

          <PortfolioGrid projects={featuredProjects} featured />
        </div>
      </section>

      {/* All Projects */}
      <section className='py-20 relative z-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
              {t('allProjects')}
            </h2>
            <p className='text-lg text-gray-700 dark:text-gray-300'>
              {t('allDescription')}
            </p>
          </div>

          <PortfolioGrid projects={projects} />
        </div>
      </section>

      {/* CTA Section */}
      <PortfolioCTA
        title={t('cta.title')}
        description={t('cta.description')}
        buttonText={t('cta.button')}
      />

      <Footer />
    </div>
  );
}
