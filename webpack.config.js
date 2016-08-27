var webpack = require('webpack');

const env = process.env.NODE_ENV || 'development';
module.exports = {
  entry: {
    main: './main.jsx',
    about: './about.jsx',
    tray: './tray.jsx'
  },
  context: __dirname + '/browser-app/src/js',

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  output: {
    path: __dirname + '/browser-app/dist/js',
    filename: '[name].js',
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
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=50000' }
    ]
  }
};
