<template lang="pug">
    .container
        p.text-danger.animated.fadeIn.delay-2s {{ $t("message.hello") }}
        .dropdown
            button.btn.btn-secondary.dropdown-toggle(type="button", id="dropdownMenuButton", data-toggle="dropdown", aria-haspopup="true", aria-expanded="false") Dropdown button
            .dropdown-menu(aria-labelledby="dropdownMenuButton")
                a.dropdown-item(href="#") Action
                a.dropdown-item(href="#") Another action
                a.dropdown-item(href="#") Something else here
</template>

<script>
export default {
    data() {
        return {
            test: this.$store.state.count
        }
    },
    created() {
        console.log(this);
    }
}
</script>
<style lang="less">
.container {
    background: #c0c0c0;
}
</style>
