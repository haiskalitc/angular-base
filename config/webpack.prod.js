const webpack = require("webpack");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const helpers = require("./helpers");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const ENV = (process.env.NODE_ENV = process.env.ENV = "production");
const isDevelopment = ENV !== "production";

module.exports = merge(commonConfig, {
  devtool: false,
  output: {
    path: helpers.root("dist"),
    publicPath: "/",
    filename: "[name].[hash].js",
    chunkFilename: "[id].[hash].chunk.js",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        ENV: JSON.stringify(ENV),
      },
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? "[name].css" : "[name].[hash].css",
      chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css",
    }),
  ],
});
