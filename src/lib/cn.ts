import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function for combining and merging CSS classes
 * Uses clsx for conditional classes and tailwind-merge for Tailwind CSS class deduplication
 * 
 * @param inputs - Variable number of class values (strings, objects, arrays)
 * @returns Merged and deduplicated class string
 * @example
 * // Basic usage
 * cn('px-4', 'py-2', 'bg-blue-500') // 'px-4 py-2 bg-blue-500'
 * 
 * // Conditional classes
 * cn('base-class', { 'active-class': isActive, 'disabled-class': isDisabled })
 * 
 * // Tailwind class deduplication
 * cn('px-4 px-6') // 'px-6' (px-6 overrides px-4)
 * 
 * // Complex example
 * cn(
 *   'flex items-center justify-center',
 *   'bg-white dark:bg-gray-800',
 *   'rounded-lg shadow-md',
 *   { 'opacity-50 cursor-not-allowed': disabled },
 *   className // Additional classes from props
 * )
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
