const path = require("path");

/** @type {import('next').NextConfig}
 
*/

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  basePath: '/kobold-solutions',
  assetPrefix: '/kobold-solutions'
}

module.exports = nextConfig