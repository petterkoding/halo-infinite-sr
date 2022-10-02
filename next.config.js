/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "assets.halo.autocode.gg", "halo.public.files.stdlib.com" ]
  }
}

module.exports = nextConfig
