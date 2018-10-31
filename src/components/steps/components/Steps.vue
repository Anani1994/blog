<template lang="pug">
    ul.steps
        slot
</template>

<script>
export default {
    name: 'Steps',
    props: {
        direction: String // 后期可用于扩展步骤条的方向
    }
}
</script>
