import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  compiler: {
    reactRemoveProperties: true,
    removeConsole: process.env.NODE_ENV === 'production',
  },
  reactCompiler: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // cacheComponents: true,
  experimental: {
    taint: true,
    turbopackFileSystemCacheForDev: true,
    cssChunking: true,
    inlineCss: true,
    optimizePackageImports: [
      'lucide-react',
      '@vercel/analytics',
      '@vercel/speed-insights',
    ],
  },
  turbopack: {
    resolveAlias: {
      '../build/polyfills/polyfill-module': './scripts/modern-polyfill.js',
      'next/dist/build/polyfills/polyfill-module': './scripts/modern-polyfill.js',
    },
  },
};

export default nextConfig;
