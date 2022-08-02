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



import images from 'remark-images';
import emoji from 'remark-emoji';

 
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