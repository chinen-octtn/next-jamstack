/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  // output: "export",
  async rewrites() {
    return [
      {
        source: '/news-old/:path*',
        destination: '/news-old/:path*/index.html',
      },
    ]
  },
}

module.exports = nextConfig
