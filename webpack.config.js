// webpack.config.js
const path = require("path");
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = {
  entry: {
    home: "./src/home.js",
    login: "./src/login.js",
    signup: "./src/signup.js",
    script: "./src/send.js",
    onload: "./src/onload.js",
    invite: "./src/invite.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist", "Bundles"),
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '.env'), // Path to your .env file
    }),
    new webpack.DefinePlugin({
      'process.nodenv': JSON.stringify(process.env), // Define environment variables
    }),
  ],
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules|\.gitignore/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
