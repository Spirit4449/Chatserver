// webpack.config.js
const path = require("path");
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

const addHotMiddleware = (entry) => [
  'webpack-hot-middleware/client?reload=true&timeout=1000',
  entry
];

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    home: addHotMiddleware("./src/home.js"),
    login: addHotMiddleware("./src/login.js"),
    signup: addHotMiddleware("./src/signup.js"),
    script: addHotMiddleware("./src/send.js"),
    onload: addHotMiddleware("./src/onload.js"),
    invite: addHotMiddleware("./src/invite.js"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist", "Bundles"),
    publicPath: "/Bundles/", // MUST match dev middleware
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '.env'),
    }),

    new webpack.HotModuleReplacementPlugin(), // needed for HMR
  ],
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
