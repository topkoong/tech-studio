# TechStudio Project Architecture

## Overview

TechStudio is a modern, multilingual web application built with Next.js 15, featuring a comprehensive software development portfolio, blog, and service showcase. The application is designed for optimal performance, SEO, and user experience across multiple languages (English and Thai).

## Technology Stack

### Core Framework
- **Next.js 15**: React framework with App Router for modern web development
- **React 18**: Component-based UI library with concurrent features
- **TypeScript**: Type-safe JavaScript for better development experience

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Animation library for smooth user interactions
- **Custom Components**: Reusable UI components with consistent design

### Internationalization
- **next-intl**: Internationalization library for multi-language support
- **Supported Languages**: English (en) and Thai (th)
- **Locale-based Routing**: Dynamic routing based on language preference

### Build & Deployment
- **Static Site Generation (SSG)**: Pre-rendered pages for optimal performance
- **GitHub Pages**: Static hosting with custom domain support
- **pnpm**: Fast, efficient package manager

## Project Structure

```
tech-studio/
├── src/
│   ├── app/                          # Next.js App Router directory
│   │   ├── [locale]/                 # Dynamic locale routing
│   │   │   ├── about/                # About page
│   │   │   ├── blog/                 # Blog listing and individual posts
│   │   │   │   └── [slug]/          # Dynamic blog post routing
│   │   │   ├── contact/             # Contact page
│   │   │   ├── portfolio/           # Portfolio listing and individual projects
│   │   │   │   └── [slug]/          # Dynamic portfolio project routing
│   │   │   ├── services/            # Services page
│   │   │   ├── layout.tsx           # Locale-specific layout
│   │   │   └── page.tsx             # Homepage
│   │   ├── globals.css              # Global styles
│   │   ├── layout.tsx               # Root layout with metadata
│   │   ├── manifest.ts              # PWA manifest generation
│   │   ├── robots.ts                # SEO robots.txt generation
│   │   └── sitemap.ts               # Dynamic sitemap generation
│   ├── components/                   # Reusable React components
│   │   ├── ui/                      # Base UI components (buttons, cards, etc.)
│   │   ├── animated-*.tsx           # Animation components
│   │   ├── blog-*.tsx               # Blog-specific components
│   │   ├── portfolio-*.tsx          # Portfolio-specific components
│   │   ├── navigation.tsx           # Main navigation component
│   │   ├── footer.tsx               # Site footer
│   │   ├── error-boundary.tsx       # Error handling component
│   │   ├── optimized-image.tsx      # Performance-optimized image component
│   │   ├── performance-monitor.tsx  # Performance monitoring component
│   │   └── providers/               # Context providers (theme, etc.)
│   ├── content/                      # Content management
│   │   ├── blog/                    # Markdown blog posts
│   │   └── portfolio/               # Markdown portfolio projects
│   ├── lib/                         # Utility libraries
│   │   ├── blog-content.ts          # Blog content processing
│   │   ├── portfolio-content.ts     # Portfolio content processing
│   │   ├── performance.ts           # Performance optimization utilities
│   │   ├── seo.ts                   # SEO and metadata utilities
│   │   └── cn.ts                    # Class name utility
│   │   └── data/                    # Static data files
│   └── middleware.ts                # Next.js middleware for routing
├── messages/                         # Internationalization files
│   ├── en.json                      # English translations
│   └── th.json                      # Thai translations
├── public/                          # Static assets
│   ├── images/                      # Image assets
│   └── icons/                       # Favicon and app icons
├── next.config.ts                   # Next.js configuration
├── tailwind.config.js               # Tailwind CSS configuration
├── tsconfig.json                    # TypeScript configuration
└── package.json                     # Dependencies and scripts
```

## Semantic HTML5 Structure

The application follows modern web standards with semantic HTML5 elements for better accessibility, SEO, and maintainability:

