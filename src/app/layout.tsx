import './globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://tech-studio.com'),
  title: 'TechStudio - Custom Software Development Solutions',
  description:
    'Build custom software solutions for your business. We create tailored web applications, automation systems, and APIs that help businesses grow with technology.',
  keywords:
    'custom software development, web applications, automation, API development, business solutions, TechStudio',
  authors: [{ name: 'TechStudio' }],
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
  twitter: {
    card: 'summary_large_image',
    title: 'TechStudio - Custom Software Development Solutions',
    description:
      'Build custom software solutions for your business. We create tailored web applications, automation systems, and APIs that help businesses grow with technology.',
    images: ['/og-image.jpg'],
  },
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
