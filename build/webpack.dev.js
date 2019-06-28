const path = require("path");
const webpack = require("webpack");
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const base = require('./webpack.base');

module.exports = merge({
  entry: [
    path.resolve(__dirname, "../example/_template/index.tsx")
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", 
          "css-loader",
          //  {
          //   loader: "css-loader",
          //   options: {
          //     importLoaders: 1,
          //     modules: true,
          //     localIdentName: '[path][name]__[local]--[hash:base64:5]'
          //   }
          // },
          "postcss-loader"
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: path.resolve(__dirname, "../example/_template/index.html"),
      inject: true,
    }),
    // new MiniCssExtractPlugin({
    //   filename: "[name].css",
    //   chunkFilename: "[name][hash:8].css"
    // })
  ],
  externals: {},
  devtool: "source-map",
  devServer: {
    port: 3001,
    compress: false,
    contentBase: path.resolve(__dirname, '../example/_template')
  }
}, base);
