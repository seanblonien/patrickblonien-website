import Analyzer from '@next/bundle-analyzer';
import type {NextConfig} from 'next';

const withBundleAnalyzer = Analyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = withBundleAnalyzer({
  output: 'export',
  images: {
    unoptimized: true,
  },
  compiler: {
    reactRemoveProperties: true,
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
});

export default nextConfig;
