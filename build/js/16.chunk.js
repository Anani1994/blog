(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{337:function(e,t,s){"use strict";s.r(t);var a=s(507),i=s(366);for(var n in i)"default"!==n&&function(e){s.d(t,e,function(){return i[e]})}(n);var r=s(0),l=Object(r.a)(i.default,a.a,a.b,!1,null,null,null);l.options.__file="src/views/articles/frontend/React/WebpackReactTwo.vue",t.default=l.exports},366:function(e,t,s){"use strict";s.r(t);var a=s(367),i=s.n(a);for(var n in a)"default"!==n&&function(e){s.d(t,e,function(){return a[e]})}(n);t.default=i.a},367:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{toTop:this.$util.toTop}}}},507:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("BoWen",[s("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[s("Steps",{attrs:{direction:"vertical"}},[s("Step",{attrs:{title:"配置处理样式文件",content:"配置处理样式文件",status:"wait"},nativeOn:{click:function(t){e.toTop("#webpack-react-2-1",30)}}}),s("Step",{attrs:{title:"配置处理图片文件",content:"配置处理图片文件",status:"wait"},nativeOn:{click:function(t){e.toTop("#webpack-react-2-2",30)}}}),s("Step",{attrs:{title:"配置支持 ESlint 语法检测",content:"配置支持 ESlint 语法检测",status:"wait"},nativeOn:{click:function(t){e.toTop("#webpack-react-2-3",30)}}}),s("Step",{attrs:{title:"优化 webpack 配置",content:"优化 webpack 配置",status:"wait"},nativeOn:{click:function(t){e.toTop("#webpack-react-2-4",30)}}})],1)],1),s("div",{staticClass:"px-1"},[s("div",{staticClass:"py-3 text-center"},[s("h1",[s("Icon",{attrs:{type:"ios-book-outline"}}),e._v(" 搭建 webpack、react 开发环境（二）")],1),s("p",{staticClass:"pt-1"},[e._v("使用 webpack 4 和 Babel 构建 React 应用开发环境")])]),s("h3",{staticClass:"ml-1",attrs:{id:"webpack-react-2-1"}},[s("Icon",{attrs:{type:"logo-buffer"}}),e._v(" 配置处理样式文件")],1),s("Divider"),s("p",[e._v("到目前为止，整个工程的配置已经差不多了，对于 React 更多相关的配置将在后面继续介绍，现在我们先来对目前的工程进行优化。")]),s("p",[e._v("前面我们学习了搭建 webpack、react 开发的基础环境，但它实现的功能还远远不够，对于 webpack 的配置和 react 工程相关的基本依赖还没有实现，所以接下来我们会继续完成这些工作。")]),s("p",[e._v("首先对于开发 web 应用自然少不了要写一些样式文件来使得页面变得更加美观，现在为了提高开发的效率，通常会使用一些 CSS 的扩展语言来书写样式，如 Less、SCss 等。这里我将会安装和配置对 Less 语法的支持。")]),s("p",[e._v("Less 是一门 CSS 预处理语言,它扩展了 CSS 语言,增加了变量、Mixin、函数等特性。Less 可以运行在 Node 或浏览器端。")]),s("p",[e._v("要在项目中使用它首先我们需要安装一些相关的依赖，首先我们要使用 Less，自然需要先对它进行安装，之后对于 Less 我们需要将它编译为 CSS，所以需要安装 less-loader，然后需要将 CSS 转换为 CommonJS，所以需要安装 css-loader，最后需要从 JavaScript 字符串中创建 style 节点，所以需要安装 style-loader，所以最后我们需要安装如下依赖：")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"mt-1"},[s("code",{staticClass:"bash"},[e._v("$ yarn add less less-loader css-loader style-loader --dev")])]),s("p",[e._v("依赖安装完成之后，还需要在配置文件中对其进行配置：")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"mt-1"},[s("code",{staticClass:"js"},[e._v("// webpack.base.config.js\nmodule.exports = {\n    ...\n    module: {\n        rules: [{\n            test: /\\.less$/,\n            use: [{\n                loader: 'style-loader' // creates style nodes from JS strings\n            }, {\n                loader: 'css-loader' // translates CSS into CommonJS\n            }, {\n                loader: 'less-loader' // compiles Less to CSS\n            }]\n        }]\n    }\n};")])]),s("h3",{staticClass:"ml-1",attrs:{id:"webpack-react-2-2"}},[s("Icon",{attrs:{type:"logo-buffer"}}),e._v(" 配置处理图片文件")],1),s("Divider"),s("p",[e._v("前端项目中除了 html、css、js，另外也需要处理一些图片文件，webpack 打包图片文件是通过 file-loader、url-loader 来处理的。")]),s("p",[e._v("url-loader 可以将指定大小及以下的图片文件转成 base64 写入 JavaScript 中，避免额外请求图片资源，如果超过指定大小再使用 file-loader 打包图片文件。")]),s("p",[e._v("现在我们先来安装相关的依赖：")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"mt-1"},[s("code",{staticClass:"bash"},[e._v("$ yarn add url-loader file-loader --dev")])]),s("p",[e._v("安装完成之后我们需要对其进行配置：")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"mt-1"},[s("code",{staticClass:"js"},[e._v("// webpack.base.config.js\nmodule.exports = {\n    module: {\n        rules: [{\n            test: /\\.(jpg|png|gif|svg|jpeg|woff|woff2|eot|ttf|otf|ico)$/,\n            use: [{\n                loader: 'url-loader',\n                options: {\n                    limit: 1024,  // 指定上面所说的指定大小的标准，超过之后将会交给 file-loader 处理\n                    // 配置 file-loader 的可选项\n                    name: 'images/[name].[ext]'\n                }\n            }]\n        }]\n    }\n}")])]),s("h3",{staticClass:"ml-1",attrs:{id:"webpack-react-2-3"}},[s("Icon",{attrs:{type:"logo-buffer"}}),e._v(" 配置支持 ESlint 语法检测")],1),s("Divider"),s("p",[e._v("周所周知，JavaScript 是一个动态的弱类型语言，在开发中比较容易出错，导致出错的原因千奇百怪，有可能只是一时疏忽，导致拼写错误，有可能是手抖加了个符号等等，而要找出这些错误往往会花费大量的时间，为了避免类似这样的事情但不仅是如此，我们需要一个工具来协助我们的开发。")]),s("p",[e._v("ESlint 是使用 Node.js 编写的，其致力于提供一个插件化的 JavaScript 代码检测工具，我们可以默认使用它的规则，也可以自定义检测规则，现在我们就来安装和使用它。")]),s("p",[e._v("首先使用 ESlint 需要安装 eslint和eslint-loader，另外由于项目中需要使用到 ES2015 的语言规范，因此需要安装 babel-eslint，将会在 .eslintrc.js 中使用它，它们的安装方式与前面相同：")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"mt-1"},[s("code",{staticClass:"bash"},[e._v("$ yarn add eslint eslint-loader babel-eslint --dev")])]),s("p",[e._v("由于 React 使用了一些特定的 ESLint 无法识别的 JSX 语法，所以我们还需要安装 "),s("a",{attrs:{href:"eslint-plugin-react"}},[e._v("eslint-plugin-react")]),s("font",[e._v("来支持 React 中特定的 JSX 语法。")])],1),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"mt-1"},[s("code",{staticClass:"bash"},[e._v("$ yarn add eslint-plugin-react --dev")])]),s("p",[e._v("然后我们现在先在公共的 webpack 配置文件中进行配置：")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"mt-1"},[s("code",{staticClass:"js"},[e._v('module.exports = {\n    // ...\n    module: {\n        rules: [{\n            test: /\\.js$/,\n            exclude: /node_modules/,\n            use: [\n                "babel-loader",\n                "eslint-loader",\n            ],\n        }, ],\n    },\n    // ...\n}')])]),s("p",[e._v("因为之前我们已经对 JavaScript 文件进行了配置，所以对比起来，我们只需要在对 JavaScript 文件处理的 use 属性按照上面改为数组即可，loader 会至下而上的执行。")]),s("p",[e._v("对于 ESlint的更多配置，我们既可以在 webpack 配置文件中指定检测规则，也可以遵循最佳实践在一个专门的文件中指定检测规则。为了保证公共配置文件的整洁和可读性，我们尽量采用后面的方式。")]),s("p",[e._v("现在我们去项目的的根目录下创建两个文件：.eslintignore 和 .eslintrc.js，前者指定了不需要检查的文件或目录，后者制定了 ESLint 的详细配置信息，现在就来简单的完成这两项工作。")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"mt-1"},[s("code",{staticClass:"js"},[e._v("// .eslintignore\n/config")])]),s("p",[e._v("通常来设置这些规则是一个麻烦的事情，而且并不能保证自己设计的合理性，好在如果我们不想每次都指定这些规则，现在已经有很多符合最佳实践的规则。其中之一就是 Airbnb Style Guide，此外 Airbnb 还开源了他们自己的 ESlint 配置。")]),s("p",[e._v("接下来来实现使用 Airbnb 的 ESLint 配置，首先还是先安装相关的依赖项：")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"mt-1"},[s("code",{staticClass:"bash"},[e._v("# eslint-config-airbnb: 配置一些 eslint rules 的规范\n# eslint-plugin-import：使用 import 的时候的一些 rules 规范\n# eslint-plugin-jsx-a11y：jsx 的一些 rules 规范\n$ yarn add eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y --dev")])]),s("p",[e._v("对它们的使用，我们需要在 .eslintrc.js 文件中写入对应的字段，结合前面的讲解，现在来对 ESlint 进行配置：")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"mt-1"},[s("code",{staticClass:"js"},[e._v("//- .eslintrc.js\nmodule.exports = {\n    // 解析器用于解析代码\n    parser: 'babel-eslint',\n    // 使用的扩展库\n    extends: ['airbnb'],\n    // 环境，可以设置环来做区别判断\n    env: {\n        browser: true,\n        node: true,\n        es6: true,\n        commonjs: true\n    },\n    // 第三方插件\n    plugins: [\n        'react',\n        'jsx-a11y'\n    ],\n    // 解析器配置\n    parserOptions: {\n        ecmaFeatures: {\n            jsx: true\n        }\n    },\n    // 规则配置\n    rules: {\n        // enable additional rules\n        'no-console': 2 // 禁止使用consol\n    }\n}")])]),s("p",[e._v("现在每次我们进行编译时，ESlint 就会对指定的代码进行检查，不符合规范时将会在 console 中报错。")]),s("p",{staticClass:"text-info"},[e._v("如果项目使用了 Git，我们还可以通过使用 pre-commit 钩子在每次提交前检测代码，如果检测失败则禁止提交。")]),s("p",[e._v("首先我们需要安装")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"mt-1"},[s("code",{staticClass:"bash"},[e._v("$ yarn add pre-commit --dev")])]),s("p",[e._v("然后在 package.json 文件中的 script 字段中配置 eslint-commit 命令：")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"mt-1"},[s("code",{staticClass:"js"},[e._v('"scripts": {\n    "eslint-commit": "eslint --ext .js src"\n}')])]),s("p",[e._v("最后在 package.json 中配置在提交前 pre-commit 需要运行的命令：")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"mt-1"},[s("code",{staticClass:"js"},[e._v('"pre-commit": [\n    "eslint-commit"\n]')])]),s("p",[e._v("完成之后，在每次提交之前，都会运行 eslint-commit 命令进行检测，如果检测到有违反代码规则的情况，则会导致提交失败。")]),s("h3",{staticClass:"ml-1",attrs:{id:"webpack-react-2-4"}},[s("Icon",{attrs:{type:"logo-buffer"}}),e._v(" 优化 webpack 配置")],1),s("Divider"),s("ul",[s("li",[s("font",{staticClass:"text-info"},[e._v("减少打包的时候重复代码。")]),s("p",[e._v("Babel 对诸如 _extend 之类的常见函数使用非常小的助手。默认情况下，这将被添加到每个需要它的文件中，所以会产生许多重复代码。")]),s("p",[e._v("正因为上面的缺陷，所以我们需要 Babel 运行时作为一个单独的模块以避免重复，要实现这个功能我们需要使用到 babel-plugin-transform-runtime，另外同时还需要依赖 babel-runtime，所以接下来就对它们进行安装：")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"mt-1"},[s("code",{staticClass:"bash"},[e._v("$ yarn add @babel/plugin-transform-runtime @babel/runtime --dev")])]),s("p",[e._v("然后在 .babelrc 文件中进行配置：")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"mt-1"},[s("code",{staticClass:"js"},[e._v('{\n    "presets": [\n        "@babel/preset-env",\n        "@babel/preset-react"\n    ],\n    "plugins": ["@babel/plugin-transform-runtime"]\n}')])])],1),s("li",[s("font",{staticClass:"text-info"},[e._v("自动加 CSS3 前缀。")]),s("p",[e._v("因为并不是所有的浏览器对 CSS3 的支持都那么好，所以需要针对一些浏览器添加相应的前缀，而在所有的地方自己添加会显得麻烦，有时还会忘记导致样式错乱，所以我们可以让 webpack 来自动完成。")]),s("p",[e._v("想要 webpack 帮忙自动加上“-webkit-”之类的 CSS 前缀，我们需要用到 postcss-loader 和它的插件 autoprefixer：")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"mt-1"},[s("code",{staticClass:"bash"},[e._v("$ yarn add postcss-loader autoprefixer --dev")])]),s("p",[e._v("然后在公共配置文件指定使用：")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"mt-1"},[s("code",{staticClass:"js"},[e._v("module.exports = {\n    module: {\n        rules: [{\n            test: /\\.less$/,\n            use: [{\n                loader: 'style-loader' // creates style nodes from JS strings\n            }, {\n                loader: 'css-loader' // translates CSS into CommonJS\n            }, {\n                loader: 'postcss-loader', // Automatically add browser prefix\n            }, {\n                loader: 'less-loader' // compiles Less to CSS\n            }]\n        }, ]\n    }\n}")])]),s("p",[e._v("最后在项目的根目录下添加 .postcssrc.js 文件对其进行配置：")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"mt-1"},[s("code",{staticClass:"js"},[e._v("module.exports = { \n    plugins: { \n        'autoprefixer': {browsers: 'last 5 version'} \n    } \n}")])])],1),s("li",[s("font",{staticClass:"text-info"},[e._v("分离 CSS 并消除冗余的 css代码。")]),s("p",[e._v("我们知道 webpack 的理念就是把所有的东西都打包到 JavaScript 文件中，包括 CSS、图片等等，这样可以减少http请求，但劣势也很明显，随着项目越来越大，JavaScript 文件会越来越大，同时为了对项目进行更好的管理，我们就需要对 CSS 文件进行分离。")]),s("p",[e._v("首先我们需要安装 mini-css-extract-plugin：")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"mt-1"},[s("code",{staticClass:"bash"},[e._v("$ yarn add mini-css-extract-plugin --dev")])]),s("p",[e._v("然后在生产配置文件中进行配置，我们在这里先不设置，放在下面一起进行配置。")]),s("p",[e._v("另外平时我们去开发一些项目的时候，会引入一些框架：比如 bootstrap，引入相关框架后，文件会变得很大，而其中的代码我们实际用到的却很少，所以这时候我们需要想办法优化这些代码，把这些冗余代码去掉。")]),s("p",[e._v("在 webpack 中我们可以使用 purifycss-webpack 达到该目的，首先我们需要安装相关依赖：")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"mt-1"},[s("code",{staticClass:"bash"},[e._v("$ yarn add purifycss-webpack glob purify-css --dev")])]),s("p",[e._v("然后在生产模式下的配置文件中引入 purifycss-webpack 并在 plugins 中作出相应，连同下面需要的设置，最后生产模式下的配置文件如下所示：")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"mt-1"},[s("code",{staticClass:"js"},[e._v("const path = require('path');\n// 引入公共配置\nconst webpackBaseConfig = require('./webpack.base.config');\n// 合并配置的插件\nconst webpackMerge = require('webpack-merge');\n// 用于分离 CSS\nconst MiniCssExtractPlugin = require(\"mini-css-extract-plugin\");\n// 删除冗余 CSS\nconst glob = require('glob');\nconst PurifyCssWebpack = require('purifycss-webpack');\n\nmodule.exports = webpackMerge(webpackBaseConfig, {\n    // 指定模式\n    mode: 'production',\n    // 加载器\n    module: {\n        rules: [{\n            test: /\\.less$/,\n            use: [{\n                loader: MiniCssExtractPlugin.loader // creates style nodes from JS strings\n            }, {\n                loader: 'css-loader' // translates CSS into CommonJS\n            }, {\n                loader: 'postcss-loader', // Automatically add browser prefix\n            }, {\n                loader: 'less-loader' // compiles Less to CSS\n            }]\n        }]\n    },\n    // 插件配置\n    plugins: [\n        new PurifyCssWebpack({\n            paths: glob.sync(path.join(__dirname, '../*.html'))\n        }),\n        new MiniCssExtractPlugin({\n            // Options similar to the same options in webpackOptions.output\n            // both options are optional\n            filename: \"css/[name].css\",\n            // chunkFilename: \"[id].css\"\n        })\n    ]\n});")])])],1)]),s("p",[e._v("好了，到这里本篇就算结束啦，这里更多的是介绍了 webpack 方面的一些配置和插件的使用，以及一些可以优化的地方，如果你想要知道最初的搭建步骤，你可以点击 "),s("a",{attrs:{href:"#/articles/frontend/React/webpack-react"}},[e._v("搭建 webpack、react 开发环境（一）")]),s("font",[e._v(" 来继续查看。如果你需要查看 React 相关插件和库的安装可以点击 ")]),s("a",{attrs:{href:"#/articles/frontend/React/webpack-react-three"}},[e._v("搭建 webpack、react 开发环境（三）")]),s("font",[e._v(" 来继续查看。")])],1),s("p",{staticClass:"text-right"},[e._v("参考资料："),s("a",{attrs:{href:"https://www.webpackjs.com/"}},[e._v("Webpack 中文文档")]),s("span",{staticClass:"border-right border-dark mx-1"}),s("a",{attrs:{href:"https://meyerweb.com/eric/tools/css/reset/"}},[e._v("Reset CSS")]),s("span",{staticClass:"border-right border-dark mx-1"}),s("a",{attrs:{href:"https://www.robinwieruch.de/react-eslint-webpack-babel/"}},[e._v("React Code Style with ESLint + Babel + Webpack")])]),s("FooterDivider")],1)])},i=[];a._withStripped=!0,s.d(t,"a",function(){return a}),s.d(t,"b",function(){return i})}}]);