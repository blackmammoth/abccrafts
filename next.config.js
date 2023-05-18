/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const path = require('path');
 
module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your projesct has ESLint errors.
    ignoreDuringBuilds: true,
  },
};