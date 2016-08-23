var webpack = require('webpack');

module.exports = {
  entry: './entry.jsx',
  context: __dirname + '/browser-app/src/js',

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  output: {
    path: __dirname + '/browser-app/dist/js',
    filename: 'entry.js',
    publicPath: 'http://localhost:8080/browser-app/dist/js/'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  }
};
