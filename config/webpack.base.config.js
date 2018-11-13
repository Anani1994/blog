// 修改 webppack 配置文件后需重启才能生效
const webpack = require('webpack');
const path = require('path'); // node.js 中的基本包，用于处理路径
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin'); // 用于清除目录内容
// const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 分离css

const resolve = dir => {
  return path.join(__dirname,dir);
};

module.exports = {
  entry: path.join(__dirname,'../src/main.js'), // path.jion()将两个参数代表的路径相加组合起来，__dirname代表当前文件所在目录
  output: {
    // filename: 'bundle.js', //输出文件的文件名
    path: path.join(__dirname,'../'), // 输出文件所在目录
    // publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          },
          {
            loader: 'iview-loader',
            options: {
              prefix: false
            }
          }
        ]
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-plain-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     // you can specify a publicPath here
          //     // by default it use publicPath in webpackOptions.output
          //     publicPath: '../'
          //   }
          // },
          'style-loader', // 为 css 创建 style 标签并置入其中插入页面
          'css-loader', // 处理 css
          'postcss-loader', // 浏览器兼容问题
        ]
      },
      // {
      //   test: /\.less/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       options: {
      //         // you can specify a publicPath here
      //         // by default it use publicPath in webpackOptions.output
      //         publicPath: '../../'
      //       }
      //     },
      //     // 'style-loader',
      //     'css-loader',
      //     'postcss-loader',
      //     'less-loader' // loader 由下往上依次开始处理
      //   ]
      // },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
              // 前者防止在每个文件都插入辅助代码 后者支持路由懒加载
              plugins: ['transform-runtime','syntax-dynamic-import']
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|svg|jpeg|woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: { // 配置参数
              limit: 1024, // 比较标准，小于标准的图片转换为 base64 代码
              name:'blog/images/img-[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  // 创建路径别名
  resolve: {
    alias: {
      '@': resolve('../src'),
    }
  },
  plugins: [
    // Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin
    new VueLoaderPlugin(),
    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // both options are optional
    //   filename: "blog/css/[name].[hash].css",
    //   chunkFilename: "[id].[hash].css"
    // }),
    // 打包之前使用这个插件尝试清除dist目录下的文件
    new cleanWebpackPlugin(['blog/css/*','blog/js/*','blog/images/*','index.html'], {
      root: path.resolve(__dirname, '../')
    }),
    // 配置 jQuery
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    })
  ]
}