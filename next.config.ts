/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true, cleanUrls: true,
    async redirects() {
      return [
        {
          source: '/:path((?!.+\\.[\\w]+$)(?!.*/$).*)',
          destination: '/:path/',
          permanent: true,
        },
      ]
    },
  }
  
  module.exports = nextConfig