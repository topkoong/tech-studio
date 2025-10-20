import { ExternalLink, Github } from 'lucide-react';
import {
  getAllPortfolioProjects,
  getPortfolioProject,
  getRelatedPortfolioProjects,
} from '@/lib/portfolio-content';

import { AnimatedPortfolioContent } from '@/components/animated-portfolio-content';
import { Button } from '@/components/ui/button';
import { FadeUp } from '@/components/text-animations';
import { FloatingParticles } from '@/components/floating-particles';
import Footer from '@/components/footer';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import PortfolioCard from '@/components/portfolio-card';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

interface PortfolioProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  const projects = getAllPortfolioProjects();
  return projects.map((project) => ({
    slug: project.metadata.slug,
  }));
}

export default async function PortfolioProjectPage({
  params,
}: PortfolioProjectPageProps) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedPortfolioProjects(slug, 3);
  const t = await getTranslations('portfolio');

  const translations = {
    backToPortfolio: t('backToPortfolio'),
    technologies: t('technologies'),
    features: t('features'),
    challenges: t('challenges'),
    solutions: t('solutions'),
    results: t('results'),
    relatedProjects: t('relatedProjects'),
    liveDemo: t('liveDemo'),
    viewCode: t('viewCode'),
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-green-950 via-green-900 to-background dark:from-green-950 dark:via-green-900 dark:to-background relative overflow-hidden'>
      <Navigation />
      <AnimatedPortfolioContent
        project={project}
        relatedProjects={relatedProjects}
        translations={translations}
      />
      <Footer />
    </div>
  );
}
