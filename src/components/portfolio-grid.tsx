'use client';

import { motion } from 'framer-motion';
import PortfolioCard from './portfolio-card';

interface PortfolioGridProps {
  projects: Array<{
    metadata: {
      id: string;
      title: string;
      description: string;
      longDescription: string;
      image: string;
      technologies: string[];
      category: string;
      client: string;
      duration: string;
      features: string[];
      challenges: string[];
      solutions: string[];
      results: string[];
      liveUrl?: string;
      githubUrl?: string;
      featured: boolean;
      date: string;
    };
  }>;
  featured?: boolean;
}

export function PortfolioGrid({ projects, featured = false }: PortfolioGridProps) {
  return (
    <motion.div
      className={featured ? 'grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: featured ? 0.4 : 0.7 }}
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.metadata.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: (featured ? 0.5 : 0.8) + index * (featured ? 0.1 : 0.05) }}
        >
          <PortfolioCard project={project.metadata} featured={featured} />
        </motion.div>
      ))}
    </motion.div>
  );
}
