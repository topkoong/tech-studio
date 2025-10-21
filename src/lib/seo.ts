import type { Metadata } from 'next';

/**
 * SEO utilities for generating metadata and structured data
 * Provides comprehensive SEO optimization for the application
 */

/**
 * Base metadata configuration
 * Used as defaults for all pages unless overridden
 */
export const baseMetadata: Metadata = {
  metadataBase: new URL('https://topkoong.github.io/tech-studio'),
  title: 'TechStudio - Custom Software Development Solutions',
  description:
    'Build custom software solutions for your business. We create tailored web applications, automation systems, and APIs that help businesses grow with technology.',
  keywords:
    'custom software development, web applications, automation, API development, business solutions, TechStudio',
  authors: [{ name: 'TechStudio' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/**
 * Generate page-specific metadata
 *
 * @param options - Metadata options
 * @returns Generated metadata object
 */
export function generateMetadata(options: {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
  tags?: string[];
}): Metadata {
  const {
    title,
    description,
    keywords = [],
    image = '/og-image.jpg',
    url,
    type = 'website',
    publishedTime,
    modifiedTime,
    authors = ['TechStudio'],
    section,
    tags = [],
  } = options;

  // Combine base keywords with page-specific keywords
  const allKeywords = [
    ...(typeof baseMetadata.keywords === 'string' 
      ? baseMetadata.keywords.split(', ') 
      : baseMetadata.keywords || []),
    ...keywords,
  ].join(', ');

  // Generate Open Graph type (map product/service to website)
  const ogType = type === 'product' || type === 'service' ? 'website' : type;

  const metadata: Metadata = {
    ...baseMetadata,
    title: title ? `${title} | TechStudio` : (baseMetadata.title as string),
    description: description || (baseMetadata.description as string),
    keywords: allKeywords,
    authors: authors.map((name) => ({ name })),
    openGraph: {
      title: title ? `${title} | TechStudio` : (baseMetadata.title as string),
      description: description || (baseMetadata.description as string),
      url: url || baseMetadata.metadataBase?.toString(),
      siteName: 'TechStudio',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title
            ? `${title} - TechStudio`
            : 'TechStudio - Custom Software Development',
        },
      ],
      locale: 'en_US',
      type: ogType,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title: title ? `${title} | TechStudio` : (baseMetadata.title as string),
      description: description || (baseMetadata.description as string),
      images: [image],
    },
  };

  return metadata;
}

/**
 * Generate structured data (JSON-LD) for SEO
 *
 * @param options - Structured data options
 * @returns JSON-LD string
 */
export function generateStructuredData(options: {
  type: 'Organization' | 'Article' | 'Product' | 'Service' | 'WebSite';
  name?: string;
  description?: string;
  url?: string;
  image?: string;
  logo?: string;
  sameAs?: string[];
  author?: {
    name: string;
    url?: string;
  };
  datePublished?: string;
  dateModified?: string;
  headline?: string;
  articleSection?: string;
  keywords?: string[];
}): string {
  const {
    type,
    name = 'TechStudio',
    description = 'Custom software development solutions for businesses',
    url = 'https://topkoong.github.io/tech-studio',
    image = 'https://topkoong.github.io/tech-studio/og-image.jpg',
    logo = 'https://topkoong.github.io/tech-studio/logo.png',
    sameAs = [],
    author,
    datePublished,
    dateModified,
    headline,
    articleSection,
    keywords = [],
  } = options;

  const baseData: any = {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    description,
    url,
    image,
    logo,
    ...(sameAs.length > 0 && { sameAs }),
  };

  let structuredData: any = baseData;

  switch (type) {
    case 'Organization':
      structuredData = {
        ...baseData,
        '@type': 'Organization',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'US',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          email: 'theeruttop@gmail.com',
        },
        foundingDate: '2024',
        numberOfEmployees: '1-10',
        industry: 'Software Development',
        services: [
          'Custom Web Applications',
          'API Development',
          'Business Automation',
          'Software Consulting',
        ],
      };
      break;

    case 'Article':
      structuredData = {
        ...baseData,
        '@type': 'Article',
        headline: headline || name,
        ...(author && {
          author: {
            '@type': 'Person',
            name: author.name,
            ...(author.url && { url: author.url }),
          },
        }),
        ...(datePublished && { datePublished }),
        ...(dateModified && { dateModified }),
        ...(articleSection && { articleSection }),
        ...(keywords.length > 0 && { keywords: keywords.join(', ') }),
        publisher: {
          '@type': 'Organization',
          name: 'TechStudio',
          logo: {
            '@type': 'ImageObject',
            url: logo,
          },
        },
      };
      break;

    case 'Product':
    case 'Service':
      structuredData = {
        ...baseData,
        '@type': type,
        name: headline || name,
        description,
        ...(keywords.length > 0 && { keywords: keywords.join(', ') }),
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'USD',
        },
      };
      break;

    case 'WebSite':
      structuredData = {
        ...baseData,
        '@type': 'WebSite',
        name: 'TechStudio',
        description: 'Custom software development solutions',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate:
              'https://topkoong.github.io/tech-studio/search?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      };
      break;
  }

  return JSON.stringify(structuredData);
}

/**
 * Generate sitemap data
 *
 * @param pages - Array of page data
 * @returns Sitemap XML string
 */
export function generateSitemap(
  pages: Array<{
    url: string;
    lastModified?: string;
    changeFrequency?:
      | 'always'
      | 'hourly'
      | 'daily'
      | 'weekly'
      | 'monthly'
      | 'yearly'
      | 'never';
    priority?: number;
  }>
): string {
  const baseUrl = 'https://topkoong.github.io/tech-studio';

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    ${page.lastModified ? `<lastmod>${page.lastModified}</lastmod>` : ''}
    ${
      page.changeFrequency
        ? `<changefreq>${page.changeFrequency}</changefreq>`
        : ''
    }
    ${page.priority ? `<priority>${page.priority}</priority>` : ''}
  </url>`
  )
  .join('\n')}
</urlset>`;

  return sitemap;
}

/**
 * Generate robots.txt content
 *
 * @param options - Robots.txt options
 * @returns Robots.txt string
 */
export function generateRobotsTxt(options: {
  allow?: string[];
  disallow?: string[];
  sitemap?: string;
  crawlDelay?: number;
}): string {
  const { allow = [], disallow = [], sitemap, crawlDelay } = options;

  let robots = 'User-agent: *\n';

  if (allow.length > 0) {
    allow.forEach((path) => {
      robots += `Allow: ${path}\n`;
    });
  }

  if (disallow.length > 0) {
    disallow.forEach((path) => {
      robots += `Disallow: ${path}\n`;
    });
  }

  if (crawlDelay) {
    robots += `Crawl-delay: ${crawlDelay}\n`;
  }

  if (sitemap) {
    robots += `Sitemap: ${sitemap}\n`;
  }

  return robots;
}
