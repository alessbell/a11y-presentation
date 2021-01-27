const withMDX = require("@next/mdx")();
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx', 'md'],
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  }
});
