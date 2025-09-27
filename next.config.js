/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/my-portfolio',   // for GitHub Pages
  assetPrefix: '/my-portfolio/'
};

module.exports = nextConfig;
