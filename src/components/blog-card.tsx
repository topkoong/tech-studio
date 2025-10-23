'use client';

import { Calendar, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';
import { BlogPost } from '@/lib/blog-content';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

/**
 * Props for the BlogCard component
 */
interface BlogCardProps {
  /** Blog post data containing metadata and content */
  post: BlogPost;
}

/**
 * Blog post card component with glassmorphism design
 * Features:
 * - Responsive image display with fallback
 * - Glassmorphism styling with backdrop blur
 * - Hover animations and effects
 * - Category badges
 * - Date and reading time display
 * - Locale-aware routing
 * 
 * @param props - Component props
 * @returns JSX element representing a blog post card
 */
export default function BlogCard({ post }: BlogCardProps) {
  const params = useParams();
  const locale = params.locale as string;

  // Extract the actual slug from the full slug (remove language prefix)
  const actualSlug = post.metadata.slug.includes('/')
    ? post.metadata.slug.split('/')[1]
    : post.metadata.slug;

  return (
    <Card className='hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/10 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/30 hover:border-lime-500/50 dark:hover:border-lime-500/50 shadow-xl hover:shadow-lime-500/25 overflow-hidden'>
      {/* Image */}
      <div className='relative h-48 bg-gradient-to-br from-gray-700 to-gray-600'>
        {post.metadata.image ? (
          <Image
            src={post.metadata.image}
            alt={post.metadata.title}
            fill
            className='object-cover'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            priority={false}
          />
        ) : (
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center'>
              <svg
                className='w-8 h-8 text-black'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                />
              </svg>
            </div>
          </div>
        )}
      </div>

      <CardHeader className='pb-4'>
        <div className='flex items-center justify-between mb-3'>
          <Badge className='bg-lime-500 text-black hover:bg-lime-400'>
            {post.metadata.category}
          </Badge>
        </div>
        <h2 className='text-xl font-bold text-gray-900 dark:text-white line-clamp-2 mb-3'>
          <Link
            href={`/${locale}/blog/${actualSlug}`}
            className='hover:text-lime-600 dark:hover:text-lime-400 transition-colors'
          >
            {post.metadata.title}
          </Link>
        </h2>
        <p className='text-gray-700 dark:text-gray-300 text-sm leading-relaxed line-clamp-3'>
          {post.metadata.excerpt}
        </p>
      </CardHeader>

      <CardContent className='pt-0'>
        <div className='flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4'>
          <div className='flex items-center gap-1'>
            <Calendar className='w-4 h-4' />
            <span>
              {new Date(post.metadata.date).toLocaleDateString('th-TH')}
            </span>
          </div>
          <div className='flex items-center gap-1'>
            <Clock className='w-4 h-4' />
            <span>{post.metadata.readTime}</span>
          </div>
        </div>

        <Link
          href={`/${locale}/blog/${actualSlug}`}
          className='inline-flex items-center text-lime-600 dark:text-lime-400 hover:text-lime-700 dark:hover:text-lime-300 font-medium transition-colors'
        >
          อ่านเพิ่มเติม →
        </Link>
      </CardContent>
    </Card>
  );
}
