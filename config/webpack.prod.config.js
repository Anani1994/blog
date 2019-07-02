// const webpack = require('webpack');
const path = require('path');
const webpackBaseConfig = require('./webpack.base.config');
const webpackMerge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
// 用于清除目录内容
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 用于分离 CSS
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = webpackMerge(webpackBaseConfig, {
    mode: 'production',
    output: {
        // publicPath: 'anani1994.github.io/BlogV3.0.0', // https://...这部分为你的服务器域名
        filename: 'build/js/[name].js',
        chunkFilename: 'build/js/[contenthash:8].chunk.js'
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                // 处理 css
                'css-loader',
                // 浏览器兼容问题
                'postcss-loader',
            ]
        },
        {
            test: /\.(scss)$/,
            use: [{
                loader: MiniCssExtractPlugin.loader
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
            test: /\.less$/,
            // loader 由下往上依次开始处理
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'less-loader'
            ]
        }]
    },
    plugins: [
        // 打包之前使用这个插件尝试清除dist目录下的文件
        new CleanWebpackPlugin(['build/*'], {
            root: path.resolve(__dirname, '../')
        }),
        new HTMLWebpackPlugin({ // 创建 .html 并自动引入打包后的文件
            filename: 'build/index.html',
            template: 'index.html',
            inject: true, // 参照最初创建的 .html 来生成 .html
        }),
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        new MiniCssExtractPlugin({
            filename: 'build/css/[name].css',
            chunkFilename: 'build/css/[contenthash:8].chunk.css'
        })
    ]
});
