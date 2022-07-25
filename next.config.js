/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn1.arogga.com','i.ibb.co','www.pngall.com'],
},
sassOptions: {
  includePaths: [path.join(__dirname, 'styles')],
},
}

module.exports = nextConfig
