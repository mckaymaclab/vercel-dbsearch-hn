/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Force CSS cache invalidation
  env: {
    CSS_REBUILD_TIMESTAMP: Date.now().toString(),
  },
  experimental: {
    optimizeCss: false,
  },
}

export default nextConfig
