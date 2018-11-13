<template>
  <div class="index-container link-ball-container d-flex justify-content-center align-items-center">
    <div class="link-ball-container">
      <div class="link-ball">
        <a href="/#/articles/frontend/VueJS/note-00">Vue 注册全局组件和函数</a>
        <a href="/#/articles/others/notes/note-02">问题收录集（1）</a>
        <a href="/#/articles/others/notes/note-03">问题收录集（2）</a>
        <a href="/#/articles/others/Git/issue-01">Could not restore untracked files from stash</a>
        <a href="/#/articles/frontend/JS/RequireJS-3">RequireJS (四)</a>
        <a href="/#/articles/frontend/JS/RequireJS-2">RequireJS (三)</a>
        <a href="/#/articles/frontend/JS/RequireJS-1">RequireJS (二)</a>
        <a href="/#/articles/frontend/JS/RequireJS">RequireJS (一)</a>
        <a href="/#/articles/frontend/JS/JS-03">JS-操作符 (一)</a>
        <a href="/#/articles/frontend/JS/JS-02">JS-数据类型</a>
        <a href="/#/articles/frontend/JS/JS-01">JS-简介</a>
        <a href="/#/articles/frontend/JS/top-left-width-height">详解 offsetTop、scrollTop 等DOM属性</a>
        <a href="/#/articles/frontend/JS/trigger-event">JavaScript 手动触发事件</a>
        <a href="/#/articles/frontend/JS/new-trigger-event">JavaScript 手动触发事件（新）</a>
        <a href="/#/articles/frontend/JS/throttle-debounce">JavaScript 函数节流和函数防抖</a>
        <a href="/#/articles/frontend/AngularJS/angular-dev">搭建 webpack-angular 基础开发环境</a>
        <a href="/#/articles/frontend/CSS/position-absolute">详解 CSS 绝对定位</a>
        <a href="/#/articles/frontend/CSS/margin-collapsing">外边距合并</a>
        <a href="/#/articles/frontend/CSS/pseudo-before-after">伪元素 ::before 和 ::after</a>
        <a href="/#/articles/frontend/mixed/note-01-cmder">windows 搭建开发环境之安装使用 Cmder</a>
      </div>
    </div>
  </div>
</template>

<script>
  import linkBall from '../libs/linkBall.js';
  export default {
    data() {
      return {
        parmas: {
          radius: 249, // 焦距
          focalLength: 500, // 储存各链接的空间位置
        },
      }
    },
    methods: {
       //
    },
    mounted() {
      linkBall.setLinkBall(this.parmas);
    }
  }
</script>

<style lang="less">
.index-container {
  position: absolute;
  top: 60px;
  right: 0;
  bottom: 30px;
  left: 0;
  .link-ball {
    position: relative;
    width: 650px;
    height: 550px;  
  }
  .link-ball a {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    padding: 4px;
    color: #727273;
  }
  .link-ball a:hover {
    transform: scale(1.5);
    opacity: 1;
    font-size: 2rem;
  }
}
</style>