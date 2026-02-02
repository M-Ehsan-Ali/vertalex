/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: process.env.NEXT_PUBLIC_WORDPRESS_API_HOSTNAME
      ? [
          {
            protocol: 'http',
            hostname: process.env.NEXT_PUBLIC_WORDPRESS_API_HOSTNAME,
            port: '',
          },
        ]
      : [],
  },
}

module.exports = nextConfig
