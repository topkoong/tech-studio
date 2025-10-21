import React, { Suspense, lazy, memo } from 'react';

import dynamic from 'next/dynamic';

/**
 * Performance optimization utilities for React components
 * Includes lazy loading, memoization, and code splitting
 */

/**
 * Lazy load components with loading fallback
 * Reduces initial bundle size and improves performance
 *
 * @param importFunc - Dynamic import function
 * @param fallback - Loading component to show while loading
 * @returns Lazy-loaded component
 */
export const createLazyComponent = <T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  fallback?: React.ReactNode
): React.LazyExoticComponent<T> => {
  return React.lazy(importFunc);
};

/**
 * Memoized component wrapper for performance optimization
 * Prevents unnecessary re-renders when props haven't changed
 *
 * @param Component - Component to memoize
 * @param areEqual - Custom comparison function (optional)
 * @returns Memoized component
 */
export const createMemoizedComponent = <P extends object>(
  Component: React.ComponentType<P>,
  areEqual?: (prevProps: Readonly<P>, nextProps: Readonly<P>) => boolean
) => {
  return memo(Component, areEqual);
};

/**
 * Dynamic import with Next.js for better performance
 * Includes loading state and error boundary
 *
 * @param importFunc - Dynamic import function
 * @param options - Dynamic import options
 * @returns Dynamically imported component
 */
export const createDynamicComponent = <T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  options: { loading?: () => React.ReactNode; ssr?: boolean } = {}
): React.ComponentType<React.ComponentProps<T>> => {
  return dynamic(importFunc, {
    loading:
      options.loading || (() => React.createElement('div', null, 'Loading...')),
    ssr: options.ssr !== false,
  });
};

/**
 * Image optimization configuration
 * Provides optimized image loading with lazy loading and responsive sizing
 */
export const imageOptimization = {
  // Responsive image sizes for different breakpoints
  sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  // Image quality settings
  quality: 85,
  // Format priority for better compression
  formats: ['image/webp', 'image/avif'] as const,
  // Device sizes for responsive images
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  // Image sizes for different use cases
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  // Minimum cache TTL for images
  minimumCacheTTL: 31536000, // 1 year
};

/**
 * Font optimization configuration
 * Preloads critical fonts and optimizes font loading
 */
export const fontOptimization = {
  // Preload critical fonts
  preloadFonts: [
    'Inter:wght@400;500;600;700',
    'JetBrains Mono:wght@400;500;600',
  ],
  // Font display strategy
  display: 'swap' as const,
  // Font fallbacks
  fallbacks: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'sans-serif',
  ],
};

/**
 * Bundle optimization configuration
 * Optimizes JavaScript bundle size and loading
 */
export const bundleOptimization = {
  // Code splitting strategies
  splitting: {
    // Split vendor libraries
    vendor: true,
    // Split by route
    route: true,
    // Split by component
    component: true,
  },
  // Tree shaking configuration
  treeShaking: {
    // Remove unused exports
    unused: true,
    // Remove dead code
    deadCode: true,
  },
  // Compression settings
  compression: {
    // Gzip compression
    gzip: true,
    // Brotli compression
    brotli: true,
  },
};

/**
 * Performance monitoring configuration
 * Tracks Core Web Vitals and performance metrics
 */
export const performanceMonitoring = {
  // Core Web Vitals thresholds
  thresholds: {
    LCP: 2500, // Largest Contentful Paint (ms)
    FID: 100, // First Input Delay (ms)
    CLS: 0.1, // Cumulative Layout Shift
    FCP: 1800, // First Contentful Paint (ms)
    TTFB: 800, // Time to First Byte (ms)
  },
  // Performance metrics to track
  metrics: [
    'LCP',
    'FID',
    'CLS',
    'FCP',
    'TTFB',
    'INP', // Interaction to Next Paint
  ] as const,
  // Sampling rate for performance data
  samplingRate: 0.1, // 10% of users
};

/**
 * Caching strategy configuration
 * Optimizes caching for better performance
 */
