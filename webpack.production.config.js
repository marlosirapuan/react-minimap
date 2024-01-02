const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

/**
 * This is the Webpack configuration file for production.
 */
module.exports = {
  entry: "./src/react-minimap",

  output: {
    // library: 'ReactEmoji',
    libraryTarget: 'umd',
    path: __dirname + "/dist/",
    filename: "react-minimap.js"
  },

  externals: [
    {
      "react": {
        root: "React",
        commonjs2: "react",
        commonjs: "react",
        amd: "react"
      }
    }
  ],

  module: {
    rules: [
      { test: /\.js?$/, exclude: /node_modules/, use: "babel-loader" },
      { test: /\.css?$/, exclude: /node_modules/, use: [MiniCssExtractPlugin.loader, "css-loader"] }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "react-minimap.css"
    }),
  ]
};
