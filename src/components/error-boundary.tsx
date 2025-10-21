'use client';

import React from 'react';

/**
 * Error Boundary Component
 *
 * Catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI
 */
interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{
    error: Error;
    resetError: () => void;
  }>;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log the error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Call the onError callback if provided
    this.props.onError?.(error, errorInfo);

    // Update state with error info
    this.setState({ error, errorInfo });
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      // Render custom fallback UI or default error UI
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return (
          <FallbackComponent
            error={this.state.error!}
            resetError={this.resetError}
          />
        );
      }

      // Default error UI
      return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900'>
          <div className='max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6'>
            <div className='flex items-center mb-4'>
              <div className='flex-shrink-0'>
                <div className='w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center'>
                  <svg
                    className='w-5 h-5 text-red-600 dark:text-red-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z'
                    />
                  </svg>
                </div>
              </div>
              <div className='ml-3'>
                <h3 className='text-lg font-medium text-gray-900 dark:text-gray-100'>
                  Something went wrong
                </h3>
              </div>
            </div>

            <div className='mb-4'>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                We're sorry, but something unexpected happened. Please try
                refreshing the page.
              </p>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className='mb-4 p-3 bg-red-50 dark:bg-red-900 rounded-md'>
                <h4 className='text-sm font-medium text-red-800 dark:text-red-200 mb-2'>
                  Error Details (Development Only):
                </h4>
                <pre className='text-xs text-red-700 dark:text-red-300 whitespace-pre-wrap overflow-auto max-h-32'>
                  {this.state.error.toString()}
                </pre>
              </div>
            )}

            <div className='flex space-x-3'>
              <button
                onClick={this.resetError}
                className='flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors'
              >
                Try Again
              </button>
              <button
                onClick={() => window.location.reload()}
                className='flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors'
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Default Error Fallback Component
 *
 * A simple fallback component that can be used with ErrorBoundary
 */
export function DefaultErrorFallback({
  error,
  resetError,
}: {
  error: Error;
  resetError: () => void;
}) {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900'>
      <div className='max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6'>
        <div className='text-center'>
          <div className='w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4'>
            <svg
              className='w-8 h-8 text-red-600 dark:text-red-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z'
              />
            </svg>
          </div>

          <h2 className='text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2'>
            Oops! Something went wrong
          </h2>

          <p className='text-gray-600 dark:text-gray-400 mb-6'>
            We encountered an unexpected error. Please try again.
          </p>

          <button
            onClick={resetError}
            className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors'
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Error Boundary Hook
 *
 * A hook version of ErrorBoundary for functional components
 */
export function useErrorBoundary() {
  const [error, setError] = React.useState<Error | null>(null);

  const resetError = React.useCallback(() => {
    setError(null);
  }, []);

  const captureError = React.useCallback((error: Error) => {
    setError(error);
  }, []);

  React.useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  return { captureError, resetError };
}
