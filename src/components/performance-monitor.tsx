'use client';

import React, { useEffect, useState } from 'react';

import { usePerformanceOptimization } from '@/lib/performance';

/**
 * Performance Monitor Component
 *
 * Monitors Core Web Vitals and displays performance metrics
 * Only renders on client-side to avoid SSR issues
 */
export default function PerformanceMonitor() {
  const { metrics, isSlowConnection, needsOptimization } =
    usePerformanceOptimization();
  const [isVisible, setIsVisible] = useState(false);

  // Only show in development or when performance issues are detected
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' || needsOptimization) {
      setIsVisible(true);
    }
  }, [needsOptimization]);

  // Don't render on server-side
  if (typeof window === 'undefined') {
    return null;
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div className='fixed bottom-4 right-4 z-50 bg-black/80 text-white p-4 rounded-lg text-xs font-mono max-w-xs'>
      <div className='flex items-center justify-between mb-2'>
        <h3 className='font-semibold'>Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className='text-gray-400 hover:text-white'
        >
          ×
        </button>
      </div>

      <div className='space-y-1'>
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key} className='flex justify-between'>
            <span className='text-gray-300'>{key}:</span>
            <span className={value > 1000 ? 'text-red-400' : 'text-green-400'}>
              {Math.round(value)}ms
            </span>
          </div>
        ))}

        {isSlowConnection && (
          <div className='text-yellow-400 mt-2'>
            ⚠️ Slow connection detected
          </div>
        )}

        {needsOptimization && (
          <div className='text-red-400 mt-2'>
            ⚠️ Performance optimization needed
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Performance Metrics Display Component
 *
 * Shows performance metrics in a more user-friendly format
 */
export function PerformanceMetrics() {
  const { metrics, isSlowConnection, needsOptimization } =
    usePerformanceOptimization();

  // Don't render on server-side
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <div className='bg-gray-50 dark:bg-gray-800 p-4 rounded-lg'>
      <h3 className='text-lg font-semibold mb-3'>Performance Metrics</h3>

      <div className='grid grid-cols-2 gap-4'>
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key} className='text-center'>
            <div className='text-2xl font-bold text-blue-600 dark:text-blue-400'>
              {Math.round(value)}ms
            </div>
            <div className='text-sm text-gray-600 dark:text-gray-400'>
              {key}
            </div>
          </div>
        ))}
      </div>

      {isSlowConnection && (
        <div className='mt-4 p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg'>
          <div className='flex items-center'>
            <span className='text-yellow-600 dark:text-yellow-400 mr-2'>
              ⚠️
            </span>
            <span className='text-yellow-800 dark:text-yellow-200'>
              Slow connection detected. Consider optimizing for slower networks.
            </span>
          </div>
        </div>
      )}

      {needsOptimization && (
        <div className='mt-4 p-3 bg-red-100 dark:bg-red-900 rounded-lg'>
          <div className='flex items-center'>
            <span className='text-red-600 dark:text-red-400 mr-2'>⚠️</span>
            <span className='text-red-800 dark:text-red-200'>
              Performance optimization recommended.
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
