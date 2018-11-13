const webpack = require('webpack');
const path = require('path');
const webpackBaseConfig = require('./webpack.base.config');
const webpackMerge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 分离css

module.exports = webpackMerge(webpackBaseConfig,{
  mode: 'production',
  output: {
      publicPath: 'anani1994.github.io/', // https://...这部分为你的服务器域名
      filename: 'blog/js/file-[name].js',
      chunkFilename: 'blog/js/chunk-[name].js'
  },
  module: {
    rules: [
      {
        test: /\.less/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../../'
            }
          },
          // 'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({ //创建 .html 并自动引入打包后的文件
      filename: 'index.html',
      template: 'index-ori.html',
      inject: true, // 参照最初创建的 .html 来生成 .html
      favicon: path.resolve('favicon.ico')
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "blog/css/file-[name].css",
      chunkFilename: "blog/css/chunk-[id].css"
    })
  ]
});