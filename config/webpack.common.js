const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

var helpers = require("./helpers");
module.exports = {
  entry: {
    polyfills: "./src/polyfills.ts",
    vendor: "./src/vendor.ts",
    app: "./src/main.ts",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "awesome-typescript-loader",
            options: { configFileName: helpers.root("", "tsconfig.json") },
          },
          "angular2-template-loader",
        ],
      },
      { test: /\.html$/, use: ["html-loader"] },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: ["file-loader?name=assets/[name].[hash].[ext]"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["to-string-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    noEmitOnErrors: true,
    splitChunks: {
      chunks: "all",
    },
    runtimeChunk: "single",
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          parse: {},
          compress: {},
          mangle: true,
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_fnames: false,
        },
      }),
    ],
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root("./src"),
      {}
    ),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
};
