'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  BlurIn,
  GradualSpacing,
  LettersPullUp,
  LogoAnimation,
  StaggeredFade,
} from './text-animations';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe, Menu, Moon, Sun } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';

/**
 * Main navigation component with responsive design
 * Features:
 * - Mobile hamburger menu with smooth animations
 * - Theme toggle (light/dark mode)
 * - Language switcher (English/Thai)
 * - Smooth scroll animations
 * - Responsive design for all screen sizes
 *
 * @returns JSX element containing the navigation bar
 */
export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Extract current locale from pathname (e.g., '/en/about' -> 'en')
  // Fallback to 'en' if no locale is found in the path
  const currentLocale = pathname.split('/')[1] || 'en';

  // Ensure component is mounted before rendering theme-dependent content
  // This prevents hydration mismatches between server and client
  useEffect(() => {
    setMounted(true);
    console.log('Current theme:', theme); // Debug log
  }, [theme]);

  /**
   * Toggle between light and dark themes
   * Uses next-themes to persist theme preference
   */
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    console.log('Theme changed to:', newTheme); // Debug log
  };

  /**
   * Switch language while preserving current page
   * Handles locale switching with proper path reconstruction
   *
   * @param locale - Target locale ('en' or 'th')
   */
  const switchLanguage = (locale: string) => {
    // Remove current locale prefix from pathname to get the base path
    // Example: '/en/about' -> '/about', '/th/services' -> '/services'
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/';

    // Construct new path with target locale
    // Example: '/about' + 'th' -> '/th/about'
    const newPath = `/${locale}${pathWithoutLocale}`;

    console.log(
      'Switching language to:',
      locale,
      'Current path:',
      pathname,
      'New path:',
      newPath
    ); // Debug log

    // Navigate to new path and refresh to ensure locale changes are applied
    router.push(newPath);
    router.refresh(); // Force refresh to ensure new locale is loaded
  };

  const navigationItems = [
    { key: 'home', href: `/${currentLocale}` },
    { key: 'about', href: `/${currentLocale}/about` },
    { key: 'services', href: `/${currentLocale}/services` },
    { key: 'portfolio', href: `/${currentLocale}/portfolio` },
    { key: 'blog', href: `/${currentLocale}/blog` },
    { key: 'contact', href: `/${currentLocale}/contact` },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className='bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-800/50 sticky top-0 z-50'
    >
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className='flex items-center'
          >
            <Link
              href={`/${currentLocale}`}
              className='flex-shrink-0 flex items-center gap-2'
            >
              {/* Animated Logo Icon */}
              <motion.div
                className='w-8 h-8 bg-lime-500 dark:bg-lime-500 rounded-full flex items-center justify-center'
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                <motion.span
                  className='text-white text-sm font-bold'
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.3, ease: 'easeOut' }}
                >
                  T
                </motion.span>
              </motion.div>

              {/* Animated Logo Text */}
              <h1 className='text-2xl font-bold text-lime-600 dark:text-lime-500'>
                <StaggeredFade
                  text='TechStudio'
                  className='text-2xl font-bold'
                />
              </h1>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    pathname === item.href
                      ? 'text-lime-600 dark:text-lime-400 bg-lime-100/30 dark:bg-lime-900/30 shadow-sm'
                      : 'text-gray-800 dark:text-gray-200 hover:text-lime-600 dark:hover:text-lime-400 hover:bg-gray-100/30 dark:hover:bg-gray-800/30'
                  }`}
                >
                  {t(item.key)}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Controls */}
          <div className='flex items-center space-x-4'>
            {/* Theme Toggle */}
            {mounted && (
              <Button
                variant='ghost'
                size='icon'
                onClick={toggleTheme}
                aria-label='Toggle theme'
                className='text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/20 dark:hover:bg-gray-800/20'
              >
                {theme === 'dark' ? (
                  <Sun className='h-4 w-4' />
                ) : (
                  <Moon className='h-4 w-4' />
                )}
              </Button>
            )}

            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant='ghost'
                  size='sm'
                  className='text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/20 dark:hover:bg-gray-800/20 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700'
                >
                  <Globe className='h-4 w-4 mr-2' />
                  <span className='text-sm font-medium'>
                    {currentLocale === 'en' ? 'EN' : 'TH'}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align='end'
                className='bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 shadow-lg rounded-lg p-2 min-w-[120px]'
              >
                <DropdownMenuItem
                  onClick={() => switchLanguage('en')}
                  className={`text-sm font-medium px-3 py-2 rounded-md cursor-pointer transition-colors ${
                    currentLocale === 'en'
                      ? 'bg-lime-100 dark:bg-lime-900 text-lime-700 dark:text-lime-300'
                      : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <span className='mr-2'>🇺🇸</span>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => switchLanguage('th')}
                  className={`text-sm font-medium px-3 py-2 rounded-md cursor-pointer transition-colors ${
                    currentLocale === 'th'
                      ? 'bg-lime-100 dark:bg-lime-900 text-lime-700 dark:text-lime-300'
                      : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <span className='mr-2'>🇹🇭</span>
                  ไทย
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Contact Us Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href={`/${currentLocale}/contact`}>
                <Button className='bg-lime-500 hover:bg-lime-600 text-white font-medium px-6 py-2 rounded-lg'>
                  Contact Us
                </Button>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  className='md:hidden text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/20 dark:hover:bg-gray-800/20'
                >
                  <Menu className='h-4 w-4' />
                </Button>
              </SheetTrigger>
              <SheetContent
                side='right'
                className='w-[280px] sm:w-[320px] bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700'
              >
                <div className='flex flex-col h-full'>
                  {/* Mobile Menu Header */}
                  <div className='flex items-center justify-between mb-6'>
                    <div className='flex items-center gap-2'>
                      {/* Animated Mobile Logo Icon */}
                      <motion.div
                        className='w-8 h-8 bg-lime-500 rounded-full flex items-center justify-center'
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                      >
                        <motion.span
                          className='text-white text-sm font-bold'
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            delay: 0.2,
                            duration: 0.3,
                            ease: 'easeOut',
                          }}
                        >
                          T
                        </motion.span>
                      </motion.div>

                      {/* Animated Mobile Logo Text */}
                      <StaggeredFade
                        text='TechStudio'
                        className='text-2xl font-bold text-lime-600 dark:text-lime-500'
                      />
                    </div>
                    <Button
                      variant='ghost'
                      size='icon'
                      onClick={() => setIsMenuOpen(false)}
                      className='text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                    >
                      <svg
                        className='h-4 w-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>
                    </Button>
                  </div>

                  {/* Navigation Links */}
                  <div className='flex flex-col space-y-2 flex-1'>
                    {navigationItems.map((item, index) => (
                      <motion.div
                        key={item.key}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                            pathname === item.href
                              ? 'text-lime-600 dark:text-lime-400 bg-lime-100 dark:bg-lime-900/30 shadow-sm'
                              : 'text-gray-800 dark:text-gray-200 hover:text-lime-600 dark:hover:text-lime-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                          }`}
                        >
                          {t(item.key)}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mobile Menu Footer with Controls */}
                  <div className='border-t border-gray-200 dark:border-gray-700 pt-4 mt-6'>
                    <div className='flex items-center justify-between mb-4'>
                      <span className='text-sm text-gray-600 dark:text-gray-400'>
                        Theme
                      </span>
                      <Button
                        variant='ghost'
                        size='icon'
                        onClick={toggleTheme}
                        className='text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                      >
                        {theme === 'dark' ? (
                          <Sun className='h-4 w-4' />
                        ) : (
                          <Moon className='h-4 w-4' />
                        )}
                      </Button>
                    </div>

                    <div className='flex items-center justify-between mb-4'>
                      <span className='text-sm text-gray-600 dark:text-gray-400'>
                        Language
                      </span>
                      <div className='flex gap-2'>
                        <Button
                          variant={currentLocale === 'en' ? 'default' : 'ghost'}
                          size='sm'
                          onClick={() => switchLanguage('en')}
                          className={
                            currentLocale === 'en'
                              ? 'bg-lime-500 text-white'
                              : 'text-gray-700 dark:text-gray-300'
                          }
                        >
                          EN
                        </Button>
                        <Button
                          variant={currentLocale === 'th' ? 'default' : 'ghost'}
                          size='sm'
                          onClick={() => switchLanguage('th')}
                          className={
                            currentLocale === 'th'
                              ? 'bg-lime-500 text-white'
                              : 'text-gray-700 dark:text-gray-300'
                          }
                        >
                          TH
                        </Button>
                      </div>
                    </div>

                    <Link
                      href={`/${currentLocale}/contact`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Button className='w-full bg-lime-500 hover:bg-lime-600 text-white font-medium py-3 rounded-lg'>
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
