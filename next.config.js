/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    USER_BRANCH: process.env.USER_BRANCH,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "albacimages121743-dev.s3.us-west-2.amazonaws.com",
        port: "",
        pathname: "/public/**",
      },
    ],
  },
};

module.exports = nextConfig;
