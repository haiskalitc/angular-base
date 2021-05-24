const webpack = require("webpack");
const { merge } = require('webpack-merge');
const commonConfig = require("./webpack.common.js");
const helpers = require("./helpers");

const ENV = (process.env.NODE_ENV = process.env.ENV = "production");

module.exports = merge(commonConfig, {
  devtool: false,
  output: {
    path: helpers.root("dist"),
    publicPath: "/",
    filename: "[name].[hash].js",
    chunkFilename: "[id].[hash].chunk.js",
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        ENV: JSON.stringify(ENV),
      },
    }),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false, // workaround for ng2
      },
    }),
  ],
});
