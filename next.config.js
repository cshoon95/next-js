/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/content",
        destination: "/about",
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
