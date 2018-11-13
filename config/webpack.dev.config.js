const webpack = require('webpack');
const path = require('path');
const webpackBaseConfig = require('./webpack.base.config');
const webpackMerge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = webpackMerge(webpackBaseConfig,{
  mode: 'development',
  output: {
      // publicPath: '/',
      filename: 'blog/js/[name].[hash].js',
      chunkFilename: 'blog/js/[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.less/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader' // loader 由下往上依次开始处理
        ]
      },
    ],
  },
  devServer: {
       contentBase: path.join(__dirname, "blog"),
       port:8080,
  },
  devtool: 'cheap-module-eval-source-map', // devtool由webpack直接提高，将打包后的文件中的错误映射到最初对应的文件中，便于调试
  plugins: [
    new HTMLWebpackPlugin({ //创建 .html 并自动引入打包后的文件
      filename: 'index.html',
      template: 'index-ori.html',
      inject: true, // 参照最初创建的 .html 来生成 .html
      favicon: path.resolve('favicon.ico')
    })
  ],
});