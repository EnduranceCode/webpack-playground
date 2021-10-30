const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: { index: path.resolve(__dirname, 'src', 'js', 'script.js') },

  output: {
    clean: true,
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },

  optimization: {
    splitChunks: { chunks: 'all' },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),

    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
  ],

  devServer: {
    open: true,
  },
};
