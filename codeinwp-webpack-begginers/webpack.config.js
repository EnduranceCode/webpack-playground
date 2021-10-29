const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src', 'js', 'script.js'),
  },

  output: {
    clean: true,
    filename: 'js/script.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      hash: true,
      template: './src/index.html',
      inject: 'body',

      title: 'Hello webpack',
      header: 'Hello webpack',
      metaDescription: 'Hello webpack page meta description',
    }),
  ],

  devServer: {
    static: path.join(__dirname, 'dist'),
    open: true,
  },
};
