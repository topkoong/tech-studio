import { MetadataRoute } from 'next';

// Required for static export
export const dynamic = 'force-static';

/**
 * PWA Manifest Configuration
 * 
 * Defines the Progressive Web App manifest for the application
 * Enables app-like experience when installed on devices
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TechStudio - Custom Software Development Solutions',
    short_name: 'TechStudio',
    description:
      'Build custom software solutions for your business. We create tailored web applications, automation systems, and APIs that help businesses grow with technology.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en',
    categories: ['business', 'productivity', 'utilities'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: '16x16 32x32 48x48',
        type: 'image/x-icon',
        purpose: 'any',
      },
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-192-maskable.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512-maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    screenshots: [
      {
        src: '/screenshot-desktop.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
        label: 'TechStudio Desktop View',
      },
      {
        src: '/screenshot-mobile.png',
        sizes: '390x844',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'TechStudio Mobile View',
      },
    ],
    shortcuts: [
      {
        name: 'Portfolio',
        short_name: 'Portfolio',
        description: 'View our portfolio of projects',
        url: '/portfolio',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
      {
        name: 'Blog',
        short_name: 'Blog',
        description: 'Read our latest blog posts',
        url: '/blog',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
      {
        name: 'Contact',
        short_name: 'Contact',
        description: 'Get in touch with us',
        url: '/contact',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
    ],
    related_applications: [],
    prefer_related_applications: false,
  };
}
