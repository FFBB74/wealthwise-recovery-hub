/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["images.unsplash.com", "lovable-uploads"],
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/lovable-uploads/:path*",
        destination: "/public/lovable-uploads/:path*",
      },
    ]
  },
}

module.exports = nextConfig
