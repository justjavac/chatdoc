/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  output: 'export',
};

module.exports = nextConfig;
