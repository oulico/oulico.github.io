//const withImages = require("next-images");
//const withPlugins = require("next-compose-plugins");
//const optimizedImages = require("next-optimized-images");
//const withMDX = require("@next/mdx")({
//	extension: /\.mdx?$/,
//});
//
//module.exports = withPlugins([
//	optimizedImages,
//	withMDX({
//		webpack: (config, { isServer }) => {
//			if (!isServer) {
//				config.node = {
//					fs: "empty",
//				};
//			}
//			return config;
//		},
//		experimental: {
//			target: "serverless",
//		},
//		pageExtensions: ["js", "jsx", "mdx"],
//	}),
//]);
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const withCustomImageOptimizer = () => (nextConfig = {}) => {
  const { images = {} } = nextConfig;
  const { deviceSizes = [], formats = [], loader } = images;

  nextConfig.images = {
    ...images,
    disableStaticImages: false,
    loader: 'custom',
    optimizeImages: true,
    mozjpeg: {
      quality: 80,
    },
    optipng: {
      optimizationLevel: 3,
    },
  };

  nextConfig.webpack = (config, options) => {
    if (!options.isServer && loader === 'custom') {
      config.module.rules.push({
        test: /\.(jpe?g|png)$/i,
        use: [
          {
            loader: 'responsive-loader',
            options: {
              adapter: require('responsive-loader/sharp'),
              quality: 80,
              sizes: deviceSizes,
              formats,
              name: '[name]-[hash].[ext]',
              outputPath: 'static/images/',
              publicPath: '/_next/static/images/',
              esModule: false,
              emitFile: false,
            },
          },
          {
            loader: 'imagemin-loader',
            options: {
              cache: true,
              imageminOptions: {
                plugins: [
                  ['mozjpeg', { quality: 80 }],
                  ['optipng', { optimizationLevel: 3 }],
                ],
              },
            },
          },
        ],
      });
    }

    return config;
  };

  return nextConfig;
};

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        optimizeImages: false,
      },
    ],
  ],
  withCustomImageOptimizer()
);

