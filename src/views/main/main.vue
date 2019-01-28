<template lang="pug">
    .container-fluid.h-100
        .row.h-100
            .col-md-3.position-md-fixed.shadow
                personal-info
                articles-info
            .col-md-9.p-md-0
                .layout-body
                    .layout-content
                        ArticlesList
</template>

<script>
import PersonalInfo from './components/PersonalInfo.vue';
import ArticlesInfo from './components/ArticlesInfo.vue';
import ArticlesList from './components/ArticleList.vue';
export default {
    components: {
        PersonalInfo,
        ArticlesInfo,
        ArticlesList,
    }
}
</script>

<style lang="less" scoped>
.layout-body {
    height: calc(100% - 10px);
}
</style>
