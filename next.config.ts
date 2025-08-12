import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  images: {
    domains: ['images.unsplash.com', 'cdn.example.com'], // Add any external domains you're using
  },
};

export default nextConfig;
