import type {NextConfig} from 'next';

const config: NextConfig = {
  agentRules: false,
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
