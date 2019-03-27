<template lang="pug">
    .d-inline-block.h-100
        slot
</template>

<script>
export default {
    mounted() {
        // 子组件的 mounted 函数比父组件的先执行
        // 所以在此先获取父元素的宽度，从而设置每个子元素的宽度
        this.$el.style.width = `${this.$el.parentElement.offsetWidth}px`;
    },
    computed: {
    }
}
</script>
