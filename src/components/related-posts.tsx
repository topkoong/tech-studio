'use client';

import BlogCard from '@/components/blog-card';
import { motion } from 'framer-motion';

interface RelatedPostsProps {
  posts: Array<{
    metadata: {
      slug: string;
      title: string;
      excerpt: string;
      date: string;
      author: string;
      readTime: string;
      category: string;
      tags: string[];
    };
    content: string;
  }>;
  title: string;
}

export function RelatedPosts({ posts, title }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className='py-20 bg-white dark:bg-slate-800 relative z-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.h2
          className='text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h2>
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {posts.map((post, index) => (
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
      </div>
    </section>
  );
}
