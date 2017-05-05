const path = require('path');

module.exports = {
  // the entry file for the bundle
  entry: ["babel-polyfill", path.join(__dirname, '/client/src/app.jsx')],

  // the bundle file we will get in the result
  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'app.js',
  },

  devtool: 'source-map',

  module: {
    rules: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, '/client/src'),
      loader: 'babel-loader'
    }],
  },

  resolve: {
    modules: [
      __dirname,
      "node_modules"
    ],
    extensions: ['.js', '.jsx', '.css']
  },

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true
};
