# Contributing to TechStudio

Thank you for your interest in contributing to TechStudio! This document provides guidelines and standards for contributing to our project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Standards](#code-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Testing](#testing)
- [Documentation](#documentation)
- [Internationalization](#internationalization)

## 🤝 Code of Conduct

We are committed to providing a welcoming and inclusive environment for all contributors. Please:

- Be respectful and constructive in all interactions
- Focus on what's best for the community
- Show empathy towards other community members
- Accept constructive criticism gracefully
- Help create a harassment-free experience for everyone

## 🚀 Getting Started

### Prerequisites

- Node.js 22.x or higher
- pnpm (recommended) or npm
- Git
- Basic knowledge of React, TypeScript, and Next.js

### Setup

1. **Fork the repository**
   ```bash
   # Click "Fork" button on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/tech-studio.git
   cd tech-studio
   ```

2. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/topkoong/tech-studio.git
   ```

3. **Install dependencies**
   ```bash
   pnpm install
   ```

4. **Start development server**
   ```bash
   pnpm dev
   ```

## 🔄 Development Workflow

### Branch Strategy

- **main**: Production-ready code
- **feature/**: New features and enhancements
- **bugfix/**: Bug fixes
- **docs/**: Documentation updates
- **refactor/**: Code refactoring

### Workflow Steps

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write code following our standards
   - Add tests if applicable
   - Update documentation

3. **Test your changes**
   ```bash
   pnpm build    # Ensure build passes
   pnpm lint     # Check code style
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

5. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   # Create Pull Request on GitHub
   ```

## 📝 Code Standards

### Semantic HTML5 Structure

This project follows strict semantic HTML5 standards to ensure maximum accessibility, SEO optimization, and code maintainability. Every component must use appropriate semantic elements instead of generic `<div>` containers.

#### **Core Semantic Elements**

**Page Structure Elements**
- **`<main>`**: Primary content area of each page
  - Only one `<main>` element per page
  - Contains primary content, excludes navigation and footer
  - Must be a direct child of `<body>` or `<html>`
  - Example: `<main className="min-h-screen bg-background">...</main>`

- **`<header>`**: Site headers and hero sections
  - Contains site branding, navigation, or introductory content
  - Can be used multiple times per page for different sections
  - Should include headings when introducing content
  - Example: `<header className="hero-section">...</header>`

- **`<footer>`**: Site footers with supplementary information
  - Contains company info, links, copyright
  - Should be at the bottom of page structure
  - Example: `<footer className="site-footer">...</footer>`

**Content Structure Elements**
- **`<nav>`**: Navigation menus and link collections
  - Groups related navigation elements
  - Should contain lists of links when appropriate
  - Can be used for action buttons in content
  - Example: `<nav className="main-navigation">...</nav>`

- **`<section>`**: Thematic groupings of content
  - Must have a clear thematic purpose
  - Should contain headings when introducing content
  - Groups related content blocks
  - Example: `<section className="portfolio-section">...</section>`

- **`<article>`**: Self-contained content pieces
  - Must be independently distributable
  - Should contain complete content with title and body
  - Used for blog posts, portfolio items, standalone content
  - Example: `<article className="blog-post">...</article>`

- **`<aside>`**: Supplementary content
  - Content tangentially related to main content
  - Should provide additional context
  - Used for related posts, newsletter signup, sidebars
  - Example: `<aside className="related-content">...</aside>`

#### **Implementation Examples**

**✅ Correct Semantic Structure:**
```tsx
<main className="page-container">
  <header className="page-header">
    <h1>Page Title</h1>
    <nav className="breadcrumb">
      <Link href="/portfolio">Portfolio</Link> / Project Name
    </nav>
  </header>
  
  <article className="project-details">
    <header className="project-intro">
      <h2>Project Overview</h2>
      <nav className="project-actions">
        <a href="live-demo">Live Demo</a>
        <a href="github">View Code</a>
      </nav>
    </header>
    
    <section className="technologies">
      <h3>Technologies Used</h3>
      {/* Technology list */}
    </section>
    
    <section className="features">
      <h3>Key Features</h3>
      {/* Feature list */}
    </section>
  </article>
  
  <aside className="related-projects">
    <h2>Related Projects</h2>
    {/* Related project cards */}
  </aside>
</main>
```

**❌ Incorrect Usage (Avoid):**
```tsx
<div className="page-container">
  <div className="page-header">
    <h1>Page Title</h1>
    <div className="breadcrumb">
      <Link href="/portfolio">Portfolio</Link> / Project Name
    </div>
  </div>
  
  <div className="project-details">
    <div className="project-intro">
      <h2>Project Overview</h2>
      <div className="project-actions">
        <a href="live-demo">Live Demo</a>
        <a href="github">View Code</a>
      </div>
    </div>
  </div>
</div>
```

#### **Accessibility Integration**

**ARIA Landmarks with Semantic Elements:**
```tsx
<main role="main" aria-label="Main content">
  <nav role="navigation" aria-label="Main navigation">
    {/* Navigation content */}
  </nav>
  
  <article role="article" aria-labelledby="article-title">
    <h1 id="article-title">Article Title</h1>
    {/* Article content */}
  </article>
  
  <aside role="complementary" aria-label="Related content">
    {/* Supplementary content */}
  </aside>
</main>
```

**Screen Reader Benefits:**
- **Landmark Navigation**: Screen readers can jump between semantic landmarks
- **Content Hierarchy**: Clear heading structure with proper `<h1>` to `<h6>` nesting
- **Content Identification**: Screen readers understand content purpose through semantics

#### **SEO Optimization**

**Structured Data Integration:**
```tsx
<article itemScope itemType="https://schema.org/Article">
  <header>
    <h1 itemProp="headline">Article Title</h1>
    <p itemProp="description">Article description</p>
  </header>
  <section itemProp="articleBody">
    {/* Article content */}
  </section>
</article>
```

**Search Engine Benefits:**
- **Content Hierarchy**: Search engines understand page structure
- **Rich Snippets**: Semantic markup enables enhanced search results
- **Content Classification**: Search engines categorize content by semantic meaning

#### **Implementation Checklist**

**Before Creating Components:**
- [ ] Identify the primary purpose of the content
- [ ] Determine if content is self-contained (use `<article>`)
- [ ] Check if content is supplementary (use `<aside>`)
- [ ] Verify if content is thematic grouping (use `<section>`)
- [ ] Ensure proper heading hierarchy (`<h1>` to `<h6>`)

**During Development:**
- [ ] Use semantic elements instead of generic `<div>` containers
- [ ] Include appropriate headings for each semantic section
- [ ] Maintain proper nesting of semantic elements
- [ ] Add ARIA attributes when needed for enhanced accessibility
- [ ] Test with screen readers and accessibility tools

**Code Review Checklist:**
- [ ] All content wrapped in appropriate semantic elements
- [ ] Proper heading hierarchy maintained
- [ ] No unnecessary `<div>` containers where semantic elements would be better
- [ ] ARIA attributes added where appropriate
- [ ] Semantic structure follows HTML5 specification

#### **Benefits of Semantic HTML5**
- **Accessibility**: Screen readers can better understand page structure
- **SEO**: Search engines can better index content hierarchy
- **Maintainability**: Clear semantic meaning improves code readability
- **Future-proof**: Follows web standards for long-term compatibility
- **Performance**: Better CSS targeting and reduced specificity conflicts
- **Testing**: Semantic elements provide better testing hooks and selectors

### Naming Conventions
Follow these production-grade naming conventions:

#### File Naming
- **Components**: `kebab-case.tsx` (e.g., `animated-banner.tsx`, `blog-card.tsx`)
- **Pages**: `kebab-case.tsx` (e.g., `page.tsx`, `layout.tsx`)
- **Utilities**: `kebab-case.ts` (e.g., `blog-content.ts`, `performance.ts`)

#### Component Naming
- **React Components**: `PascalCase` (e.g., `AnimatedBanner`, `BlogCard`)
- **Functions**: `camelCase` (e.g., `generateMetadata`, `getBlogPosts`)
- **Constants**: `UPPER_SNAKE_CASE` (e.g., `API_ENDPOINTS`, `DEFAULT_LOCALE`)

#### Import/Export Patterns
- **Default Exports**: Used for main components (e.g., `export default function Navigation()`)
- **Named Exports**: Used for utility functions and sub-components
- **Barrel Exports**: Grouped exports in index files for cleaner imports

### TypeScript

- **Use strict typing**: Avoid `any` types
- **Define interfaces**: Create proper type definitions
- **Use enums**: For constants and fixed values
- **JSDoc comments**: Document complex functions and components

```typescript
/**
 * Represents a blog post with metadata and content
 */
interface BlogPost {
  /** Unique identifier for the post */
  id: string;
  /** Post title */
  title: string;
  /** Post excerpt for previews */
  excerpt: string;
  /** Publication date */
  date: string;
  /** Estimated reading time */
  readTime: string;
  /** Post category */
  category: string;
  /** Post tags */
  tags: string[];
  /** Author name */
  author: string;
  /** Whether post is featured */
  featured: boolean;
}

/**
 * Formats a date string for display
 * @param dateString - ISO date string
 * @param locale - Locale for formatting
 * @returns Formatted date string
 */
function formatDate(dateString: string, locale: string): string {
  return new Intl.DateTimeFormat(locale).format(new Date(dateString));
}
```

### React Components

- **Functional components**: Use function declarations
- **Props interface**: Define clear prop types
- **Default props**: Use default parameters
- **Error boundaries**: Handle errors gracefully

```typescript
/**
 * Props for the BlogCard component
 */
interface BlogCardProps {
  /** Blog post data */
  post: BlogPost;
  /** Whether to show as featured */
  featured?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Blog post card component with hover effects
 * @param props - Component props
 * @returns JSX element
 */
export default function BlogCard({ 
  post, 
  featured = false, 
  className = '' 
}: BlogCardProps) {
  return (
    <Card className={`hover:shadow-xl transition-all duration-300 ${className}`}>
      {/* Component content */}
    </Card>
  );
}
```

### Styling

- **Tailwind CSS**: Use utility classes
- **Responsive design**: Mobile-first approach
- **Consistent spacing**: Use Tailwind spacing scale
- **Dark mode**: Support both themes

```typescript
// Good: Responsive and theme-aware
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
      Title
    </h3>
  </div>
</div>

// Avoid: Custom CSS when Tailwind can handle it
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
  <div style={{ backgroundColor: '#ffffff', padding: '24px' }}>
    <h3 style={{ fontSize: '18px', fontWeight: '600' }}>Title</h3>
  </div>
</div>
```

### File Organization

- **Component files**: PascalCase (e.g., `BlogCard.tsx`)
- **Utility files**: camelCase (e.g., `blogContent.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.ts`)
- **One component per file**: Keep components focused

### Import Order

```typescript
// 1. React and Next.js imports
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// 2. Third-party libraries
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

// 3. Internal components
import { Card, CardContent } from '@/components/ui/card';
import BlogCard from '@/components/blog-card';

// 4. Utilities and types
import { formatDate } from '@/lib/utils';
import type { BlogPost } from '@/types/blog';

// 5. Styles (if needed)
import './styles.css';
```

## 📝 Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Commit Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Commit Format

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Examples

```bash
# Feature
git commit -m "feat(blog): add search functionality to blog posts"

# Bug fix
git commit -m "fix(navigation): resolve mobile menu toggle issue"

# Documentation
git commit -m "docs(readme): update installation instructions"

# Breaking change
git commit -m "feat(api): change blog post structure

BREAKING CHANGE: blog post metadata now requires 'slug' field"
```

## 🔄 Pull Request Process

### Before Submitting

1. **Test your changes**
   ```bash
   pnpm build
   pnpm lint
   ```

2. **Update documentation** if needed

3. **Add tests** for new functionality

4. **Ensure translations** are updated for both languages

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Build passes
- [ ] Lint passes
- [ ] Manual testing completed

## Screenshots (if applicable)
Add screenshots to help explain your changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Translations updated (if applicable)
```

### Review Process

1. **Automated checks** must pass
2. **Code review** by maintainers
3. **Testing** on staging environment
4. **Approval** and merge

## 🧪 Testing

### Manual Testing

- **Cross-browser testing**: Chrome, Firefox, Safari, Edge
- **Responsive testing**: Mobile, tablet, desktop
- **Accessibility testing**: Keyboard navigation, screen readers
- **Performance testing**: Lighthouse scores

### Testing Checklist

- [ ] All pages load correctly
- [ ] Navigation works on all devices
- [ ] Forms submit properly
- [ ] Animations work smoothly
- [ ] Dark/light mode toggle works
- [ ] Language switching works
- [ ] Images load correctly
- [ ] No console errors

## 📚 Documentation

### Code Documentation

- **JSDoc comments**: For all public functions and components
- **Inline comments**: For complex logic
- **README updates**: For new features
- **Type definitions**: Clear interfaces and types

### Example Documentation

```typescript
/**
 * Blog content utility functions
 * Handles loading and processing of blog posts from markdown files
 */
export class BlogContentManager {
  /**
   * Loads all blog posts from the content directory
   * @param locale - Language locale (en/th)
   * @returns Array of blog posts with metadata
   */
  static async loadAllPosts(locale: string): Promise<BlogPost[]> {
    // Implementation details...
  }

  /**
   * Loads a specific blog post by slug
   * @param slug - Post slug identifier
   * @param locale - Language locale
   * @returns Blog post or null if not found
   */
  static async loadPost(slug: string, locale: string): Promise<BlogPost | null> {
    // Implementation details...
  }
}
```

## 🌍 Internationalization

### Adding New Content

1. **English content** goes in `messages/en.json`
2. **Thai content** goes in `messages/th.json`
3. **Use translation keys** in components

```typescript
// In component
const t = useTranslations('home.hero');
return <h1>{t('title')}</h1>;

// In en.json
{
  "home": {
    "hero": {
      "title": "Transform Your Business with Expert Web Development"
    }
  }
}

// In th.json
{
  "home": {
    "hero": {
      "title": "เปลี่ยนธุรกิจของคุณด้วยการพัฒนาเว็บไซต์มืออาชีพ"
    }
  }
}
```

### Translation Guidelines

- **Consistent terminology**: Use the same terms across all content
- **Cultural adaptation**: Adapt content for Thai audience
- **Professional tone**: Maintain business-appropriate language
- **Length consideration**: Thai text may be longer than English

## 🐛 Bug Reports

### Before Reporting

1. **Check existing issues** for duplicates
2. **Test on latest version**
3. **Clear browser cache**
4. **Check console for errors**

### Bug Report Template

```markdown
## Bug Description
Clear description of the bug

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. See error

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- OS: [e.g., Windows 10]
- Browser: [e.g., Chrome 120]
- Device: [e.g., Desktop]

## Screenshots
If applicable, add screenshots

## Additional Context
Any other relevant information
```

## 💡 Feature Requests

### Before Requesting

1. **Check existing issues** for similar requests
2. **Consider the project scope**
3. **Think about implementation complexity**

### Feature Request Template

```markdown
## Feature Description
Clear description of the feature

## Use Case
Why is this feature needed?

## Proposed Solution
How should this feature work?

## Alternatives Considered
Other ways to solve this problem

## Additional Context
Any other relevant information
```

## 📞 Getting Help

- **GitHub Issues**: For bugs and feature requests
- **Discussions**: For questions and general discussion
- **Email**: theeruttop@gmail.com for urgent matters

## 🎉 Recognition

Contributors will be recognized in:
- **README.md**: Contributors section
- **Release notes**: For significant contributions
- **GitHub**: Contributor statistics

Thank you for contributing to TechStudio! 🚀
