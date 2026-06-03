'use client';
import React from 'react';

interface WebGLErrorBoundaryProps {
  children: React.ReactNode;
  /** Rendered instead of the children when a WebGL (or any render) error occurs. Defaults to nothing. */
  fallback?: React.ReactNode;
}

interface WebGLErrorBoundaryState {
  hasError: boolean;
}

/**
 * Contains errors thrown by WebGL-backed components (cobe globe, react-three-fiber
 * canvases). When a visitor's browser can't create a WebGL context, those libraries
 * throw during init (e.g. "Cannot read properties of null (reading 'enable')"). Without
 * a boundary this unmounts the whole React tree and blanks the site, so we catch it here
 * and degrade gracefully to `fallback` (nothing by default).
 */
export class WebGLErrorBoundary extends React.Component<WebGLErrorBoundaryProps, WebGLErrorBoundaryState> {
  state: WebGLErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): WebGLErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.warn('WebGL component failed to render; skipping it.', error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null;
    }
    return this.props.children;
  }
}
