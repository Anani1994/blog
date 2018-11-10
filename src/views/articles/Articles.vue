<template lang="pug">
    .container-fluid.h-100
        transition(:name="transitionName")
            router-view
</template>

<script>
export default {
    data() {
        return {
            transitionName: '',
        }
    },
    // watch $route 决定使用哪种过渡
    watch: {
        '$route' (to, from) {
            // 可以根据不同条件设置不同的动画
            let localName = 'slide-fade';
            this.transitionName = localName;
        }
    }
}
</script>

<style lang="less">
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
/* 进入动画 */
.slide-fade-enter-active {
    transition: all 1s ease;
}
/* 离开动画 */
// .slide-fade-leave-active {
//     transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
// }
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(15px);
    opacity: 0;
}
</style>
