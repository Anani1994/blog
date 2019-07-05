const webpack = require('webpack');
// node.js 中的基本包，用于处理路径
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// 生成 html 的插件
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // path.jion() 将两个参数代表的路径相加组合起来，__dirname代表当前文件所在目录
    entry: { // 入口文件
        main: path.join(__dirname, '../src/main.js'),
        // vendors: [
        //     'font-awesome-loader'
        // ]
    },
    output: { // 输出文件
        // filename: 'bundle.js', // 输出文件的文件名
        path: path.join(__dirname, '../build'), // 输出文件所在目录
        // publicPath: ''
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: [{
                loader: 'vue-loader'
            }]
        },
        {
            test: /\.pug$/,
            use: [{
                loader: 'pug-plain-loader'
            }]
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }]
        },
        {
            test: /\.(jpg|png|gif|svg|jpeg|woff|woff2|eot|ttf|otf|ico)$/,
            use: [{
                loader: 'url-loader',
                // 配置参数
                options: {
                    limit: 1024, // 比较标准，小于标准的图片转换为 base64 代码
                    name: 'images/[name].[ext]'
                }
            }]
        }]
    },
    plugins: [
        // Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的
        new VueLoaderPlugin(),
        // bootstrap
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
            // In case you imported plugins individually, you must also require them here:
            // Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown"
        }),
        // 创建 .html 并自动引入打包后的文件
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            // 参照最初创建的 .html 来生成
            inject: true,
            favicon: 'favicon.ico'
        })
    ]
};
