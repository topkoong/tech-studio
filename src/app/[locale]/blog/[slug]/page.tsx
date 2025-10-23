import {
  getAllBlogPosts,
  getBlogPost,
  getRelatedPosts,
} from '@/lib/blog-content';

import { AnimatedBlogContent } from '@/components/animated-blog-content';
import { FloatingParticles } from '@/components/floating-particles';
import Footer from '@/components/footer';
import Navigation from '@/components/navigation';
import { RelatedPosts } from '@/components/related-posts';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

/**
 * Props interface for the blog post page component
 * Contains dynamic route parameters from Next.js
 */
interface BlogPostPageProps {
  params: Promise<{
    /** The blog post slug from the URL (e.g., 'getting-started-n8n-workflow-automation') */
    slug: string;
    /** The locale from the URL (e.g., 'en' or 'th') */
    locale: string;
  }>;
}

/**
 * Generates static parameters for all blog posts at build time
 * This enables static site generation (SSG) for optimal performance
 *
 * How it works:
 * 1. Gets all blog posts from the content directory
 * 2. Extracts the actual slug from the full slug (removes language prefix)
 * 3. Extracts the locale from the full slug
 * 4. Returns parameters in the format Next.js expects for dynamic routes
 *
 * Example:
 * - Full slug: 'en/getting-started-n8n-workflow-automation'
 * - Extracted slug: 'getting-started-n8n-workflow-automation'
 * - Extracted locale: 'en'
 *
 * @returns Array of static parameters for all blog posts
 */
export function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => {
    // Extract the actual slug from the full slug (remove language prefix)
    // Example: 'en/getting-started' -> 'getting-started'
    const actualSlug = post.metadata.slug.includes('/')
      ? post.metadata.slug.split('/')[1]
      : post.metadata.slug;

    // Extract the locale from the full slug
    // Example: 'en/getting-started' -> 'en'
    const locale = post.metadata.slug.includes('/')
      ? post.metadata.slug.split('/')[0]
      : 'en';

    return {
      slug: actualSlug,
      locale: locale,
    };
  });
}

/**
 * Blog Post Page Component
 *
 * This component renders individual blog posts with:
 * - Semantic HTML5 structure for accessibility and SEO
 * - Intelligent related posts based on category and tags
 * - Floating particles for visual enhancement
 * - Responsive design for all screen sizes
 *
 * URL Structure:
 * - English: /en/blog/post-slug
 * - Thai: /th/blog/post-slug
 *
 * @param params - Dynamic route parameters containing slug and locale
 * @returns JSX element containing the blog post page
 */
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug, locale } = await params;

  // Construct the full slug with locale prefix for content lookup
  // This matches the format used in the content directory structure
  // Example: 'getting-started' + 'en' = 'en/getting-started'
  const fullSlug = `${locale}/${slug}`;

  // Load the specific blog post using the full slug
  const post = getBlogPost(fullSlug);
  const t = await getTranslations('blog');

  // If post doesn't exist, trigger Next.js 404 page
  if (!post) {
    notFound();
  }

  /**
   * Intelligent Related Posts System
   *
   * The getRelatedPosts() function finds semantically related content by:
   * 1. Finding posts with the same category, OR
   * 2. Finding posts that share at least one tag
   * 3. Excluding the current post
   * 4. Limiting results to 3 posts for optimal UX
   *
   * This is much better than just showing recent posts regardless of relevance!
   *
   * Example Results:
   * - Viewing: "Next.js React Modern Development"
   * - Related: "Next.js 14 App Router" (shares tags: Next.js, React) ✓
   * - Related: "Redis Caching" (shares tag: Performance) ✓
   *
   * - Viewing: "Spring Boot Kafka"
   * - Related: (none if no posts share Backend Development category or its tags)
   */
  const relatedPosts = getRelatedPosts(fullSlug, 3);

  return (
    <main className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden'>
      <Navigation />

      {/* Floating particles for visual enhancement */}
      <FloatingParticles
        count={30}
        className='text-emerald-500/15 dark:text-lime-400/25'
        size='sm'
      />

      {/* Main article content using semantic HTML5 article element */}
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

      {/* Related posts section - shows semantically related content */}
      <RelatedPosts posts={relatedPosts} title={t('relatedArticles')} />

      <Footer />
    </main>
  );
}