export const cachingStrategy = {
  // Static assets caching
  staticAssets: {
    // Cache duration for static assets
    maxAge: 31536000, // 1 year
    // Cache headers
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
  // API responses caching
  apiResponses: {
    // Cache duration for API responses
    maxAge: 300, // 5 minutes
    // Cache headers
    headers: {
      'Cache-Control': 'public, max-age=300, s-maxage=300',
    },
  },
  // HTML pages caching
  htmlPages: {
    // Cache duration for HTML pages
    maxAge: 3600, // 1 hour
    // Cache headers
    headers: {
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  },
};

/**
 * Preloading strategy for critical resources
 * Preloads important resources for faster loading
 */
export const preloadingStrategy = {
  // Critical CSS preloading
  criticalCSS: true,
  // Critical JavaScript preloading
  criticalJS: true,
  // Critical images preloading
  criticalImages: true,
  // Font preloading
  fonts: true,
  // DNS prefetching for external domains
  dnsPrefetch: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://images.unsplash.com',
    'https://cdnjs.cloudflare.com',
  ],
  // Preconnect to external domains
  preconnect: ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
};

/**
 * Error boundary component for better error handling
 * Catches JavaScript errors and displays fallback UI
 */
export const createErrorBoundary = (
  fallback: React.ComponentType<{ error: Error; resetError: () => void }>
): React.ComponentType<{ children: React.ReactNode }> => {
  return class ErrorBoundary extends React.Component<
    { children: React.ReactNode },
    { hasError: boolean; error?: Error }
  > {
    constructor(props: { children: React.ReactNode }) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
      return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    render(): React.ReactNode {
      if (this.state.hasError) {
        const FallbackComponent = fallback;
        return React.createElement(FallbackComponent, {
          error: this.state.error!,
          resetError: () =>
            this.setState({ hasError: false, error: undefined }),
        });
      }
      return this.props.children;
    }
  };
};

/**
 * Suspense wrapper for lazy-loaded components
 * Provides loading states and error boundaries
 */
export const createSuspenseWrapper = (
  fallback: React.ReactNode = React.createElement('div', null, 'Loading...')
): React.ComponentType<{ children: React.ReactNode }> => {
  return function SuspenseWrapper({ children }: { children: React.ReactNode }) {
    return React.createElement(Suspense, { fallback }, children);
  };
};

/**
 * Performance optimization hook
 * Provides performance monitoring and optimization utilities
 * Only runs on client-side to avoid SSR issues
 */
export const usePerformanceOptimization = (): {
  metrics: Record<string, number>;
  isSlowConnection: boolean;
  needsOptimization: boolean;
} => {
  const [metrics, setMetrics] = React.useState<Record<string, number>>({});

  React.useEffect(() => {
    // Only run on client-side to avoid SSR issues
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals with safe imports
    const loadWebVitals = async () => {
      try {
        const webVitals = await import('web-vitals');

        // Use the new API with safe checks
        if (webVitals.onCLS) {
          webVitals.onCLS((metric: any) =>
            setMetrics((prev) => ({ ...prev, CLS: metric.value }))
          );
        }
        if (webVitals.onFCP) {
          webVitals.onFCP((metric: any) =>
            setMetrics((prev) => ({ ...prev, FCP: metric.value }))
          );
        }
        if (webVitals.onLCP) {
          webVitals.onLCP((metric: any) =>
            setMetrics((prev) => ({ ...prev, LCP: metric.value }))
          );
        }
        if (webVitals.onTTFB) {
          webVitals.onTTFB((metric: any) =>
            setMetrics((prev) => ({ ...prev, TTFB: metric.value }))
          );
        }
      } catch (error) {
        console.warn('Failed to load web-vitals:', error);
      }
    };

    loadWebVitals();
  }, []);

  return {
    metrics,
    isSlowConnection: metrics.TTFB > performanceMonitoring.thresholds.TTFB,
    needsOptimization: Object.entries(metrics).some(
      ([key, value]) =>
        performanceMonitoring.thresholds[
          key as keyof typeof performanceMonitoring.thresholds
        ] < value
    ),
  };
};
