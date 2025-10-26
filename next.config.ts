import Analyzer from '@next/bundle-analyzer';
import type {NextConfig} from 'next';

const withBundleAnalyzer = Analyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = withBundleAnalyzer({
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
  experimental: {
    turbopackFileSystemCacheForDev: true,
    optimizePackageImports: [
      'lucide-react',
      '@vercel/analytics',
      '@vercel/speed-insights',
    ],
  },
});

export default nextConfig;
