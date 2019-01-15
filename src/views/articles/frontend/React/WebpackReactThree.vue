<template lang="pug">
    BoWen
        .p-1(slot="catalog")
            Steps(direction="vertical")
                Step(title="配置 react-router-dom" 
                    content="配置 react-router-dom"
                    status="wait"
                    @click.native="toTop('#webpack-react-3-1', 30)")
                Step(title="配置 Redux" 
                    content="配置 Redux"
                    status="wait"
                    @click.native="toTop('#webpack-react-3-2', 30)")
                Step(title="配置 其它" 
                    content="配置 其它"
                    status="wait"
                    @click.native="toTop('#webpack-react-3-3', 30)")
        .px-1
            .py-3.text-center
                h1
                    Icon(type="ios-book-outline")
                    | &nbsp;搭建 webpack、react 开发环境（三）
                p.pt-1 使用 webpack 4 和 Babel 构建 React 应用开发环境
            h3#webpack-react-3-1.ml-1
                Icon(type="logo-buffer")
                | &nbsp;配置 react-router-dom
            Divider
            p 我们开发一个 React 工程肯定不是一两个“页面”就可以满足需求的，所以我们需要一个在多个“页面”中跳转的功能，在使用 React 构建的单页面应用中，要想实现页面间的跳转，首先想到的就是使用路由。
            p 考虑 React 工程中的路由时，通常会想到 react-router 和 react-router-dom，其中 React-router 提供了一些 router 的核心 Api，包括  Router, Route, Switch 等，但是它没有提供 Dom 操作进行跳转的 Api，而 React-router-dom 让我们可以通过dom的事件控制路由。
            p 由于我们这次只是搭建开发环境，所以就不再做更多的介绍，现在来做一个简单的说明，首先我们需要安装 react-router-dom：
            pre.mt-1(v-highlight)
                code.bash.
                    $ yarn add react-router-dom
            p 然后我们简单的使用一下，以验证安装的结果和使用的效果，我们先在跟组件 App 中的同目录下创建两个组件：
            pre.mt-1(v-highlight)
                code.js.
                    // Home.js
                    import React from 'react';
                    import { Link } from 'react-router-dom';

                    export default () =&gt; (
                    &lt;div&gt;
                        &lt;div&gt;home page&lt;/div&gt;
                        &lt;Link to="/product"&gt;go&lt;/Link&gt;
                    &lt;/div&gt;
                    );

                    // Product.js
                    import React from 'react';

                    export default () =&gt; (
                    &lt;div&gt;product page&lt;/div&gt;
                    );
            p 然后我们在主组件 App 中引入相关的依赖并进行简单的使用：
            pre.mt-1(v-highlight)
                code.js.
                    import React from 'react';
                    import { BrowserRouter, Route } from 'react-router-dom';

                    import Home from './Home';
                    import Product from './Product';

                    const App = () =&gt; (
                    &lt;BrowserRouter&gt;
                        &lt;div&gt;
                        &lt;Route path="/" exact component={Home} /&gt;
                        &lt;Route path="/product" exact component={Product} /&gt;
                        &lt;/div&gt;
                    &lt;/BrowserRouter&gt;
                    );

                    export default App;
            p 现在我们进入项目时会在根目录下，所以会自动进入 Home 页面，当我们点击 go 字段的时候就会跳转到 Product 页面，也就意味着已经安装成功了。
            h3#webpack-react-3-2.ml-1
                Icon(type="logo-buffer")
                | &nbsp;配置 Redux
            Divider
            p 在 React 中有一个单项数据流的概念，在大型应用中单靠 React 对于数据的管理并不理想，所以我们需要依赖 Redux 来进行管理。
            p Redux 是一个面向 JavaScript 应用的可预测状态容器，它能够让你的页面的数据管理更轻松，现在我们就来对它进行安装并进行简单的使用，首先我们安装 Redux：
            pre.mt-1(v-highlight)
                code.bash.
                    $ yarn add redux
            p 然后我们在 src 目录下创建 store 目录，并添加 index.js 和 reducers.js 文件：
            pre.mt-1(v-highlight)
                code.js.
                    // index.js
                    import { createStore } from 'redux';

                    import reducer from './reducers';

                    const store = createStore(reducer);

                    export default store;
                    
                    // reducers.js
                    const defaultState = {
                        text: 'Hello world',
                    };

                    /* 必须返回一个纯函数 */
                    export default (state = defaultState) => state;
            p 最后我们改变一下 Home 组件以其来测试配置和使用的情况：
            pre.mt-1(v-highlight)
                code.js.
                    import React from 'react';
                    import { Link } from 'react-router-dom';
                    import store from './store';

                    class Home extends React.Component {
                        constructor(props) {
                            super(props);

                            this.state = store.getState();
                            const { text } = this.state;
                            this.text = text;
                        }

                        render() {
                            return (
                            &lt;div&gt;
                                &lt;div&gt;{this.text}&lt;/div&gt;
                                &lt;Link to="/product"&gt;go&lt;/Link&gt;
                            &lt;/div&gt;
                            );
                        }
                    }

                    export default Home;
            p 现在页面中的正常情况会显示 store 存储的数据，也就是“Hello world”字样。
            h3#webpack-react-3-3.ml-1
                Icon(type="logo-buffer")
                | &nbsp;配置 其它
            Divider
            p 接下来会对配置的对象列出一个列表来，就不再像之前这样在页面中同时列出做出的修改，如果有兴趣的同学，可以直接点击 
                a(href="https://github.com/Anani1994/webpack-react") show me the code
                font  直接查看源码，也可以查看提交历史中对应 commit 中的内容。
            p 毕竟主要是配置，使用方法三两句就说不清楚了，所以暂且这样：
            ul
                li
                    a(href="https://github.com/axios/axios") Axios
                li
                    a(href="https://github.com/facebook/prop-types") PropTypes
                li
                    a(href="https://github.com/yahoo/react-intl") ReactIntl
            p 最后，如果在开发中有使用到 Git 的话，那么结合 
                a(href="https://github.com/typicode/husky") husky
                font  和 
                a(href="https://github.com/observing/pre-commit") lint-staged
                font  配置代码检查工作流将会非常的棒，在我们配置完成之后，每当我们提交时，都会执行代码检查工作，如果代码的书写不规范的话将会取消本次提交。
            p 当然这两者的功能并不仅仅如此，感兴趣的朋友可以点击上面的链接了解更多，这里我们先来简单的配置体验一下它的功能，首先还是安装依赖：
            pre.mt-1(v-highlight)
                code.bash.
                    $ yarn add husky lint-staged --dev
            p 然后我们在 package.json 文件中对它们进行配置：
            pre.mt-1(v-highlight)
                code.json.
                    {
                        "scripts": {
                            "precommit": "lint-staged"
                        },
                        "lint-staged": {
                            "src/**/*.js": "eslint"
                        }
                    }
            p 现在我们每次提价前就会执行代码检测啦，你可以特意书写一行不符合规范的代码来来进行测试。
            p 环境的配置到这里就告一段落啦，这里更多的是介绍了 React 相关插件和库的安装，如果你想要知道最初的搭建步骤，你可以点击 
                a(href="#/articles/frontend/React/webpack-react") 搭建 webpack、react 开发环境（一）
                font  来继续查看。如果你需要查看 webpack 方面的一些配置和插件的使用，以及一些可以优化的地方可以点击 
                a(href="#/articles/frontend/React/webpack-react-two") 搭建 webpack、react 开发环境（二）
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
