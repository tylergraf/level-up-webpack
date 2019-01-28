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
        test: /\.(html)$/,
        use: {
          loader: 'polymer-webpack-loader'
        }
      }
    ]
  }
}
