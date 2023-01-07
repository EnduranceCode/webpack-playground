/*!
 * EnduranceCode Webpack Starter
 * Copyright 2023 Ricardo do Canto
 */

const path = require('path');

module.exports = {
  entry: { index: path.resolve(__dirname, 'src', 'js', 'script.js') },

  output: { clean: true, filename: 'js/script.js', path: path.resolve(__dirname, 'dist') },
};
