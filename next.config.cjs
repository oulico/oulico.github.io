const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
});

module.exports = withPlugins([
	optimizedImages,
	withMDX({
		webpack: (config, { isServer }) => {
			if (!isServer) {
				config.node = {
					fs: "empty",
				};
			}
			return config;
		},
		experimental: {
			target: "serverless",
		},
		pageExtensions: ["js", "jsx", "mdx"],
	}),
]);
