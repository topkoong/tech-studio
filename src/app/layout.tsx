// Import global CSS styles for consistent styling across the application
import './globals.css';

// Import Next.js metadata type for TypeScript support
import type { Metadata } from 'next';

/**
 * Root layout metadata configuration
 * 
 * This metadata object defines the global SEO settings for the application,
 * including title, description, keywords, and social media sharing tags.
 * These settings serve as defaults for all pages unless overridden.
 */
export const metadata: Metadata = {
  // Base URL for all metadata links and canonical URLs
  metadataBase: new URL('https://tech-studio.com'),
  
  // Primary page title that appears in browser tabs and search results
  title: 'TechStudio - Custom Software Development Solutions',
  
  // Meta description for search engine results and social media previews
  description:
    'Build custom software solutions for your business. We create tailored web applications, automation systems, and APIs that help businesses grow with technology.',
  
  // SEO keywords for search engine optimization
  keywords:
    'custom software development, web applications, automation, API development, business solutions, TechStudio',
  
  // Author information for content attribution
  authors: [{ name: 'TechStudio' }],
  
  // Open Graph metadata for social media sharing (Facebook, LinkedIn, etc.)
  openGraph: {
    title: 'TechStudio - Custom Software Development Solutions',
    description:
      'Build custom software solutions for your business. We create tailored web applications, automation systems, and APIs that help businesses grow with technology.',
    url: 'https://tech-studio.com',
    siteName: 'TechStudio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TechStudio - Custom Software Development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  // Twitter Card metadata for Twitter sharing
  twitter: {
    card: 'summary_large_image',
    title: 'TechStudio - Custom Software Development Solutions',
    description:
      'Build custom software solutions for your business. We create tailored web applications, automation systems, and APIs that help businesses grow with technology.',
    images: ['/og-image.jpg'],
  },
  
  // Robot directives for search engine crawling
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
 * Root layout component
 * 
 * This is the top-level layout component that wraps all pages in the application.
 * It serves as the entry point for the HTML document structure and ensures
 * consistent metadata and styling across all pages.
 * 
 * @param children - React children components representing page content
 * @returns JSX element containing the page content
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Return children directly as this layout serves as a pass-through
  // The actual HTML structure is handled by the locale-specific layout
  return children;
}
