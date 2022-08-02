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


const withPlugins = require ('next-compose-plugins';
import images from 'remark-images';
import emoji from 'remark-emoji';
import optimizedImages from 'next-optimized-images';
 
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
     pageExtensions: ['js', 'jsx', 'md', 'mdx', 'cjs']
   }
],
   [optimizedImages]
]);