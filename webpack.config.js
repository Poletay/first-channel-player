const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: './css/style.bundle.css',
    }),
    new CopyWebpackPlugin([
      {
        from: 'assets/video',
        to: `${__dirname}/dist`,
        flatten: true,
      },
    ]),
    new HtmlWebpackPlugin({
      title: 'Custom video player',
      template: 'src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules/'),
        options: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
  entry: ['./src/index.js', './src/scss/index.scss'],
  output: {
    filename: 'main.js',
    path: `${__dirname}/dist/`,
  },
  performance: {
    hints: 'warning',
    maxEntrypointSize: 1700000,
    maxAssetSize: 1700000,
  },
  stats: 'errors-only',
  optimization: {
    splitChunks: {
      chunks: 'async',
      cacheGroups: {
        vendors: {
          reuseExistingChunk: true,
        },
      },
    },
  },
};
