const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          { loader: 'polymer-webpack-loader' },
          { loader: 'webpack-lazy-group-loader' }
        ]
      },
      {
        test: /\.(jpg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name(file) {
                return '../[path][name].[ext]';
              }
            }
          }
        ]
      }
    ]
  }
}
