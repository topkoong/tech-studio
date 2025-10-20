import { FloatingMascots } from '@/components/floating-mascots';
import { FloatingObstacles } from '@/components/floating-obstacles';
import { FloatingParticles } from '@/components/floating-particles';
import { FloatingParticlesBanner } from '@/components/floating-particles-banner';
import Footer from '@/components/footer';
import { LemonGlow } from '@/components/lemon-glow';
import Navigation from '@/components/navigation';
import { PortfolioCTA } from '@/components/portfolio-cta';
import { PortfolioGrid } from '@/components/portfolio-grid';
import { PortfolioHero } from '@/components/portfolio-hero';
import { getAllPortfolioProjects } from '@/lib/portfolio-content';
import { getTranslations } from 'next-intl/server';

export default async function PortfolioPage() {
  const all = getAllPortfolioProjects();
  // Filter to current locale via pathname segment from route params is not accessible here.
  // We'll infer from URL at render time in the grid consumers; alternatively, keep all and de-dupe by id.
  const projects = Array.from(
    all
      .reduce((map, p) => {
        if (!map.has(p.metadata.id)) map.set(p.metadata.id, p);
        return map;
      }, new Map<string, (typeof all)[number]>())
      .values()
  );
  const t = await getTranslations('portfolio');

  const featuredProjects = Array.from(
    projects
      .filter((p) => p.metadata.featured)
      .reduce((map, p) => {
        if (!map.has(p.metadata.id)) map.set(p.metadata.id, p);
        return map;
      }, new Map<string, (typeof projects)[number]>())
      .values()
  ).slice(0, 2);

  return (
    <div className='min-h-screen bg-gradient-to-br from-green-950 via-green-900 to-background dark:from-green-950 dark:via-green-900 dark:to-background relative overflow-hidden'>
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
