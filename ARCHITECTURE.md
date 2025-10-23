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

The application follows modern web standards with comprehensive semantic HTML5 elements for better accessibility, SEO, and maintainability. Every component has been carefully structured to use appropriate semantic elements instead of generic `<div>` containers.

### Semantic Elements Implementation

#### **Page-Level Structure**
- **`<main>`**: Primary content area of each page
  - Used in: All page components (`page.tsx` files)
  - Contains: Main page content, excludes navigation and footer
  - Purpose: Identifies the main content for screen readers and search engines

- **`<header>`**: Site header and hero sections
  - Used in: Home page hero section, navigation component
  - Contains: Site branding, navigation, hero content
  - Purpose: Defines introductory content and site navigation

- **`<footer>`**: Site footer with company information
  - Used in: Footer component across all pages
  - Contains: Company info, links, social media, copyright
  - Purpose: Provides supplementary information about the site

#### **Content Structure**
- **`<nav>`**: Navigation menus and link collections
  - Used in: Main navigation, footer links, portfolio action buttons
  - Contains: Navigation links, menu items, action buttons
  - Purpose: Groups related navigation elements

- **`<section>`**: Thematic groupings of content
  - Used in: Portfolio sections, blog sections, service sections
  - Contains: Related content blocks with headings
  - Purpose: Groups content by theme or functionality

- **`<article>`**: Self-contained content pieces
  - Used in: Blog posts, portfolio project details, individual content items
  - Contains: Complete, standalone content with title and body
  - Purpose: Represents independent, distributable content

- **`<aside>`**: Supplementary content
  - Used in: Newsletter signup, related posts, sidebar content
  - Contains: Content tangentially related to main content
  - Purpose: Provides additional context or related information

- **`<header>` (within content)**: Section headers and introductions
  - Used in: Section titles, content introductions
  - Contains: Headings, descriptions, introductory content
  - Purpose: Introduces and describes content sections

### Implementation Examples

#### **Portfolio Project Page Structure**
```tsx
<main> {/* Main content area */}
  <article> {/* Individual project content */}
    <header> {/* Project introduction */}
      <h1>Project Title</h1>
      <p>Project Description</p>
      <nav> {/* Action buttons */}
        <a href="live-demo">Live Demo</a>
        <a href="github">View Code</a>
      </nav>
    </header>
    
    <section> {/* Technologies section */}
      <h2>Technologies</h2>
      {/* Technology tags */}
    </section>
    
    <section> {/* Features section */}
      <h2>Features</h2>
      {/* Feature list */}
    </section>
  </article>
  
  <aside> {/* Related projects */}
    <h2>Related Projects</h2>
    {/* Related project cards */}
  </aside>
</main>
```

#### **Blog Post Page Structure**
```tsx
<main> {/* Main content area */}
  <article> {/* Blog post content */}
    <header> {/* Post introduction */}
      <h1>Post Title</h1>
      <p>Post excerpt</p>
    </header>
    
    <section> {/* Post content */}
      {/* Blog post body */}
    </section>
  </article>
  
  <aside> {/* Related posts */}
    <h2>Related Articles</h2>
    {/* Related post cards */}
  </aside>
</main>
```

### Accessibility Benefits

#### **Screen Reader Support**
- **Landmark Navigation**: Screen readers can jump between `<main>`, `<nav>`, `<header>`, `<footer>`
- **Content Hierarchy**: Clear heading structure with proper `<h1>`, `<h2>`, `<h3>` nesting
- **Content Identification**: Screen readers understand content purpose through semantic elements

#### **Keyboard Navigation**
- **Focus Management**: Semantic elements provide natural tab order
- **Skip Links**: Users can skip to main content using landmark navigation
- **ARIA Integration**: Semantic elements work seamlessly with ARIA attributes

### SEO Benefits

#### **Search Engine Understanding**
- **Content Hierarchy**: Search engines understand page structure and content importance
- **Rich Snippets**: Semantic markup enables enhanced search result displays
- **Content Classification**: Search engines can categorize content by semantic meaning

#### **Structured Data Integration**
- **Schema.org Compatibility**: Semantic elements align with structured data standards
- **Article Markup**: Blog posts use proper article markup for search engines
- **Organization Markup**: Company information properly structured for local SEO

### Code Quality Benefits

#### **Maintainability**
- **Self-Documenting**: Semantic elements make code purpose clear
- **Consistent Structure**: Standardized semantic patterns across components
- **Future-Proof**: Follows web standards for long-term compatibility

#### **Development Efficiency**
- **CSS Targeting**: Semantic elements provide better CSS selector options
- **Component Reusability**: Semantic structure makes components more reusable
- **Testing**: Semantic elements provide better testing hooks and selectors

### Standards Compliance

#### **WCAG 2.1 Guidelines**
- **Level A**: Basic accessibility requirements met through semantic structure
- **Level AA**: Enhanced accessibility through proper landmark usage
- **Level AAA**: Advanced accessibility through comprehensive semantic markup

#### **HTML5 Specification**
- **Valid Markup**: All semantic elements used according to HTML5 specification
- **Progressive Enhancement**: Semantic structure works without JavaScript
- **Cross-Browser Compatibility**: Semantic elements supported across all modern browsers

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