### Semantic Elements Used
- **`<main>`**: Main content area of each page
- **`<header>`**: Site header containing navigation and hero sections
- **`<nav>`**: Navigation menus (main navigation, footer links)
- **`<section>`**: Thematic groupings of content
- **`<article>`**: Self-contained content pieces (blog posts, portfolio items)
- **`<aside>`**: Supplementary content (newsletter signup, related content)
- **`<footer>`**: Site footer with company information and links

### Benefits
- **Accessibility**: Screen readers can better understand page structure
- **SEO**: Search engines can better index content hierarchy
- **Maintainability**: Clear semantic meaning improves code readability
- **Future-proof**: Follows web standards for long-term compatibility

## Naming Conventions

The project follows production-grade naming conventions for consistency and maintainability:

### File Naming
- **Components**: `kebab-case.tsx` (e.g., `animated-banner.tsx`, `blog-card.tsx`)
- **Pages**: `kebab-case.tsx` (e.g., `page.tsx`, `layout.tsx`)
- **Utilities**: `kebab-case.ts` (e.g., `blog-content.ts`, `performance.ts`)

### Component Naming
- **React Components**: `PascalCase` (e.g., `AnimatedBanner`, `BlogCard`)
- **Functions**: `camelCase` (e.g., `generateMetadata`, `getBlogPosts`)
- **Constants**: `UPPER_SNAKE_CASE` (e.g., `API_ENDPOINTS`, `DEFAULT_LOCALE`)

### Import/Export Patterns
- **Default Exports**: Used for main components (e.g., `export default function Navigation()`)
- **Named Exports**: Used for utility functions and sub-components
- **Barrel Exports**: Grouped exports in index files for cleaner imports

### 1. App Router Architecture
The application uses Next.js 15's App Router with the following patterns:

- **Nested Layouts**: Root layout for global metadata, locale layout for language-specific content
- **Dynamic Routes**: `[locale]` for language routing, `[slug]` for content routing
- **Server Components**: Default rendering for optimal performance
- **Client Components**: Used only when interactivity is required (`'use client'`)

### 2. Internationalization Strategy
- **Locale-based Routing**: URLs include language prefix (`/en/`, `/th/`)
- **Middleware**: Handles locale detection and redirection
- **Content Translation**: Separate translation files for UI text
- **Content Localization**: Separate content files for blog posts and portfolio projects

### 3. Content Management
- **Markdown-based**: Blog posts and portfolio projects stored as Markdown files
- **Frontmatter**: Metadata extraction for SEO and content organization
- **Static Generation**: Content pre-rendered at build time for optimal performance

### 4. Component Architecture
- **Atomic Design**: Components organized by complexity (atoms, molecules, organisms)
- **Composition**: Complex components built from simpler ones
- **Reusability**: Shared components across different pages
- **Animation**: Framer Motion for smooth transitions and interactions

## Data Flow

### 1. Page Rendering Flow
```
Request → Middleware → Locale Detection → Layout → Page Component → Static Generation
```

### 2. Content Processing Flow
```
Markdown Files → Content Processors → Static Data → Page Components → Rendered HTML
```

### 3. Internationalization Flow
```
Request → Locale Detection → Translation Files → Component Props → Rendered Content
```

## Performance Optimizations

### 1. Static Site Generation
- **Pre-rendering**: All pages generated at build time
- **No Server Required**: Static files served from CDN
- **Fast Loading**: Immediate content delivery

### 2. Image Optimization
- **Next.js Image**: Automatic optimization and lazy loading
- **WebP/AVIF**: Modern image formats for better compression
- **Responsive Images**: Different sizes for different devices
- **OptimizedImage Component**: Custom component with loading states and error handling
- **LazyImage Component**: Intersection Observer-based lazy loading
- **ResponsiveImage Component**: Screen size-aware image rendering

### 3. Code Splitting & Lazy Loading
- **Route-based**: Each page loads only necessary code
- **Component-based**: Large components loaded on demand
- **Bundle Optimization**: Minimal JavaScript for initial load
- **createLazyComponent**: Utility for lazy loading React components
- **createDynamicComponent**: Next.js dynamic imports with loading states
- **createMemoizedComponent**: React.memo wrapper for performance

