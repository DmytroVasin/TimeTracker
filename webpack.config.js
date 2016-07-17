var webpack = require('webpack');

module.exports = {
  entry: './application.jsx',
  context: __dirname + '/browser-app/src/js',

  output: {
    path: __dirname + '/browser-app/dist/js',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/browser-app/dist/js/'
  },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }
};
