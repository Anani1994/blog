<template>
    <BoWen>
        <div class="p-1" slot="catalog">
            <Steps direction="vertical">
                <Step
                    title="注册全局可用的函数"
                    content="注册全局函数后，可以在各个组件中使用。"
                    status="wait"
                    @click.native="toTop('#note-00-fun', 30)">
                </Step>
                <Step
                    title="注册全局组件"
                    content="注册全局组件，减少引入组件等沉余代码。"
                    @click.native="toTop('#note-00-block', 30)">
                </Step>
            </Steps>
        </div>
        <div class="px-1">
            <div class="py-3 text-center">
                <h1><Icon type="ios-book-outline" /> 全局注册组件和函数</h1>
                <p class="pt-1">在 <code>webpack-vue</code> 项目中注册全局可用组件和函数</p>
            </div>
            <h3 id="note-00-fun" class="ml-1"><Icon type="logo-buffer" /> 注册全局可用的函数</h3>
            <Divider />
            <pre v-highlight>
                <code class="js">// main.js
import util from './util.js';
Vue.prototype.$util = util;</code>
            </pre>
            <pre v-highlight>
                <code class="js">// 在组件中使用
method:{
    helloWorld() {
        // sayHello 为 util 上的方法
        this.$util.sayHello();
    }
}</code>
            </pre>
            <h3 id="note-00-block" class="ml-1"><Icon type="logo-buffer" /> 注册全局组件</h3>
            <Divider />
            <pre v-highlight>
                <code class="js">// main.js
// 自定义全局组件
import defineSubassemblies from './components/defineSubassembly.js';
Vue.use(defineSubassemblies);</code>
            </pre>
            <pre v-highlight>
                <code class="js">// defineSubassembly.js
import FullPage from './fullpage/fullpage.vue';
import PageItem from './fullpage/components/page.vue';

const defineSubassemblies = {
    install:function (Vue) {
        Vue.component('FullPage',FullPage);
        Vue.component('PageItem',PageItem);
    }
};

export default defineSubassemblies;
</code>
            </pre>
            <FooterDivider></FooterDivider>
        </div>
    </BoWen>
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

