/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/CryptoXApp',
  assetPrefix: '/CryptoXApp/',
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
}

export default nextConfig
