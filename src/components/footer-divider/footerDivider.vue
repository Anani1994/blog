<template>
    <div class="p-1 text-center text-white">
        <Divider />
        <slot name="content">到底了，我可是有底线的。</slot><Icon type="ios-happy-outline" />
    </div>
</template>

<script>
export default {
    name: 'FooterDivider'
}
</script>

