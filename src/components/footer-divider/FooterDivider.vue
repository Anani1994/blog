<template lang="pug">
    .text-center.mb-3
        Divider
        slot(name="content") 到底了，我可是有底线的。
        font-awesome-icon(:icon="['far', 'smile-wink']")
</template>
