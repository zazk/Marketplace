const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');
const withFonts = require('next-fonts');

module.exports = withFonts({
  enableSvg: true,
  publicRuntimeConfig: {
    MIXPANEL_TOKEN: process.env.MIXPANEL_TOKEN,
  },
  webpack(config, options) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config;
  },
});

module.exports = {};
