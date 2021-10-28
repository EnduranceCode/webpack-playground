const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // The Entry point (https://www.valentinog.com/blog/webpack/#entry-point) is being set here with webpack's default
  // and therefore wouldn't need to be explicitly set. It is only being set to be used as an example how it can be customized.
  entry: { index: path.resolve(__dirname, 'src', 'index.js') },
  // The Output (https://www.valentinog.com/blog/webpack/#output) is being set here with webpack's default
  // and therefore wouldn't need to be explicitly set. It is only being set to be used as an example how it can be customized.
  output: {
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
};
