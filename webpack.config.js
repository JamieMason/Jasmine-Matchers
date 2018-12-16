const globby = require('globby');
const path = require('path');

module.exports = {
  devtool: false,
  entry: {
    'jasmine-matchers': './src/index.ts',
    'jasmine-matchers.spec': globby.sync(['./test/*.spec.js'])
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  }
};
