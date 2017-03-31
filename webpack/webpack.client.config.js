const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/client.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../build/statics'),
    publicPath: '/build/statics/'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2016', 'es2017', 'react'],
          plugins: ['transform-es2015-modules-commonjs']
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ],
  target: 'node'
}
