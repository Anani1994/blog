<template lang="pug">
    li
        .content
            .title {{ title }}
            .detail {{ content }}
</template>

<script>
export default {
    name: 'Step',
    props: {
        title: String,
        content: String,
        status: String // 后期可用于扩展步骤条特定状态下的颜色
    }
}
</script>
