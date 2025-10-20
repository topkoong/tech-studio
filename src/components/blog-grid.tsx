'use client';

import BlogCard from './blog-card';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';

interface BlogGridProps {
  posts: Array<{
    metadata: {
      slug: string;
      title: string;
      excerpt: string;
      date: string;
      readTime: string;
      category: string;
      tags: string[];
      author: string;
      featured: boolean;
    };
    content: string;
  }>;
  locale?: string;
}

export function BlogGrid({ posts, locale }: BlogGridProps) {
  const params = useParams();
  const currentLocale = locale || (params?.locale as string) || 'en';

  const filtered = posts.filter((p) =>
    p.metadata.slug.startsWith(`${currentLocale}/`)
  );

  if (filtered.length === 0) {
    return (
      <motion.div
        className='text-center py-12'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className='text-2xl font-semibold text-gray-900 dark:text-white mb-4'>
          No posts found
        </h2>
        <p className='text-gray-700 dark:text-gray-300'>
          Check back soon for new content!
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {filtered.map((post, index) => (
        <motion.div
          key={post.metadata.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <BlogCard post={post} />
        </motion.div>
      ))}
    </motion.div>
  );
}
