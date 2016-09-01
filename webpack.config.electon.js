var webpack = require('webpack');
// var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    'index.js': './electron-app/js/index.js',
    'about_page.html': './electron-app/pages/about_page.html',
    'time_tracker_page.html': './electron-app/pages/time_tracker_page.html',
    'tray_page.html': './electron-app/pages/tray_page.html'
  },

  output: {
    path: __dirname + '/app/electron-app',
    filename: '[name]'
  },

  resolve: {
    extensions: ['', '.js', '.html']
  },
  // externals: [nodeExternals()],
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        }
      }, {
        test: /\.html$/,
        loader: "html"
      }
    ]
  },

  target: 'electron-main',

  node: {
    __dirname: false,
    __filename: false
  }
}
