<template lang="pug">
    BoWen
        .p-1(slot="catalog")
            Steps(direction="vertical")
                Step(title="路由重定向" 
                    content="路由重定向"
                    status="wait"
                    @click.native="toTop('#angular-ui-router-4-1', 30)")
                Step(title="路由事件" 
                    content="路由事件"
                    status="wait"
                    @click.native="toTop('#angular-ui-router-4-2', 30)")
        .px-1
            .py-3.text-center
                h1
                    Icon(type="ios-book-outline")
                    | &nbsp;UI-Router for AngularJS (五)
                p.pt-1 UI-Router is the defacto standard for routing in AngularJS
            h3#angular-ui-router-4-1.ml-1
                Icon(type="logo-buffer")
                | &nbsp;路由重定向
            Divider
            h3#angular-ui-router-4-2.ml-1
                Icon(type="logo-buffer")
                | &nbsp;路由事件
            Divider
            p.text-right 参考资料：
                a(href="https://github.com/angular-ui/ui-router/wiki/URL-Routing") https://github.com/angular-ui/ui-router/wiki/URL-Routing
            <FooterDivider></FooterDivider>
</template>

<script>
export default {
    data() {
        return {
            toTop: this.$util.toTop
        }
    }
}
</script>
