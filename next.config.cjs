//const withPlugins = require("next-compose-plugins");
//const optimizedImages = require("next-optimized-images");
//
//const withCustomImageOptimizer =
//  () =>
//  (nextConfig = {}) => {
//    const { images = {} } = nextConfig;
//    const { deviceSizes = [], formats = [], loader } = images;
//
//    nextConfig.images = {
//      ...images,
//      disableStaticImages: false,
//      loader: "custom",
//      optimizeImages: true,
//      mozjpeg: {
//        quality: 80,
//      },
//      optipng: {
//        optimizationLevel: 3,
//      },
//    };
//
//    nextConfig.webpack = (config, options) => {
//      if (!options.isServer && loader === "custom") {
//        config.module.rules.push({
//          test: /\.(jpe?g|png)$/i,
//          use: [
//            {
//              loader: "responsive-loader",
//              options: {
//                adapter: require("responsive-loader/sharp"),
//                quality: 80,
//                sizes: deviceSizes,
//                formats,
//                name: "[name]-[hash].[ext]",
//                outputPath: "static/images/",
//                publicPath: "/_next/static/images/",
//                esModule: false,
//                emitFile: false,
//              },
//            },
//            {
//              loader: "imagemin-loader",
//              options: {
//                cache: true,
//                imageminOptions: {
//                  plugins: [
//                    ["mozjpeg", { quality: 80 }],
//                    ["optipng", { optimizationLevel: 3 }],
//                  ],
//                },
//              },
//            },
//          ],
//        });
//      }
//
//      return config;
//    };
//
//    return nextConfig;
//  };
//
//module.exports = withPlugins(
//  [
//    [
//      optimizedImages,
//      {
//        optimizeImages: true,
//      },
//    ],
//  ],
//  withCustomImageOptimizer()
//);
const path = require('path');
const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

const withPlugins = require('next-compose-plugins');
const MDX = require('@next/mdx');

// next.js configuration
const nextConfig = {
  webpack5: false,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }
    config.resolve.alias.images = path.join(__dirname, 'images');
    return config;
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  target: 'serverless',
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/blog': { page: '/blog' },
    };
  },
  basePath: ghPages ? '/oulicoblog/' : '',
  assetPrefix: ghPages ? '/oulicoblog/' : '',
};

module.exports = withPlugins(
  [
    [
      MDX,
      {
        extension: /\.mdx?$/,
      },
    ],
  ],
  nextConfig
);
