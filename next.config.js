/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  assetPrefix: '/kobold-solutions/',
  publicRuntimeConfig: {
    assetsPrefix: '/assets/',
  },
  staticAssets: ['/assets/js'],
  
}

module.exports = nextConfig
