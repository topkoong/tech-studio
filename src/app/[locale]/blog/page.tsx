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

const locales = ['en', 'th'] as const;

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface BlogPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  const posts = getAllBlogPosts().map((p) => ({
    ...p,
    metadata: { ...p.metadata, featured: Boolean(p.metadata.featured) },
  }));
  const t = await getTranslations('blog');

  return (
    <main className='min-h-screen bg-gradient-to-br from-green-950 via-green-900 to-background dark:from-green-950 dark:via-green-900 dark:to-background relative overflow-hidden'>
      <Navigation />

      <FloatingParticles
        count={120}
        className='text-emerald-500/30 dark:text-lime-400/60'
        size='md'
      />

      <LemonGlow />
      <FloatingMascots
        count={1}
        className='text-emerald-400/30 dark:text-lime-400/50'
      />

      {/* Hero Section */}
      <BlogHero title={t('title')} subtitle={t('subtitle')} />

      {/* Blog Posts Grid */}
      <section className='py-20 relative z-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <BlogGrid posts={posts} locale={locale} />
        </div>
      </section>

      {/* Newsletter Section */}
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
