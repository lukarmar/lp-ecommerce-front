const withPlugins = require('next-compose-plugins');
const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.dummyjson.com'],
    unoptimized: true,
  }
}

module.exports = withPlugins([
  [
    withPWA, {
      pwa: {
          dest: "public",
          register: true,
          skipWaiting: true,
          disable: process.env.NODE_ENV === "development",
        }
    }
  ],
], nextConfig)