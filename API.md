# TechStudio API Documentation

This document provides comprehensive API documentation for all components, utilities, and functions in the TechStudio project.

## 📋 Table of Contents

- [Content Management](#content-management)
- [Components](#components)
- [Utilities](#utilities)
- [Types & Interfaces](#types--interfaces)
- [Hooks](#hooks)
- [Configuration](#configuration)

## 📝 Content Management

### Blog Content API

#### `getAllBlogSlugs()`
Retrieves all blog post slugs from both English and Thai directories.

**Returns:** `string[]` - Array of blog post slugs with language prefixes

**Example:**
```typescript
const slugs = getAllBlogSlugs();
// Returns: ['en/getting-started', 'th/getting-started', 'en/advanced-guide']
```

#### `getAllBlogPosts()`
Loads all blog posts from markdown files, sorted by date (newest first).

**Returns:** `BlogPost[]` - Array of blog posts sorted by publication date

**Example:**
```typescript
const posts = getAllBlogPosts();
console.log(posts[0].metadata.title); // Most recent post title
```

#### `getBlogPost(slug: string)`
Loads a specific blog post by its slug.

**Parameters:**
- `slug` - Blog post slug including language prefix (e.g., 'en/post-slug')

**Returns:** `BlogPost | null` - Blog post object or null if not found

**Example:**
```typescript
const post = getBlogPost('en/getting-started');
if (post) {
  console.log(post.metadata.title);
  console.log(post.content);
}
```

#### `getBlogPostsByCategory(category: string)`
Filters blog posts by category with case-insensitive matching.

**Parameters:**
- `category` - Category name to filter by

**Returns:** `BlogPost[]` - Array of blog posts in the specified category

**Example:**
```typescript
const techPosts = getBlogPostsByCategory('Technology');
console.log(techPosts.length); // Number of tech posts
```

#### `getFeaturedBlogPosts()`
Retrieves all featured blog posts.

**Returns:** `BlogPost[]` - Array of blog posts marked as featured

**Example:**
```typescript
const featured = getFeaturedBlogPosts();
featured.forEach(post => console.log(post.metadata.title));
```

#### `getRelatedPosts(currentSlug: string, limit?: number)`
Finds related blog posts based on category and tags.

**Parameters:**
- `currentSlug` - Slug of the current post to find related posts for
- `limit` - Maximum number of related posts to return (default: 3)

**Returns:** `BlogPost[]` - Array of related blog posts

**Example:**
```typescript
const related = getRelatedPosts('en/getting-started', 5);
related.forEach(post => console.log(post.metadata.title));
```

### Portfolio Content API

#### `getAllPortfolioSlugs()`
Retrieves all portfolio project slugs from both English and Thai directories.

**Returns:** `string[]` - Array of portfolio project slugs with language prefixes

**Example:**
```typescript
const slugs = getAllPortfolioSlugs();
// Returns: ['en/ecommerce-app', 'th/ecommerce-app', 'en/saas-platform']
```

#### `getAllPortfolioProjects()`
Loads all portfolio projects from markdown files, sorted by date (newest first).

**Returns:** `PortfolioProject[]` - Array of portfolio projects sorted by completion date

**Example:**
```typescript
const projects = getAllPortfolioProjects();
console.log(projects[0].metadata.title); // Most recent project title
```

#### `getPortfolioProject(slug: string)`
Loads a specific portfolio project by its slug.

**Parameters:**
- `slug` - Portfolio project slug including language prefix (e.g., 'en/project-name')

**Returns:** `PortfolioProject | null` - Portfolio project object or null if not found

**Example:**
```typescript
const project = getPortfolioProject('en/ecommerce-app');
if (project) {
  console.log(project.metadata.title);
  console.log(project.metadata.technologies);
}
```

#### `getPortfolioProjectsByCategory(category: string)`
Filters portfolio projects by category with case-insensitive matching.

**Parameters:**
- `category` - Category name to filter by

**Returns:** `PortfolioProject[]` - Array of portfolio projects in the specified category

**Example:**
```typescript
const webProjects = getPortfolioProjectsByCategory('Web Development');
console.log(webProjects.length); // Number of web development projects
```

#### `getFeaturedPortfolioProjects()`
Retrieves all featured portfolio projects.

**Returns:** `PortfolioProject[]` - Array of portfolio projects marked as featured

**Example:**
```typescript
const featured = getFeaturedPortfolioProjects();
featured.forEach(project => console.log(project.metadata.title));
```

#### `getRelatedPortfolioProjects(currentSlug: string, limit?: number)`
Finds related portfolio projects based on category and technologies.

**Parameters:**
- `currentSlug` - Slug of the current project to find related projects for
- `limit` - Maximum number of related projects to return (default: 3)

**Returns:** `PortfolioProject[]` - Array of related portfolio projects

**Example:**
```typescript
const related = getRelatedPortfolioProjects('en/ecommerce-app', 5);
related.forEach(project => console.log(project.metadata.title));
```

## 🧩 Components

### Navigation

#### `Navigation()`
Main navigation component with responsive design.

**Features:**
- Mobile hamburger menu with smooth animations
- Theme toggle (light/dark mode)
- Language switcher (English/Thai)
- Smooth scroll animations
- Responsive design for all screen sizes

**Returns:** `JSX.Element` - Navigation bar component

**Example:**
```tsx
import Navigation from '@/components/navigation';

export default function Layout() {
  return (
    <div>
      <Navigation />
      {/* Rest of layout */}
    </div>
  );
}
```

### Blog Components

#### `BlogCard({ post }: BlogCardProps)`
Blog post card component with glassmorphism design.

**Props:**
- `post: BlogPost` - Blog post data containing metadata and content

**Features:**
- Responsive image display with fallback
- Glassmorphism styling with backdrop blur
- Hover animations and effects
- Category badges
- Date and reading time display
- Locale-aware routing

**Returns:** `JSX.Element` - Blog post card component

**Example:**
```tsx
import BlogCard from '@/components/blog-card';
import { getBlogPost } from '@/lib/blog-content';

export default function BlogPage() {
  const post = getBlogPost('en/getting-started');
  
  return (
    <div>
      {post && <BlogCard post={post} />}
    </div>
  );
}
```

#### `BlogGrid({ locale }: BlogGridProps)`
Grid component for displaying multiple blog cards.

**Props:**
- `locale: string` - Current locale for filtering posts

**Features:**
- Responsive grid layout
- Locale-specific post filtering
- Smooth animations
- Hover effects

**Returns:** `JSX.Element` - Grid of blog cards

### Portfolio Components

#### `PortfolioCard({ project }: PortfolioCardProps)`
Portfolio project card component.

**Props:**
- `project: PortfolioProject` - Portfolio project data
- `featured?: boolean` - Whether to display as featured (optional)

**Features:**
- Project image display
- Technology badges
- Category display
- Hover animations
- Click-to-view functionality

**Returns:** `JSX.Element` - Portfolio project card

#### `PortfolioGrid({ locale }: PortfolioGridProps)`
Grid component for displaying multiple portfolio cards.

**Props:**
- `locale: string` - Current locale for filtering projects

**Features:**
- Responsive grid layout
- Locale-specific project filtering
- Featured project highlighting
- Smooth animations

**Returns:** `JSX.Element` - Grid of portfolio cards

### Animation Components

#### `LettersPullUp({ text, className }: LettersPullUpProps)`
Text animation component that pulls up letters individually.

**Props:**
- `text: string` - Text to animate
- `className?: string` - Additional CSS classes

**Features:**
- Letter-by-letter animation
- Staggered timing
- Smooth transitions
- Customizable styling

**Returns:** `JSX.Element` - Animated text component

#### `FadeUp({ children, className }: FadeUpProps)`
Fade up animation component for any children.

**Props:**
- `children: React.ReactNode` - Content to animate
- `className?: string` - Additional CSS classes

**Features:**
- Fade and slide up animation
- Smooth transitions
- Customizable delay and duration

**Returns:** `JSX.Element` - Animated container

#### `StaggeredFade({ children, className }: StaggeredFadeProps)`
Staggered fade animation for multiple children.

**Props:**
- `children: React.ReactNode` - Content to animate
- `className?: string` - Additional CSS classes

**Features:**
- Staggered animation timing
- Smooth fade transitions
- Customizable stagger delay

**Returns:** `JSX.Element` - Animated container

### Mascot Components

#### `FloatingMascots({ count, className }: FloatingMascotsProps)`
Floating mascot animation component.

**Props:**
- `count: number` - Number of mascots to display
- `className?: string` - Additional CSS classes

**Features:**
- Floating animation
- Random positioning
- Smooth movements
- Customizable count

**Returns:** `JSX.Element` - Floating mascot elements

#### `FloatingParticlesBanner({ className }: FloatingParticlesBannerProps)`
Background particles animation component.

**Props:**
- `className?: string` - Additional CSS classes

**Features:**
- Small floating particles
- Smooth animations
- Background effect
- Performance optimized

**Returns:** `JSX.Element` - Particle animation container

## 🛠 Utilities

### CSS Utilities

#### `cn(...inputs: ClassValue[])`
Utility function for combining and merging CSS classes.

**Parameters:**
- `inputs` - Variable number of class values (strings, objects, arrays)

**Returns:** `string` - Merged and deduplicated class string

**Features:**
- Uses clsx for conditional classes
- Uses tailwind-merge for Tailwind CSS class deduplication
- Handles complex class combinations

**Example:**
```typescript
import { cn } from '@/lib/cn';

// Basic usage
cn('px-4', 'py-2', 'bg-blue-500') // 'px-4 py-2 bg-blue-500'

// Conditional classes
cn('base-class', { 'active-class': isActive, 'disabled-class': isDisabled })

// Tailwind class deduplication
cn('px-4 px-6') // 'px-6' (px-6 overrides px-4)

// Complex example
cn(
  'flex items-center justify-center',
  'bg-white dark:bg-gray-800',
  'rounded-lg shadow-md',
  { 'opacity-50 cursor-not-allowed': disabled },
  className // Additional classes from props
)
```

### Content Utilities

#### `formatDate(dateString: string, locale: string)`
Formats a date string for display in the specified locale.

**Parameters:**
- `dateString` - ISO date string
- `locale` - Locale for formatting (e.g., 'en', 'th')

**Returns:** `string` - Formatted date string

**Example:**
```typescript
const formattedDate = formatDate('2024-01-15', 'en');
// Returns: "January 15, 2024"
```

#### `generateSlug(title: string)`
Generates a URL-friendly slug from a title.

**Parameters:**
- `title` - Title to convert to slug

**Returns:** `string` - URL-friendly slug

**Example:**
```typescript
const slug = generateSlug('Getting Started with Next.js');
// Returns: "getting-started-with-nextjs"
```

## 📊 Types & Interfaces

### Blog Types

```typescript
interface BlogMetadata {
  title: string;           // Post title
  date: string;            // Publication date in ISO format
  excerpt: string;         // Short description for previews
  slug: string;            // Unique identifier including language prefix
  category: string;        // Post category for organization
  tags: string[];          // Array of tags for filtering
  author: string;          // Author name
  readTime: string;        // Estimated reading time
  featured?: boolean;      // Whether post should be featured
  image?: string;          // Optional image URL for post thumbnail
}

interface BlogPost {
  metadata: BlogMetadata;  // Post metadata from frontmatter
  content: string;         // Raw markdown content
}
```

### Portfolio Types

```typescript
interface PortfolioMetadata {
  id: string;              // Unique project identifier
  title: string;           // Project title
  description: string;     // Short description for previews
  longDescription: string; // Detailed project description
  image: string;           // Project image/thumbnail URL
  technologies: string[];  // Array of technologies used
  category: string;        // Project category
  client: string;          // Client name or company
  duration: string;        // Project duration
  features: string[];      // Key features implemented
  challenges: string[];    // Challenges faced during development
  solutions: string[];     // Solutions implemented
  results: string[];       // Results and outcomes achieved
  liveUrl?: string;        // Live project URL (optional)
  githubUrl?: string;      // GitHub repository URL (optional)
  featured: boolean;       // Whether project should be featured
  date: string;            // Project completion date
  locale: string;          // Language locale (en/th)
  slug: string;            // URL slug including language prefix
}

interface PortfolioProject {
  metadata: PortfolioMetadata; // Project metadata from frontmatter
  content: string;              // Raw markdown content
}
```

### Component Props Types

```typescript
interface BlogCardProps {
  post: BlogPost;          // Blog post data containing metadata and content
}

interface PortfolioCardProps {
  project: PortfolioProject; // Portfolio project data
  featured?: boolean;         // Whether to display as featured
}

interface BlogGridProps {
  locale: string;           // Current locale for filtering posts
}

interface PortfolioGridProps {
  locale: string;           // Current locale for filtering projects
}
```

### Animation Types

```typescript
interface LettersPullUpProps {
  text: string;             // Text to animate
  className?: string;       // Additional CSS classes
}

interface FadeUpProps {
  children: React.ReactNode; // Content to animate
  className?: string;       // Additional CSS classes
}

interface StaggeredFadeProps {
  children: React.ReactNode; // Content to animate
  className?: string;        // Additional CSS classes
}

interface FloatingMascotsProps {
  count: number;            // Number of mascots to display
  className?: string;       // Additional CSS classes
}

interface FloatingParticlesBannerProps {
  className?: string;       // Additional CSS classes
}
```

## 🎣 Hooks

### Custom Hooks

#### `useTheme()`
Hook for managing theme state (light/dark mode).

**Returns:** `{ theme: string, setTheme: (theme: string) => void, toggleTheme: () => void }`

**Example:**
```typescript
import { useTheme } from 'next-themes';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  );
}
```

#### `useTranslations(namespace?: string)`
Hook for accessing translations.

**Parameters:**
- `namespace` - Translation namespace (optional)

**Returns:** `(key: string) => string` - Translation function

**Example:**
```typescript
import { useTranslations } from 'next-intl';

function WelcomeMessage() {
  const t = useTranslations('home');
  
  return <h1>{t('welcome')}</h1>;
}
```

#### `useLocale()`
Hook for getting the current locale.

**Returns:** `string` - Current locale (e.g., 'en', 'th')

**Example:**
```typescript
import { useLocale } from 'next-intl';

function LocaleDisplay() {
  const locale = useLocale();
  
  return <span>Current language: {locale}</span>;
}
```

## ⚙️ Configuration

### Next.js Configuration

#### `next.config.ts`
Main Next.js configuration file with static export settings.

**Key Settings:**
- `output: 'export'` - Enables static site generation
- `trailingSlash: true` - Adds trailing slashes to URLs
- `assetPrefix` - Sets asset path prefix for GitHub Pages
- `basePath` - Sets base URL path for GitHub Pages
- `images.unoptimized: true` - Required for static export

### Internationalization Configuration

#### `i18n/request.ts`
Next-intl configuration for internationalization.

**Features:**
- Locale detection
- Message loading
- Static generation support
- Fallback handling

### Tailwind Configuration

#### `tailwind.config.ts`
Tailwind CSS configuration with custom theme settings.

**Features:**
- Custom color palette
- Dark mode support
- Custom animations
- Extended spacing and typography

## 🔧 Development Tools

### Scripts

```json
{
  "dev": "next dev",           // Start development server
  "build": "next build",       // Build for production
  "start": "next start",       // Start production server
  "lint": "next lint",         // Run ESLint
  "type-check": "tsc --noEmit" // Run TypeScript checks
}
```

### Environment Variables

```bash
# Required for production builds
NODE_ENV=production

# Optional: Custom asset prefix
ASSET_PREFIX=/tech-studio

# Optional: Custom base path
BASE_PATH=/tech-studio
```

## 📚 Examples

### Complete Blog Page Example

```typescript
import { getAllBlogPosts, getBlogPost } from '@/lib/blog-content';
import BlogCard from '@/components/blog-card';
import BlogGrid from '@/components/blog-grid';

export default function BlogPage({ params }: { params: { locale: string } }) {
  const posts = getAllBlogPosts();
  const featuredPosts = posts.filter(post => post.metadata.featured);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      {/* Featured Posts */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map(post => (
            <BlogCard key={post.metadata.slug} post={post} />
          ))}
        </div>
      </section>
      
      {/* All Posts */}
      <BlogGrid locale={params.locale} />
    </div>
  );
}
```

### Complete Portfolio Page Example

```typescript
import { getAllPortfolioProjects, getFeaturedPortfolioProjects } from '@/lib/portfolio-content';
import PortfolioCard from '@/components/portfolio-card';
import PortfolioGrid from '@/components/portfolio-grid';

export default function PortfolioPage({ params }: { params: { locale: string } }) {
  const projects = getAllPortfolioProjects();
  const featuredProjects = getFeaturedPortfolioProjects();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Portfolio</h1>
      
      {/* Featured Projects */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map(project => (
            <PortfolioCard 
              key={project.metadata.slug} 
              project={project} 
              featured={true} 
            />
          ))}
        </div>
      </section>
      
      {/* All Projects */}
      <PortfolioGrid locale={params.locale} />
    </div>
  );
}
```

This API documentation provides comprehensive coverage of all components, utilities, and functions in the TechStudio project. For more specific implementation details, refer to the individual component files and their JSDoc comments.
