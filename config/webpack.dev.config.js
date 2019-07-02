// const webpack = require('webpack');
const path = require('path');
const webpackBaseConfig = require('./webpack.base.config');
// 合并配置的插件
const webpackMerge = require('webpack-merge');
// 生成 html 的插件
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = webpackMerge(webpackBaseConfig, {
    mode: 'development',
    output: {
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                // 为 css 创建 style 标签并置入其中插入页面
                'style-loader',
                // 处理 css
                'css-loader',
                // 浏览器兼容问题
                'postcss-loader',
            ]
        },
        {
            test: /\.(scss)$/,
            use: [{
                loader: 'style-loader',
            }, {
                loader: 'css-loader',
            }, {
                loader: 'postcss-loader',
                options: {
                    // post css plugins, can be exported to postcss.config.js
                    plugins: function () {
                        return [
                            require('precss'),
                            require('autoprefixer')
                        ];
                    }
                }
            }, {
                // compiles SASS to CSS
                loader: 'sass-loader'
            }]
        },
        {
            test: /\.less/,
            // loader 由下往上依次开始处理
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader',
                'less-loader'
            ]
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8080,
        // host: '192.168.1.4'
    },
    // devtool由webpack直接提高，将打包后的文件中的错误映射到最初对应的文件中，便于调试
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        // 创建 .html 并自动引入打包后的文件
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            // 参照最初创建的 .html 来生成
            inject: true,
            favicon: path.resolve('favicon.ico')
        })
    ],
});
