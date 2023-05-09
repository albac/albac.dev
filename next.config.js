/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    USER_BRANCH: process.env.USER_BRANCH
  }
}

module.exports = nextConfig
