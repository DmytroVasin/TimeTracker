var webpack = require('webpack');

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
    path: './app/browser-app/dist/js',
    filename: '[name].js',
    publicPath: '../../browser-app/dist/js/'
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
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=50000' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  }
}
