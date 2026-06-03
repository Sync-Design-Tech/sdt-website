'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          padding: '1rem',
          textAlign: 'center',
          fontFamily: 'system-ui, sans-serif',
          background: '#fff',
          color: '#000',
        }}
      >
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Something went wrong</h2>
        <p style={{ maxWidth: '28rem', fontSize: '0.875rem', color: '#525252' }}>
          We hit an unexpected error while loading the site. Please try again.
        </p>
        <button
          onClick={() => reset()}
          style={{
            marginTop: '0.5rem',
            borderRadius: '0.375rem',
            background: '#000',
            color: '#fff',
            padding: '0.5rem 1.25rem',
            fontSize: '0.875rem',
            fontWeight: 500,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
