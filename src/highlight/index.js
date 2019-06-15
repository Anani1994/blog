import Vue from 'vue';
import Hljs from 'highlight.js';
// 按需引入主题的样式文件
import 'highlight.js/styles/monokai-sublime.css';

const highLight = {};
highLight.install = function (Vue) {
    Vue.directive('highlight', function (el) {
        let blocks = el.querySelectorAll('pre code');
        blocks.forEach((block) => {
            Hljs.highlightBlock(block)
        });
    });
};

Vue.use(highLight)
