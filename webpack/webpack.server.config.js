const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/server.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../build/server'),
    publicPath: '/build/server/'
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
          presets: ['react']
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
