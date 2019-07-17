const path = require('path');
const webpack = require('webpack');

 module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './main.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './front'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, './front'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
        }]
      }
    ]
  }
};

console.log(__dirname)
