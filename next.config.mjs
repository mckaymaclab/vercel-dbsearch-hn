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
  // Force complete rebuild of CSS assets
  generateBuildId: async () => {
    return `build-${Date.now()}`
  },
}

export default nextConfig
