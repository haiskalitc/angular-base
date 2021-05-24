const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: "./src/main.ts",
  resolve: {
    extensions: [".ts", ".js", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader", "angular2-template-loader"],
      },
      { test: /\.html$/, use: ["html-loader"] },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: ["file-loader?name=assets/[name].[hash].[ext]"],
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/, /\.global\.scss$/],
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
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
  ],
};
