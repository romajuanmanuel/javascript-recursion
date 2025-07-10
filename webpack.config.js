const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  path: path.resolve(__dirname, 'dist'),
  publicPath: '', // o './' si ves rutas rotas en GitHub Pages
  clean: true
  },
  mode: 'development',
  devServer: {
    static: './dist',
    open: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
};
