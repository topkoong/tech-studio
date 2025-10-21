'use client';

import React, { useCallback, useState } from 'react';

import Image from 'next/image';
import { imageOptimization } from '@/lib/performance';

/**
 * Optimized Image Component
 *
 * Provides enhanced image optimization with loading states,
 * error handling, and performance monitoring
 */
interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  quality?: number;
  fill?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
  onLoad?: () => void;
  onError?: () => void;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder = 'empty',
  blurDataURL,
  sizes = imageOptimization.sizes,
  quality = imageOptimization.quality,
  fill = false,
  style,
  onClick,
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    setImageLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  }, [onError]);

  // Don't render on server-side to avoid hydration issues
  if (typeof window === 'undefined') {
    return (
      <div
        className={`bg-gray-200 dark:bg-gray-700 ${className}`}
        style={{ width, height, ...style }}
      >
        <div className='w-full h-full flex items-center justify-center'>
          <div className='text-gray-500 dark:text-gray-400'>Loading...</div>
        </div>
      </div>
    );
  }

  if (hasError) {
    return (
      <div
        className={`bg-gray-200 dark:bg-gray-700 flex items-center justify-center ${className}`}
        style={{ width, height, ...style }}
      >
        <div className='text-gray-500 dark:text-gray-400 text-center'>
          <div className='text-2xl mb-2'>📷</div>
          <div className='text-sm'>Image failed to load</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={style}>
      {/* Loading placeholder */}
      {isLoading && (
        <div
          className='absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center z-10'
          style={{ width, height }}
        >
          <div className='animate-pulse'>
            <div className='w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full'></div>
          </div>
        </div>
      )}

      {/* Actual image */}
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        sizes={sizes}
        quality={quality}
        className={`transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        } ${onClick ? 'cursor-pointer' : ''}`}
        onLoad={handleLoad}
        onError={handleError}
        onClick={onClick}
      />

      {/* Error state */}
      {hasError && (
        <div className='absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center'>
          <div className='text-gray-500 dark:text-gray-400 text-center'>
            <div className='text-2xl mb-2'>📷</div>
            <div className='text-sm'>Image failed to load</div>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Lazy Image Component
 *
 * Image component that loads only when it comes into viewport
 */
interface LazyImageProps extends OptimizedImageProps {
  threshold?: number;
  rootMargin?: string;
}

export function LazyImage({
  threshold = 0.1,
  rootMargin = '50px',
  ...props
}: LazyImageProps) {
  const [isInView, setIsInView] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref);

    return () => observer.disconnect();
  }, [ref, threshold, rootMargin]);

  return (
    <div ref={setRef} className={props.className}>
      {isInView ? (
        <OptimizedImage {...props} />
      ) : (
        <div
          className={`bg-gray-200 dark:bg-gray-700 ${props.className}`}
          style={{ width: props.width, height: props.height, ...props.style }}
        >
          <div className='w-full h-full flex items-center justify-center'>
            <div className='text-gray-500 dark:text-gray-400'>Loading...</div>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Responsive Image Component
 *
 * Image component that adapts to different screen sizes
 */
interface ResponsiveImageProps extends OptimizedImageProps {
  mobileWidth?: number;
  mobileHeight?: number;
  tabletWidth?: number;
  tabletHeight?: number;
  desktopWidth?: number;
  desktopHeight?: number;
}

export function ResponsiveImage({
  mobileWidth,
  mobileHeight,
  tabletWidth,
  tabletHeight,
  desktopWidth,
  desktopHeight,
  ...props
}: ResponsiveImageProps) {
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>(
    'desktop'
  );

  React.useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth < 768) {
        setScreenSize('mobile');
      } else if (window.innerWidth < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const getDimensions = () => {
    switch (screenSize) {
      case 'mobile':
        return {
          width: mobileWidth || props.width,
          height: mobileHeight || props.height,
        };
      case 'tablet':
        return {
          width: tabletWidth || props.width,
          height: tabletHeight || props.height,
        };
      case 'desktop':
        return {
          width: desktopWidth || props.width,
          height: desktopHeight || props.height,
        };
      default:
        return { width: props.width, height: props.height };
    }
  };

  const dimensions = getDimensions();

  return (
    <OptimizedImage
      {...props}
      width={dimensions.width}
      height={dimensions.height}
    />
  );
}
