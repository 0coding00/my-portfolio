/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/my-portfolio',   // 👈 add this so links work on GitHub Pages
  assetPrefix: '/my-portfolio/'
};

export default nextConfig;
