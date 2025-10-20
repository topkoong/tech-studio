import { getAllBlogPosts, getBlogPost } from '@/lib/blog-content';

import BlogCard from '@/components/blog-card';
import Footer from '@/components/footer';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.metadata.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getAllBlogPosts()
    .filter((p) => p.metadata.slug !== slug)
    .slice(0, 3);

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800'>
      <Navigation />

      {/* Article Header */}
      <article className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto'>
          <div className='mb-8'>
            <Link
              href='/blog'
              className='text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors'
            >
              ← Back to Blog
            </Link>
          </div>

          <header className='mb-12'>
            <div className='mb-4'>
              <span className='inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-semibold px-3 py-1 rounded-full'>
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
          </header>

          {/* Article Content */}
          <div className='prose prose-lg max-w-none dark:prose-invert prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-a:text-lime-600 dark:prose-a:text-lime-400 prose-code:text-lime-600 dark:prose-code:text-lime-400 prose-pre:bg-slate-100 dark:prose-pre:bg-slate-800'>
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Tags */}
          {post.metadata.tags.length > 0 && (
            <div className='mt-12 pt-8 border-t border-slate-200 dark:border-slate-700'>
              <h3 className='text-lg font-semibold text-slate-900 dark:text-white mb-4'>
                Tags
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
            </div>
          )}
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className='py-20 bg-white dark:bg-slate-800'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center'>
              Related Articles
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {relatedPosts.map((post) => (
                <BlogCard key={post.metadata.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
