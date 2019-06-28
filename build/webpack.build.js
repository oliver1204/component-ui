const path = require("path");
const webpack = require("webpack");
const merge = require('webpack-merge');
const base = require('./webpack.base');

module.exports = merge({
  entry: path.resolve(__dirname, "../src/index.tsx"),
  output: {
    library: 'ComponentUIs',
    libraryTarget: 'umd',
    filename: "component-ui.js",
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader,
          // },
          "style-loader", 
          "css-loader",
          // {
          //   loader: "css-loader",
          //   options: {
          //       cssModules: {
          //           modules: true,
          //           localIdentName: '[path][name]__[local]--[hash:base64:5]'
          //       }
          //   }
          // },
          "postcss-loader"
        ]
      },
    ]
  }
},base);