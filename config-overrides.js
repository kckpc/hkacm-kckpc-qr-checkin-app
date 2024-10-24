const { override, addWebpackPlugin } = require('customize-cra');
const webpack = require('webpack');

module.exports = override(
  addWebpackPlugin(
    new webpack.DefinePlugin({
      'process.env.REACT_APP_API_URL': JSON.stringify(process.env.REACT_APP_API_URL)
    })
  ),
  (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      https: false
    };
    return config;
  }
);
