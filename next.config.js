const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }
    return config;
  },
  experimental: {
    target: 'serverless',
  },
  pageExtensions: ['js', 'jsx', 'mdx'],
});
