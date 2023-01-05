const pwa = require('next-pwa');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.dummyjson.com'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
  },
};

module.exports = (_phase, { defaultConfig }) => {
  const plugins = [pwa]
  return plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig })
}