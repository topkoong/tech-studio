'use client';

import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

interface AnimatedBlogContentProps {
  locale: string;
  post: {
    metadata: {
      title: string;
      excerpt: string;
      date: string;
      author: string;
      readTime: string;
      category: string;
      tags: string[];
    };
    content: string;
  };
  translations: {
    backToBlog: string;
    tags: string;
  };
}

export function AnimatedBlogContent({
  locale,
  post,
  translations,
}: AnimatedBlogContentProps) {
  return (
    <>
      <motion.div
        className='mb-8'
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link
          href={`/${locale}/blog`}
          className='text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors font-medium'
        >
          {translations.backToBlog}
        </Link>
      </motion.div>

      <motion.header
        className='mb-12'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className='mb-4'>
          <span className='inline-block bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 text-sm font-semibold px-3 py-1 rounded-full'>
            {post.metadata.category}
          </span>
        </div>
        <h1 className='text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6'>
          {post.metadata.title}
        </h1>
        <p className='text-xl text-slate-600 dark:text-slate-300 mb-6'>
          {post.metadata.excerpt}
        </p>
        <div className='flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400'>
          <span>By {post.metadata.author}</span>
          <span>•</span>
          <span>{new Date(post.metadata.date).toLocaleDateString()}</span>
          <span>•</span>
          <span>{post.metadata.readTime}</span>
        </div>
      </motion.header>

      {/* Article Content */}
      <motion.div
        className='prose prose-lg max-w-none dark:prose-invert prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-a:text-emerald-600 dark:prose-a:text-emerald-400 prose-code:text-emerald-600 dark:prose-code:text-emerald-400 prose-pre:bg-slate-100 dark:prose-pre:bg-slate-800'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {post.content}
        </ReactMarkdown>
      </motion.div>

      {/* Tags */}
      {post.metadata.tags.length > 0 && (
        <motion.div
          className='mt-12 pt-8 border-t border-slate-200 dark:border-slate-700'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className='text-lg font-semibold text-slate-900 dark:text-white mb-4'>
            {translations.tags}
          </h3>
          <div className='flex flex-wrap gap-2'>
            {post.metadata.tags.map((tag) => (
              <span
                key={tag}
                className='px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm'
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
