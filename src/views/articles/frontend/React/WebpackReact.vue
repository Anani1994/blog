<template lang="pug">
    BoWen
        .p-1(slot="catalog")
            Steps(direction="vertical")
                Step(title="基本介绍"
                    content="基本介绍"
                    status="wait"
                    @click.native="toTop('#webpack-react-1', 30)")
                Step(title="安装配置 webpack 基础"
                    content="安装配置 webpack 基础"
                    status="wait"
                    @click.native="toTop('#webpack-react-2', 30)")
                Step(title="配置支持 ES6、JSX"
                    content="配置支持 ES6、JSX"
                    status="wait"
                    @click.native="toTop('#webpack-react-3', 30)")
                Step(title="配置支持 React、React-dom"
                    content="配置支持 React、React-dom"
                    status="wait"
                    @click.native="toTop('#webpack-react-4', 30)")
        .px-1
            .py-3.text-center
                h1
                    Icon(type="ios-book-outline")
                    | &nbsp;搭建 webpack、react 开发环境（一）
                p.pt-1 使用 webpack 4 和 Babel 构建 React 应用基础开发环境
            h3#webpack-react-1.ml-1
                Icon(type="logo-buffer")
                | &nbsp;基本介绍
            Divider
            p Webpack 是一个前端资源加载/打包工具。它将根据模块的依赖关系进行静态分析，然后将这些模块按照指定的规则生成对应的静态资源，它可以将多种静态资源 JavaScript、css、less 等转换成一个静态文件，减少了页面的请求。
            p React 起源于 Facebook 的内部项目，用来架设 Instagram 的网站，它是一个用于构建用户界面的 JAVASCRIPT 库，主要用于构建UI，很多人认为 React 是 MVC 中的 V（视图）。由于拥有较高的性能，代码逻辑非常简单，所以在全球范围内的使用率都比较高。
            p 这一次为了更好的学习 webpack 环境的构建和开始 React 的开发，工程搭建将会以实现一个 todolist 为目标，将每一个节点作为一个 commit，以便更直观的查看实现一个功能点所需要做的事情，同时也使得选择所需的依赖变得更简单可行。
            p 你可以点击 
                a(href="https://github.com/Anani1994/webpack-react") show me the code
                font  来查看和 Fork 此项目，如果你需要查看更多关于 Angular或Vue 开发环境的搭建可以点击 
                a(href="https://github.com/Anani1994/hello-world") 查看更多
                font  来进行查看，欢迎大家一起学习和交流。
            h3#webpack-react-2.ml-1
                Icon(type="logo-buffer")
                | &nbsp;安装配置 webpack 基础
            Divider
            ul
                li 首先新建工程目录，这里我们给项目名称取名为 webpack-react，对其进行创建并进入该目录：
                    pre.mt-1(v-highlight)
                        code.bash.
                            $ mkdir webpack-react && cd webpack-react
                    font  然后进行初始化生成 package.json 文件(其中记录定义了这个项目所需要的各种模块,以及项目的配置信息，比如比如名称、版本、许可证等元数据)：
                    pre.mt-1(v-highlight)
                        code.bash.
                            $ yarn init
                    .mt-1.pl-4  根据提示我们可以设置相关信息，或者一路默认(回车)即可，当然如果你只要生成默认的，我们可以在执行初始化时命令时加上一个参数：
                    pre.mt-1(v-highlight)
                        code.bash.
                            $ yarn init -y
                    font  即可。
                li 然后安装 webpack，由于我们使用的是 webpack4+ 的版本，所以我们还需要安装 CLI：
                    pre.mt-1(v-highlight)
                        code.bash.
                            $ yarn add webpack webpack-cli --dev
                    font 当我们使用 yarn add 时，不仅会安装对应的包，并会将包的信息写进 yarn.lock 文件，从事该项目的其他开发人员在运行 yarn或yarn install 时将获得与您相同的依赖项。
                    p.text-muted 在 webpack 4 不是必须要有配置文件的，所以此时如果我们在 index.js 中添加内容直接执行 webpack 就可以进行打包，因为在 webpack 4 中默认入口文件为 ./src/index.js，默认出口文件为 ./dist/main.js。
                    p 安装完成之后我们来对 webpack 进行简单的配置，首先我们在 package.json 同级目录下创建 config 目录用于放置部分配置文件，现在我们在 config 目录下新建 
                        kbd webpack.base.config.js
                        font  文件，用来存放开发模式和生产模式公共的配置文件，创建 
                        kbd webpack.dev.config.js
                        font  文件，用来存放开发模式下的配置文件，创建 
                        kbd webpack.build.config.js
                        font  文件，用来存放生产模式下的配置文件：
                    pre.mt-1(v-highlight)
                        code.bash.
                            $ mkdir config
                            $ cd config
                            $ touch webpack.base.config.js webpack.dev.config.js webpack.build.config.js
                    p 现在我们先向共同的配置文件 webpack.base.config.js 中写入以下内容：
                    pre.mt-1(v-highlight)
                        code.js.
                            const path = require('path');
                            module.exports = {
                                // 入口配置
                                entry: {
                                    main: path.join(__dirname, '../src/index.js'),
                                },
                                // 输出配置
                                output: {
                                    filename: 'js/[name].js', // 输出文件的文件名
                                    path: path.join(__dirname, '../dist'), // 输出文件所在目录
                                }
                            };
                    p 如配置中所示，现在我们去对应的目录下创建对应的入口文件 index.js，并在其中输出“Hello world”：
                    pre.mt-1(v-highlight)
                        code.js.
                            // index.js
                            console.log('打包成功');
                li 刚刚我们建立三个配置文件，为了将两个模式下的配置文件与公共配置文件结合起来，我们需要安装和使用 webpack-merge 来进行合并：
                    pre.mt-1(v-highlight)
                        code.js.
                            $ yarn add webpack-merge --dev
                    p 这里我们先对开发模式下的配置文件进行配置：
                    pre.mt-1(v-highlight)
                        code.js.
                            // 引入公共配置
                            const webpackBaseConfig = require('./webpack.base.config');
                            // 合并配置的插件
                            const webpackMerge = require('webpack-merge');

                            module.exports = webpackMerge(webpackBaseConfig, {
                                // 指定模式
                                mode: 'development',
                                // devtool由 webpack 直接提供，将打包后的文件中的错误映射到最初对应的文件中，便于调试
                                devtool: 'cheap-module-eval-source-map'
                            });
                    p 顺便我们也把生产模式下也简单的配置一下，有时候我们也可以打包一下，查看打包后文件存放的名称和路径等，以检测书写错误导致一些错误，当然现在我们只需要对其进行简单的配置：
                    pre.mt-1(v-highlight)
                        code.js.
                            // 引入公共配置
                            const webpackBaseConfig = require('./webpack.base.config');
                            // 合并配置的插件
                            const webpackMerge = require('webpack-merge');

                            module.exports = webpackMerge(webpackBaseConfig, {
                                // 指定模式
                                mode: 'production'
                            });
                li 使用 webpack-dev-server 构建本地服务器：webpack-dev-server 提供了一个简单的 web 服务器，并且能够实时重新加载。它的使用也比较简单，首先我们对其进行安装：
                    pre.mt-1(v-highlight)
                        code.js.
                            $ yarn add webpack-dev-server --dev
                    p 由于它直接开发模式下会被用到，所以我们直接去开发模式的配置文件(webpack.dev.config.js)下进行配置：
                    pre.mt-1(v-highlight)
                        code.js.
                            const path = require('path');
                            // 引入公共配置
                            const webpackBaseConfig = require('./webpack.base.config');
                            // 合并配置的插件
                            const webpackMerge = require('webpack-merge');

                            module.exports = webpackMerge(webpackBaseConfig, {
                                // 指定模式
                                mode: 'development',
                                // devtool由 webpack 直接提供，将打包后的文件中的错误映射到最初对应的文件中，便于调试
                                devtool: 'cheap-module-eval-source-map',
                                // 对 webpack-dev-server 进行配置
                                devServer: {
                                    //本地服务器所加载的页面所在的目录
                                    contentBase: path.join(__dirname, "../dist"),
                                    /* 服务器的主机号，默认是 localhost
                                    * 将该地址设为电脑的 ip 地址，局域网内的移动设备通过访问该地址下的30端口即可访问 web 应用
                                    */
                                    host: 'localhost',
                                    // 端口
                                    port: 3000,
                                    /* 设置编译后文件的路径，导致最后的文件文件地址为：http://localhost:3000/dist/index.js
                                    *
                                    * publicPath: 'http://localhost:3000/',
                                    */
                                    /* 应对返回404页面时定向到特定页面
                                    *
                                    * historyApiFallback: {
                                    *   rewrites: [{
                                    *     from: /./,
                                    *     to: '/404.html'
                                    *   }]
                                    * },
                                    */
                                    // 热模块替换机制
                                    //- hot: true,
                                    /* 默认为 true, 意思是，在打包时会注入一段代码到最后的 js 文件中，用来监视页面的改动而自动刷新页面
                                    * 当为 false 时，网页自动刷新的模式是 iframe，也就是将模板页放在一个 frame中
                                    *
                                    * inline: true,
                                    */
                                    // 为 true 时，dev server 第一次会自动打开浏览器
                                    open: true,
                                    /* 对所有的服务器资源采用 gzip 压缩 
                                    * 对 JS，CSS 资源的压缩率很高，可以极大得提高文件传输的速率
                                    * 但是需要服务端要对文件进行压缩，客户端进行解压，增加了两边的负载
                                    * 
                                    * compress: true
                                    */
                                    disableHostCheck: true
                                }
                            });
                li 因为我们构建的是一个 web 应用，所以我们还需要对 .html 文件编译的支持，这样也可以更直观的看清我们 webpack 工作的情况，为此我们需要安装 html-webpack-plugin 以及 html-loader 加载器：
                    pre.mt-1(v-highlight)
                        code.js.
                            $ yarn add html-webpack-plugin html-loader --dev
                    p 因为该配置在两种模式下都需要使用，所以我们在公共配置文件中进行配置：
                    pre.mt-1(v-highlight)
                        code.js.
                            const path = require('path');
                            const HTMLWebpackPlugin = require('html-webpack-plugin');
                            module.exports = {
                                // 入口配置
                                entry: {
                                    main: path.join(__dirname, '../src/index.js'),
                                },
                                // 输出配置
                                output: {
                                    filename: 'js/[name].js', // 输出文件的文件名
                                    path: path.join(__dirname, '../dist'), // 输出文件所在目录
                                },
                                // 加载器
                                module: {
                                    rules: [{
                                    test: /\.html$/,
                                    use: [{
                                            loader: "html-loader",
                                            options: {
                                                minimize: true
                                            }
                                        }]
                                    }]
                                },
                                // 插件管理
                                plugins: [
                                    //创建 .html 并自动引入打包后的文件
                                    new HTMLWebpackPlugin({
                                        filename: 'index.html',
                                        template: 'index.html',
                                        // 参照最初创建的 .html 来生成 .html
                                        inject: true,
                                        // 引入根路径下的 favicon.ico
                                        favicon: path.resolve('favicon.ico')
                                    })
                                ]
                            };
                    p 当然我们在这里还需要在对应的目录下创建 index.html，也就是在根目录下：
                    pre.mt-1(v-highlight)
                        code.html.
                            &lt;!DOCTYPE html&gt;
                            &lt;html lang="zh-CN"&gt;

                            &lt;head&gt;
                                &lt;meta charset="utf-8"&gt;
                                &lt;meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"&gt;
                                &lt;title&gt;webpack-react&lt;/title&gt;
                            &lt;/head&gt;

                            &lt;body&gt;
                                &lt;noscript&gt;
                                    You need to enable JavaScript to run this app.
                                &lt;/noscript&gt;

                                &lt;div id="root"&gt;Hello world&lt;/div&gt;
                            &lt;/body&gt;

                            &lt;/html&gt;
                li 在安装和配置完上面的基本信息之后，最后我们需要来使用上面做的一切准备，首先我们需要设置 NPM 脚本(NPM Scripts)。打开我们最初初始化项目时生成的 package.json 文件，在对应的 script 字段下进行配置：
                    pre.mt-1(v-highlight)
                        code.js.
                            "scripts": {
                                "dev": "webpack-dev-server --config config/webpack.dev.config.js",
                                "build": "webpack --config config/webpack.prod.config.js"
                            }
                    p Npm 中允许在 package.json 文件里面，使用 scripts 字段定义脚本命令。它是一个对象，它的每一个属性，都对应一段脚本。
                    p 每当执行 npm run，就会自动新建一个 Shell，在这个 Shell 里面执行指定的脚本命令，新建的这个 Shell，会将当前目录的 node_modules/.bin 子目录加入 PATH 变量，执行结束后，再将 PATH变量恢复原样，所以当前目录的 node_modules/.bin 子目录里面的所有脚本，都可以直接用脚本名调用，而不必加上路径。
                    p 因为我们的配置文件不在根目录下，在这里我们通过 
                        kbd --config
                        font  来指定执行脚本路径，现在我们就可以使用 
                        kbd npm run dev
                        font  开启 web 应用，如果前面的操作正确的化你将看到页面上显示“Hello world”的字样，并且控制台中输入“编译成功”的字样。
            h3#webpack-react-3.ml-1
                Icon(type="logo-buffer")
                | &nbsp;配置支持 ES6、JSX
            Divider
            p 如今在前端开发中 Javascript 主要是用 ES6 编写的，但并不是所有的浏览器都知道如何处理 ES6，因此我们需对 ES6 进行转换。
            p 在 webpack 的 loader(加载器)中，babel-loader 正是这样一个用于将 ES6 及以上版本转译至 ES5 的神器，要使用它我们还需要安装一些依赖：
            pre.mt-1(v-highlight)
                code.bash.
                    $ yarn add babel-loader @babel/core @babel/preset-env @babel/preset-react --dev
            p 然后需要在公共配置文件中 rules 属性配置 babel-loader 的相关信息：
            pre.mt-1(v-highlight)
                code.js.
                    {
                        test: /\.m?js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader'
                        }
                    }
            p 最后我们需要在根目录下创建 .babelrc 文件写入以下内容：
            pre.mt-1(v-highlight)
                code.js.
                    {
                        "presets": [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
            p 现在我们就可以在项目中使用 ES6或着是JSX 语法啦。
            h3#webpack-react-4.ml-1
                Icon(type="logo-buffer")
                | &nbsp;配置支持 React、React-dom
            Divider
            p 首先我们将根目录下 index.html 文件中的 "Hello world"文本删掉，然后在 ./src/index.js 文件中写入下面的内容：
            pre.mt-1(v-highlight)
                code.js.
                    import React from "react";
                    import ReactDOM from "react-dom";
                    const App = () =&gt; {
                    return (
                            &lt;div&gt;
                                &lt;p&gt;Hello world&lt;/p&gt;
                            &lt;/div&gt;
                        );
                    };
                    ReactDOM.render(&lt;App /&gt;, document.getElementById("root"));
            p 显然保存后运行服务会报错，因为到目前位置我们的项目还不支持 React、React-dom，为了进行 React 开发，首先我们要安装如下依赖：
            pre.mt-1(v-highlight)
                code.bash.
                    $ yarn add react react-dom
            p 安装完成之后，再启动项目，会发现刚刚删除的 "Hello world"文本再次出现了，而且是通过 React 来实现的，到此 webpack-react 最基础的开发环境就搭建好了，但是 webpack 方面还有许多配置和一些需要优化的地方，所以我们将在下篇文章里继续记录开发环境的搭建过程，你可以点击 
                a(href="") 搭建 webpack、react 开发环境（二）
                font  来继续查看。
            p.text-right 参考资料：
                a(href="https://www.webpackjs.com/") Webpack 中文文档
                span.border-right.border-dark.mx-1
                a(href="http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html") 阮一峰的网络日志&gt;npm scripts 使用指南
            FooterDivider
</template>

<script>
export default {
    data() {
        return {
            toTop: this.$util.toTop
        }
    }
}
</script>
