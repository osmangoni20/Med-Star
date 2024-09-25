/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com', // Corrected hostname
        port: '', // No specific port needed
        pathname: '/**', // Allow all paths under this domain
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co', // Corrected hostname
        port: '', // No specific port needed
        pathname: '/**', // Allow all paths under this domain
      },
      
      {
        protocol: 'https',
        hostname: 'example.com', // Corrected hostname
        port: '', // No specific port needed
        pathname: '/**', // Allow all paths under this domain
      },
      {
        protocol: 'https',
        hostname: 'assets.example.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;


