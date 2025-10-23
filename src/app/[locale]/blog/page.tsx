import BlogCard from '@/components/blog-card';
import { BlogGrid } from '@/components/blog-grid';
import { BlogHero } from '@/components/blog-hero';
import { BlogNewsletter } from '@/components/blog-newsletter';
import { FloatingMascots } from '@/components/floating-mascots';
import { FloatingObstacles } from '@/components/floating-obstacles';
import { FloatingParticles } from '@/components/floating-particles';
import Footer from '@/components/footer';
import { LemonGlow } from '@/components/lemon-glow';
import Navigation from '@/components/navigation';
import { getAllBlogPosts } from '@/lib/blog-content';
import { getTranslations } from 'next-intl/server';

/** Supported locales for static generation */
const locales = ['en', 'th'] as const;

/**
 * Generates static parameters for blog page locales
 * Enables static site generation for both English and Thai blog pages
 *
 * @returns Array of locale parameters for static generation
 */
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * Props interface for the blog page component
 */
interface BlogPageProps {
  params: Promise<{
    /** The locale from the URL (e.g., 'en' or 'th') */
    locale: string;
  }>;
}

/**
 * Blog Listing Page Component
 *
 * This component displays all blog posts with:
 * - Semantic HTML5 structure for accessibility and SEO
 * - Posts sorted by publication date (newest first)
 * - Featured posts prominently displayed
 * - Newsletter subscription section
 * - Floating visual elements for engagement
 *
 * URL Structure:
 * - English: /en/blog
 * - Thai: /th/blog
 *
 * @param params - Dynamic route parameters containing locale
 * @returns JSX element containing the blog listing page
 */
export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;

  /**
   * Blog Posts Processing
   *
   * 1. getAllBlogPosts() retrieves all posts from content directory
   * 2. Posts are automatically sorted by date (newest first)
   * 3. Featured flag is normalized to boolean for consistency
   * 4. Posts are filtered by locale during rendering
   */
  const posts = getAllBlogPosts().map((p) => ({
    ...p,
    metadata: { ...p.metadata, featured: Boolean(p.metadata.featured) },
  }));

  const t = await getTranslations('blog');

  return (
    <main className='min-h-screen bg-gradient-to-br from-green-950 via-green-900 to-background dark:from-green-950 dark:via-green-900 dark:to-background relative overflow-hidden'>
      <Navigation />

      {/* Floating particles for visual enhancement */}
      <FloatingParticles
        count={120}
        className='text-emerald-500/30 dark:text-lime-400/60'
        size='md'
      />

      {/* Lemon glow effect for visual appeal */}
      <LemonGlow />

      {/* Floating mascots for engagement */}
      <FloatingMascots
        count={1}
        className='text-emerald-400/30 dark:text-lime-400/50'
      />

      {/* Hero section with blog title and description */}
      <BlogHero title={t('title')} subtitle={t('subtitle')} />

      {/* Main blog posts grid - displays all posts sorted by date */}
      <section className='py-20 relative z-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <BlogGrid posts={posts} locale={locale} />
        </div>
      </section>

      {/* Newsletter subscription section */}
      <BlogNewsletter
        title={t('newsletter.title')}
        description={t('newsletter.description')}
        placeholder={t('newsletter.placeholder')}
        subscribeText={t('newsletter.subscribe')}
        privacyText={t('newsletter.privacy')}
      />

      <Footer />
    </main>
  );
}
