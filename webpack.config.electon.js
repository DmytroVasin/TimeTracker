var webpack = require('webpack');
// TODO: what is that?
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    'index': './electron-app/js/index.js'
  },

  output: {
    path: __dirname + '/app/electron-app/js',
    filename: 'index.js'
  },

  resolve: {
    extensions: ['', '.js']
  },
  externals: [nodeExternals()],
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  },

  target: 'electron-main',

  node: {
    __dirname: false,
    __filename: false
  }
}
