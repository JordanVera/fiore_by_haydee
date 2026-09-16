import type {NextConfig} from 'next';

const config: NextConfig = {
  agentRules: false,
  // Serve public/ assets directly — avoids Vercel optimizer failures on local JPEGs.
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {source: '/shop', destination: '/flowers', permanent: true},
      {source: '/cart', destination: '/contact', permanent: true},
      {source: '/order-confirmation', destination: '/contact', permanent: true},
      {source: '/admin', destination: '/', permanent: true},
    ];
  },
};

export default config;
