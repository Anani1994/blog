<style lang="less">
.page-container {
  overflow: hidden;
  &>.container {
    position: relative;
    top: 0;
    transition: top 1000ms ease;
    .side-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 50%;
      right: 1rem;
      transform: translateY(-50%);
      list-style-type: none;
      li {
        margin: .5rem 0;
        padding: .3rem;
        background: #000;
        border-radius: 50%;
        cursor: pointer;
      }
      .active {
        background: #fff
      }
    }
  }
}
</style>

<template>
  <div class="page-container">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import fullPage from '../../libs/fullPage.js';
export default {
  name: 'FullPage',
  data() {
    return {
      fullPage: null
    }
  },
  mounted() {
    this.fullPage = new fullPage({
      height: document.body.clientHeight - 90,
      delay: 1000,
      showSideNav: true,
      // showAppointedNode: true
    });
    this.fullPage.init();
  }
}
</script>
