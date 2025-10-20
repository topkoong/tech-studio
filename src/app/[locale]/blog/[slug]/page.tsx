import { getAllBlogPosts, getBlogPost } from '@/lib/blog-content';

import { AnimatedBlogContent } from '@/components/animated-blog-content';
import { FloatingParticles } from '@/components/floating-particles';
import Footer from '@/components/footer';
import Navigation from '@/components/navigation';
import { RelatedPosts } from '@/components/related-posts';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

export function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => {
    // Extract the actual slug from the full slug (remove language prefix)
    const actualSlug = post.metadata.slug.includes('/')
      ? post.metadata.slug.split('/')[1]
      : post.metadata.slug;

    // Extract the locale from the full slug
    const locale = post.metadata.slug.includes('/')
      ? post.metadata.slug.split('/')[0]
      : 'en';

    return {
      slug: actualSlug,
      locale: locale,
    };
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug, locale } = await params;

  // Construct the full slug with locale prefix
  const fullSlug = `${locale}/${slug}`;
  const post = getBlogPost(fullSlug);
  const t = await getTranslations('blog');

  if (!post) {
    notFound();
  }

  const relatedPosts = getAllBlogPosts()
    .filter((p) => p.metadata.slug !== fullSlug)
    .slice(0, 3);

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden'>
      <Navigation />

      {/* Floating particles */}
      <FloatingParticles
        count={30}
        className='text-emerald-500/15 dark:text-lime-400/25'
        size='sm'
      />

      {/* Article Header */}
      <article className='py-20 px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='max-w-4xl mx-auto'>
          <AnimatedBlogContent
            locale={locale}
            post={post}
            translations={{
              backToBlog: t('backToBlog'),
              tags: t('tags'),
            }}
          />
        </div>
      </article>

      {/* Related Posts */}
      <RelatedPosts posts={relatedPosts} title={t('relatedArticles')} />

      <Footer />
    </div>
  );
}
