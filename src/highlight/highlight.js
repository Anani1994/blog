import Hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
let highLight = {};
highLight.install = function (Vue, options) {
  Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
      Hljs.highlightBlock(block)
    });
  });
};
export default highLight;
