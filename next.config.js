/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["drive.google.com", "www.gartner.com", "cdn.jsdelivr.net"],
  },
};
