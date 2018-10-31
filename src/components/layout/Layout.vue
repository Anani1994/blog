<template lang="pug">
    .layout.w-100.h-100.d-flex.flex-column
        .layout-header
            slot(name="header")
        .layout-body
            .layout-content
                slot(name="body")
        .layout-footer
            slot(name="footer")
</template>

<style lang="less" scoped>
.layout {
    .layout-header {
        width: 100%;
        height: 60px;
    }
    .layout-body {
        width: 100%;
        height: calc(100% - 90px);
        overflow: hidden;
        .layout-content {
            width: calc(100% + 17px);
            height: 100%;
            overflow-x: hidden;
            overflow-y: scroll;
        }
    }
    .layout-footer {
        width: 100%;
        height: 30px;
    }
}
</style>
