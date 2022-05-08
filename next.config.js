// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
  images: {
    domains: ['https://snappyapp.vercel.app'],
  },
  swcMinify: true,
});
