'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-4 text-center dark:bg-neutral-950">
      <h2 className="text-2xl font-bold text-black dark:text-white">Something went wrong</h2>
      <p className="max-w-md text-sm text-neutral-600 dark:text-neutral-400">
        We hit an unexpected error while loading this page. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="mt-2 rounded-md bg-black px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-80 dark:bg-white dark:text-black"
      >
        Try again
      </button>
    </div>
  );
}
