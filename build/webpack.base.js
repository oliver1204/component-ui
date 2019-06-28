const path = require("path");

const rules = [
  {
    test: /\.(js|jsx)$/,
    use: "babel-loader",
    exclude: /node_modules/
  },
  { 
    test: /\.tsx?$/, 
    use: "awesome-typescript-loader",
    exclude: /node_modules/,
  },
  { 
    enforce: "pre", 
    test: /\.js$/, 
    use: [{
      loader: "source-map-loader",
      options: {
        minimise: false
      }
    }]
  },
  {
    test: /\.svg$/,
    loader: 'url-loader?limit=10000',
    exclude: /node_modules/,
  }, {
    test: /\.(png|jpg|jpeg)$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: 'images/[hash:8].[name].[ext]'
    },
    exclude: /node_modules/
  }, {
    test: /\.(gif)$/,
    loader: 'url-loader',
    options: {
      name: 'images/[hash:8].[name].[ext]'
    },
    exclude: /node_modules/
  }
]

module.exports = {
  module: {
    rules,
  },
  resolve: {
    extensions: [".tsx", ".js", ".json"]
  }
}