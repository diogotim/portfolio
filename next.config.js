/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? 'https://diogotim.github.io/portfolio/' : '',
};

module.exports = nextConfig;
