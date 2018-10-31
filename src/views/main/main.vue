<template lang="pug">
    .container-fluid.h-100
        .row.h-100
            .col-md-3
                personal-info
                articles-info
            .col-md-9
                router-view
</template>

<script>
import PersonalInfo from './components/PersonalInfo.vue';
import ArticlesInfo from './components/ArticlesInfo.vue';
export default {
    name: 'Main',
    components: {
        PersonalInfo,
        ArticlesInfo
    },
    data() {
        return {
            //
        }
    }
}
</script>
