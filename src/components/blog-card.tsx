import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BlogPost } from '@/lib/blog-content';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className='hover:shadow-xl transition-all duration-300 bg-gray-800 dark:bg-gray-800 border-gray-700 dark:border-gray-700 hover:border-lime-500 dark:hover:border-lime-500 overflow-hidden'>
      {/* Image placeholder */}
      <div className='relative h-48 bg-gradient-to-br from-gray-700 to-gray-600'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center'>
            <svg className='w-8 h-8 text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
            </svg>
          </div>
        </div>
      </div>

      <CardHeader className='pb-4'>
        <div className='flex items-center justify-between mb-3'>
          <Badge className='bg-lime-500 text-black hover:bg-lime-400'>
            {post.metadata.category}
          </Badge>
        </div>
        <h2 className='text-xl font-bold text-white line-clamp-2 mb-3'>
          <Link
            href={`/blog/${post.metadata.slug}`}
            className='hover:text-lime-400 transition-colors'
          >
            {post.metadata.title}
          </Link>
        </h2>
        <p className='text-gray-300 text-sm leading-relaxed line-clamp-3'>
          {post.metadata.excerpt}
        </p>
      </CardHeader>

      <CardContent className='pt-0'>
        <div className='flex items-center gap-4 text-sm text-gray-400 mb-4'>
          <div className='flex items-center gap-1'>
            <Calendar className='w-4 h-4' />
            <span>{new Date(post.metadata.date).toLocaleDateString('th-TH')}</span>
          </div>
          <div className='flex items-center gap-1'>
            <Clock className='w-4 h-4' />
            <span>{post.metadata.readTime}</span>
          </div>
        </div>

        <Link
          href={`/blog/${post.metadata.slug}`}
          className='inline-flex items-center text-lime-400 hover:text-lime-300 font-medium transition-colors'
        >
          อ่านเพิ่มเติม →
        </Link>
      </CardContent>
    </Card>
  );
}