### 4. Performance Monitoring
- **Core Web Vitals**: LCP, FID, CLS, FCP, TTFB tracking
- **PerformanceMonitor**: Real-time performance metrics display
- **usePerformanceOptimization**: Hook for performance data
- **Client-side Only**: Avoids SSR issues with browser APIs

### 5. Error Handling
- **ErrorBoundary**: Catches JavaScript errors gracefully
- **DefaultErrorFallback**: User-friendly error display
- **useErrorBoundary**: Hook for functional components
- **Development Mode**: Detailed error information

### 6. Caching Strategy
- **Static Assets**: Long-term caching (1 year)
- **HTML Pages**: Medium-term caching (1 hour)
- **API Responses**: Short-term caching (5 minutes)
- **Browser Caching**: Optimized cache headers
- **CDN Caching**: Global content delivery

## SEO Architecture

### 1. Metadata Management
- **Root Layout**: Global SEO metadata
- **Page-specific**: Individual page metadata
- **Dynamic Generation**: Content-based metadata

### 2. Structured Data
- **Schema.org**: Rich snippets for search engines
- **Organization**: Company information
- **Articles**: Blog post metadata
- **Services**: Service descriptions

### 3. URL Structure
- **Clean URLs**: SEO-friendly paths
- **Canonical URLs**: Prevent duplicate content
- **Hreflang**: Language-specific URLs

## Security Considerations

### 1. Content Security
- **Static Generation**: No server-side vulnerabilities
- **Input Validation**: Content sanitization
- **XSS Prevention**: React's built-in protection

### 2. Performance Security
- **Resource Limits**: Bundle size monitoring
- **Dependency Management**: Regular updates
- **Build Process**: Secure build pipeline

## Deployment Architecture

### 1. Build Process
```
Source Code → TypeScript Compilation → Static Generation → Asset Optimization → Deployment
```

### 2. Hosting Strategy
- **GitHub Pages**: Static hosting
- **Custom Domain**: Professional branding
- **CDN**: Global content delivery

### 3. CI/CD Pipeline
- **Automated Builds**: On every commit
- **Quality Checks**: TypeScript and linting
- **Performance Monitoring**: Build size tracking

## Development Workflow

### 1. Local Development
- **Hot Reload**: Instant feedback during development
- **Type Checking**: Real-time TypeScript validation
- **Linting**: Code quality enforcement

### 2. Content Management
- **Markdown Editing**: Simple content creation
- **Preview Mode**: Content validation before publishing
- **Version Control**: Content tracked in Git

### 3. Testing Strategy
- **Build Verification**: Every change tested with build
- **Performance Testing**: Bundle size monitoring
- **Cross-browser Testing**: Compatibility verification

## Future Enhancements

### 1. Performance Improvements
- **Service Worker**: Offline functionality
- **Progressive Web App**: App-like experience
- **Advanced Caching**: Intelligent content caching

### 2. Feature Additions
- **Search Functionality**: Content search
- **Comment System**: User engagement
- **Analytics Integration**: Usage tracking

### 3. Scalability Considerations
- **Content Management System**: Dynamic content editing
- **API Integration**: External data sources
- **Microservices**: Modular architecture

## Maintenance Guidelines

### 1. Regular Updates
- **Dependencies**: Keep packages current
- **Content**: Regular blog posts and portfolio updates
- **Performance**: Monitor and optimize

### 2. Monitoring
- **Build Success**: Automated verification
- **Performance Metrics**: Core Web Vitals tracking
- **Error Tracking**: User experience monitoring

### 3. Documentation
- **Code Comments**: Comprehensive inline documentation
- **Architecture Docs**: System design documentation
- **Deployment Guides**: Setup and maintenance instructions

This architecture provides a solid foundation for a modern, performant, and maintainable web application that can scale with business needs while maintaining excellent user experience and developer productivity.