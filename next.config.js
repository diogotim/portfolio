/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://diogotim.github.io/portfolio/' : '',
};

module.exports = nextConfig;
