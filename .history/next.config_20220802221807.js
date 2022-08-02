/** @type {import('next').NextConfig} */
//next.config.js
const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'media-exp1.licdn.com'],
    dangerouslyAllowSVG: true,
  }
}

module.exports = withContentlayer(nextConfig)


import withPlugins from 'next-compose-plugins';
import images from 'remark-images';
const emoji = require('remark-emoji');
const optimizedImages = require('next-optimized-images');
 
const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/,
  options: {
    mdPlugins: [images, emoji]
  }
});
 
module.exports = withPlugins([
[
   withMDX,
   {
     pageExtensions: ['js', 'jsx', 'md', 'mdx']
   }
],
   [optimizedImages]
]);