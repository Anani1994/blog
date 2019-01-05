<template lang="pug">
    BoWen
        .p-1(slot="catalog")
            Steps(direction="vertical")
                Step(title="配置处理样式文件"
                    content="配置处理样式文件"
                    status="wait"
                    @click.native="toTop('#webpack-react-2-1', 30)")
                Step(title="配置处理图片文件"
                    content="配置处理图片文件"
                    status="wait"
                    @click.native="toTop('#webpack-react-2-2', 30)")
                Step(title="配置支持 ESlint 语法检测"
                    content="配置支持 ESlint 语法检测"
                    status="wait"
                    @click.native="toTop('#webpack-react-2-3', 30)")
                Step(title="优化 webpack 配置"
                    content="优化 webpack 配置"
                    status="wait"
                    @click.native="toTop('#webpack-react-2-4', 30)")
        .px-1
            .py-3.text-center
                h1
                    Icon(type="ios-book-outline")
                    | &nbsp;搭建 webpack、react 开发环境（二）
                p.pt-1 使用 webpack 4 和 Babel 构建 React 应用开发环境
            h3#webpack-react-2-1.ml-1
                Icon(type="logo-buffer")
                | &nbsp;配置处理样式文件
            Divider
            p 到目前为止，整个工程的配置已经差不多了，对于 React 更多相关的配置将在后面继续介绍，现在我们先来对目前的工程进行优化。
            p 前面我们学习了搭建 webpack、react 开发的基础环境，但它实现的功能还远远不够，对于 webpack 的配置和 react 工程相关的基本依赖还没有实现，所以接下来我们会继续完成这些工作。
            p 首先对于开发 web 应用自然少不了要写一些样式文件来使得页面变得更加美观，现在为了提高开发的效率，通常会使用一些 CSS 的扩展语言来书写样式，如 Less、SCss 等。这里我将会安装和配置对 Less 语法的支持。
            p Less 是一门 CSS 预处理语言,它扩展了 CSS 语言,增加了变量、Mixin、函数等特性。Less 可以运行在 Node 或浏览器端。
            p 要在项目中使用它首先我们需要安装一些相关的依赖，首先我们要使用 Less，自然需要先对它进行安装，之后对于 Less 我们需要将它编译为 CSS，所以需要安装 less-loader，然后需要将 CSS 转换为 CommonJS，所以需要安装 css-loader，最后需要从 JavaScript 字符串中创建 style 节点，所以需要安装 style-loader，所以最后我们需要安装如下依赖：
            pre.mt-1(v-highlight)
                code.bash.
                    $ yarn add less less-loader css-loader style-loader --dev
            p 依赖安装完成之后，还需要在配置文件中对其进行配置：
            pre.mt-1(v-highlight)
                code.js.
                    // webpack.base.config.js
                    module.exports = {
                        ...
                        module: {
                            rules: [{
                                test: /\.less$/,
                                use: [{
                                    loader: 'style-loader' // creates style nodes from JS strings
                                }, {
                                    loader: 'css-loader' // translates CSS into CommonJS
                                }, {
                                    loader: 'less-loader' // compiles Less to CSS
                                }]
                            }]
                        }
                    };
            h3#webpack-react-2-2.ml-1
                Icon(type="logo-buffer")
                | &nbsp;配置处理图片文件
            Divider
            p 前端项目中除了 html、css、js，另外也需要处理一些图片文件，webpack 打包图片文件是通过 file-loader、url-loader 来处理的。
            p url-loader 可以将指定大小及以下的图片文件转成 base64 写入 JavaScript 中，避免额外请求图片资源，如果超过指定大小再使用 file-loader 打包图片文件。
            p 现在我们先来安装相关的依赖：
            pre.mt-1(v-highlight)
                code.bash.
                    $ yarn add url-loader file-loader --dev
            p 安装完成之后我们需要对其进行配置：
            pre.mt-1(v-highlight)
                code.js.
                    // webpack.base.config.js
                    module.exports = {
                        module: {
                            rules: [{
                                test: /\.(jpg|png|gif|svg|jpeg|woff|woff2|eot|ttf|otf|ico)$/,
                                use: [{
                                    loader: 'url-loader',
                                    options: {
                                        limit: 1024,  // 指定上面所说的指定大小的标准，超过之后将会交给 file-loader 处理
                                        // 配置 file-loader 的可选项
                                        name: 'images/[name].[ext]'
                                    }
                                }]
                            }]
                        }
                    }
            h3#webpack-react-2-3.ml-1
                Icon(type="logo-buffer")
                | &nbsp;配置支持 ESlint 语法检测
            Divider
            p 周所周知，JavaScript 是一个动态的弱类型语言，在开发中比较容易出错，导致出错的原因千奇百怪，有可能只是一时疏忽，导致拼写错误，有可能是手抖加了个符号等等，而要找出这些错误往往会花费大量的时间，为了避免类似这样的事情但不仅是如此，我们需要一个工具来协助我们的开发。
            p ESlint 是使用 Node.js 编写的，其致力于提供一个插件化的 JavaScript 代码检测工具，我们可以默认使用它的规则，也可以自定义检测规则，现在我们就来安装和使用它。
            p 首先使用 ESlint 需要安装 eslint和eslint-loader，另外由于项目中需要使用到 ES2015 的语言规范，因此需要安装 babel-eslint，将会在 .eslintrc.js 中使用它，它们的安装方式与前面相同：
            pre.mt-1(v-highlight)
                code.bash.
                    $ yarn add eslint eslint-loader babel-eslint --dev
            p 由于 React 使用了一些特定的 ESLint 无法识别的 JSX 语法，所以我们还需要安装 
                a(href="eslint-plugin-react") eslint-plugin-react
                font 来支持 React 中特定的 JSX 语法。
            pre.mt-1(v-highlight)
                code.bash.
                    $ yarn add eslint-plugin-react --dev
            p 然后我们现在先在公共的 webpack 配置文件中进行配置：
            pre.mt-1(v-highlight)
                code.js.
                    module.exports = {
                        // ...
                        module: {
                            rules: [{
                                test: /\.js$/,
                                exclude: /node_modules/,
                                use: [
                                    "babel-loader",
                                    "eslint-loader",
                                ],
                            }, ],
                        },
                        // ...
                    }
            p 因为之前我们已经对 JavaScript 文件进行了配置，所以对比起来，我们只需要在对 JavaScript 文件处理的 use 属性按照上面改为数组即可，loader 会至下而上的执行。
            p 对于 ESlint的更多配置，我们既可以在 webpack 配置文件中指定检测规则，也可以遵循最佳实践在一个专门的文件中指定检测规则。为了保证公共配置文件的整洁和可读性，我们尽量采用后面的方式。
            p 现在我们去项目的的根目录下创建两个文件：.eslintignore 和 .eslintrc.js，前者指定了不需要检查的文件或目录，后者制定了 ESLint 的详细配置信息，现在就来简单的完成这两项工作。
            pre.mt-1(v-highlight)
                code.js.
                    // .eslintignore
                    /config
            p 通常来设置这些规则是一个麻烦的事情，而且并不能保证自己设计的合理性，好在如果我们不想每次都指定这些规则，现在已经有很多符合最佳实践的规则。其中之一就是 Airbnb Style Guide，此外 Airbnb 还开源了他们自己的 ESlint 配置。
            p 接下来来实现使用 Airbnb 的 ESLint 配置，首先还是先安装相关的依赖项：
            pre.mt-1(v-highlight)
                code.bash.
                    # eslint-config-airbnb: 配置一些 eslint rules 的规范
                    # eslint-plugin-import：使用 import 的时候的一些 rules 规范
                    # eslint-plugin-jsx-a11y：jsx 的一些 rules 规范
                    $ yarn add eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y --dev
            p 对它们的使用，我们需要在 .eslintrc.js 文件中写入对应的字段，结合前面的讲解，现在来对 ESlint 进行配置：
            pre.mt-1(v-highlight)
                code.js.
                    //- .eslintrc.js
                    module.exports = {
                        // 解析器用于解析代码
                        parser: 'babel-eslint',
                        // 使用的扩展库
                        extends: ['airbnb'],
                        // 环境，可以设置环来做区别判断
                        env: {
                            browser: true,
                            node: true,
                            es6: true,
                            commonjs: true
                        },
                        // 第三方插件
                        plugins: [
                            'react',
                            'jsx-a11y'
                        ],
                        // 解析器配置
                        parserOptions: {
                            ecmaFeatures: {
                                jsx: true
                            }
                        },
                        // 规则配置
                        rules: {
                            // enable additional rules
                            'no-console': 2 // 禁止使用consol
                        }
                    }
            p 现在每次我们进行编译时，ESlint 就会对指定的代码进行检查，不符合规范时将会在 console 中报错。
            p.text-info 如果项目使用了 Git，我们还可以通过使用 pre-commit 钩子在每次提交前检测代码，如果检测失败则禁止提交。
            p 首先我们需要安装
            pre.mt-1(v-highlight)
                code.bash.
                    $ yarn add pre-commit --dev
            p 然后在 package.json 文件中的 script 字段中配置 eslint-commit 命令：
            pre.mt-1(v-highlight)
                code.js.
                    "scripts": {
                        "eslint-commit": "eslint --ext .js src"
                    }
            p 最后在 package.json 中配置在提交前 pre-commit 需要运行的命令：
            pre.mt-1(v-highlight)
                code.js.
                    "pre-commit": [
                        "eslint-commit"
                    ]
            p 完成之后，在每次提交之前，都会运行 eslint-commit 命令进行检测，如果检测到有违反代码规则的情况，则会导致提交失败。
            h3#webpack-react-2-4.ml-1
                Icon(type="logo-buffer")
                | &nbsp;优化 webpack 配置
            Divider
            ul
                li
                    font.text-info 减少打包的时候重复代码。
                    p Babel 对诸如 _extend 之类的常见函数使用非常小的助手。默认情况下，这将被添加到每个需要它的文件中，所以会产生许多重复代码。
                    p 正因为上面的缺陷，所以我们需要 Babel 运行时作为一个单独的模块以避免重复，要实现这个功能我们需要使用到 babel-plugin-transform-runtime，另外同时还需要依赖 babel-runtime，所以接下来就对它们进行安装：
                    pre.mt-1(v-highlight)
                        code.bash.
                            $ yarn add @babel/plugin-transform-runtime @babel/runtime --dev
                    p 然后在 .babelrc 文件中进行配置：
                    pre.mt-1(v-highlight)
                        code.js.
                            {
                                "presets": [
                                    "@babel/preset-env",
                                    "@babel/preset-react"
                                ],
                                "plugins": ["@babel/plugin-transform-runtime"]
                            }
                li
                    font.text-info 自动加 CSS3 前缀。
                    p 因为并不是所有的浏览器对 CSS3 的支持都那么好，所以需要针对一些浏览器添加相应的前缀，而在所有的地方自己添加会显得麻烦，有时还会忘记导致样式错乱，所以我们可以让 webpack 来自动完成。
                    p 想要 webpack 帮忙自动加上“-webkit-”之类的 CSS 前缀，我们需要用到 postcss-loader 和它的插件 autoprefixer：
                    pre.mt-1(v-highlight)
                        code.bash.
                            $ yarn add postcss-loader autoprefixer --dev
                    p 然后在公共配置文件指定使用：
                    pre.mt-1(v-highlight)
                        code.js.
                            module.exports = {
                                module: {
                                    rules: [{
                                        test: /\.less$/,
                                        use: [{
                                            loader: 'style-loader' // creates style nodes from JS strings
                                        }, {
                                            loader: 'css-loader' // translates CSS into CommonJS
                                        }, {
                                            loader: 'postcss-loader', // Automatically add browser prefix
                                        }, {
                                            loader: 'less-loader' // compiles Less to CSS
                                        }]
                                    }, ]
                                }
                            }
                    p 最后在项目的根目录下添加 .postcssrc.js 文件对其进行配置：
                    pre.mt-1(v-highlight)
                        code.js.
                            module.exports = { 
                                plugins: { 
                                    'autoprefixer': {browsers: 'last 5 version'} 
                                } 
                            }
                li
                    font.text-info 分离 CSS 并消除冗余的 css代码。
                    p 我们知道 webpack 的理念就是把所有的东西都打包到 JavaScript 文件中，包括 CSS、图片等等，这样可以减少http请求，但劣势也很明显，随着项目越来越大，JavaScript 文件会越来越大，同时为了对项目进行更好的管理，我们就需要对 CSS 文件进行分离。
                    p 首先我们需要安装 mini-css-extract-plugin：
                    pre.mt-1(v-highlight)
                        code.bash.
                            $ yarn add mini-css-extract-plugin --dev
                    p 然后在生产配置文件中进行配置，我们在这里先不设置，放在下面一起进行配置。
                    p 另外平时我们去开发一些项目的时候，会引入一些框架：比如 bootstrap，引入相关框架后，文件会变得很大，而其中的代码我们实际用到的却很少，所以这时候我们需要想办法优化这些代码，把这些冗余代码去掉。
                    p 在 webpack 中我们可以使用 purifycss-webpack 达到该目的，首先我们需要安装相关依赖：
                    pre.mt-1(v-highlight)
                        code.bash.
                            $ yarn add purifycss-webpack glob purify-css --dev
                    p 然后在生产模式下的配置文件中引入 purifycss-webpack 并在 plugins 中作出相应，连同下面需要的设置，最后生产模式下的配置文件如下所示：
                    pre.mt-1(v-highlight)
                        code.js.
                            const path = require('path');
                            // 引入公共配置
                            const webpackBaseConfig = require('./webpack.base.config');
                            // 合并配置的插件
                            const webpackMerge = require('webpack-merge');
                            // 用于分离 CSS
                            const MiniCssExtractPlugin = require("mini-css-extract-plugin");
                            // 删除冗余 CSS
                            const glob = require('glob');
                            const PurifyCssWebpack = require('purifycss-webpack');

                            module.exports = webpackMerge(webpackBaseConfig, {
                                // 指定模式
                                mode: 'production',
                                // 加载器
                                module: {
                                    rules: [{
                                        test: /\.less$/,
                                        use: [{
                                            loader: MiniCssExtractPlugin.loader // creates style nodes from JS strings
                                        }, {
                                            loader: 'css-loader' // translates CSS into CommonJS
                                        }, {
                                            loader: 'postcss-loader', // Automatically add browser prefix
                                        }, {
                                            loader: 'less-loader' // compiles Less to CSS
                                        }]
                                    }]
                                },
                                // 插件配置
                                plugins: [
                                    new PurifyCssWebpack({
                                        paths: glob.sync(path.join(__dirname, '../*.html'))
                                    }),
                                    new MiniCssExtractPlugin({
                                        // Options similar to the same options in webpackOptions.output
                                        // both options are optional
                                        filename: "css/[name].css",
                                        // chunkFilename: "[id].css"
                                    })
                                ]
                            });
            p 好了，到这里本篇就算结束啦，这里更多的是介绍了 webpack 方面的一些配置和插件的使用，以及一些可以优化的地方，如果你想要知道最初的搭建步骤，你可以点击 
                a(href="#/articles/frontend/React/webpack-react") 搭建 webpack、react 开发环境（一）
                font  来继续查看。如果你需要查看 React 相关插件和库的安装可以点击 
                a(href="#/articles/frontend/React/webpack-react-three") 搭建 webpack、react 开发环境（三）
                font  来继续查看。
            p.text-right 参考资料：
                a(href="https://www.webpackjs.com/") Webpack 中文文档
                span.border-right.border-dark.mx-1
                a(href="https://meyerweb.com/eric/tools/css/reset/") Reset CSS
                span.border-right.border-dark.mx-1
                a(href="https://www.robinwieruch.de/react-eslint-webpack-babel/") React Code Style with ESLint + Babel + Webpack
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
