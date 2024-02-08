import analyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = analyzer({
  enabled: process.env.ANALYZE === 'true',
});
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withBundleAnalyzer(nextConfig);
