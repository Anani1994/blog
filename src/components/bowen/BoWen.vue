<template lang="pug">
    .row.h-100#bo-wen
        .col-md-9
            .layout-body.h-100
                .layout-content
                    slot 内容
        .col-md-3.catalog
            .catalog-switch-container.d-md-none
                .catalog-switch.d-flex.justify-content-center.align-items-center
                    a.text-white(href="/")
                        font-awesome-icon(:icon="['fas', 'angle-double-left']")
                .catalog-switch.d-flex.justify-content-center.align-items-center.border-top(@click="changeShowCatalog()")
                    font-awesome-icon(v-if="showRight", :icon="['fas', 'angle-right']")
                    font-awesome-icon(v-else, :icon="['fas', 'angle-left']")
            h4.mt-5.text-center 目录
            slot(name="catalog") 暂无
</template>

<script>
export default {
    data() {
        return {
            isShow: true
        };
    },
    methods: {
        changeShowCatalog: function () {
            if (this.isShow) {
                $('.catalog').addClass('catalog-switch-open');
            } else {
                $('.catalog').removeClass('catalog-switch-open');
            }
            this.isShow = !this.isShow;
        }
    },
    computed: {
        showRight: function () {
            return this.isShow;
        }
    }
}
</script>

<style lang="less" scoped>
h1 {
    font-size: 2rem; // h2, .h2
}
h3 {
    font-size: 1.5rem; // h4, .h4
}
h4 {
    font-size: 1.25rem; // .h5, .h5
}
p {
    text-indent: 2rem;
}
li {
    text-indent: 0;
    list-style-position: inside;
}
.catalog {
    transition: all 1s;
    .catalog-switch-container {
        position: fixed;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        cursor: pointer;
        .catalog-switch {
            width: 1rem;
            height: 5rem;;
        }
    }
    
}
// 手机模式下的
@media (max-width: 768px) {
    .catalog {
        z-index: 666;
        position: fixed;
        left: -100%;
        width: 100%;
        height: calc(100% - 90px);
        &.catalog-switch-open {
            left: 0;
        }
    }
}
</style>
