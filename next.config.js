const withStylus = require('@zeit/next-stylus')
module.exports = withStylus({
  webpack(config, options) {
    return config
  }
})