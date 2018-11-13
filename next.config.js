const path = require("path");
const withStylus = require('@zeit/next-stylus');
const withCSS = require('@zeit/next-css');

module.exports = withStylus(withCSS({
    webpack(config, options) {
    // Object.assign(config.resolve.alias, {
    //   $variables: "./static/css/variables.styl"
    // });
    return config;
  }
}));