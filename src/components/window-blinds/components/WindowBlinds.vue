<template lang="pug">
    ul.window-blinds.string
        li.string-wrap(v-for="num in leafNumber")
            .string-content(:class="[current <= num ? 'up' : 'down']")
                .string 第{{num + 1}}行！
                .string-bak 第{{num}}行！
</template>

<script>
export default {
    data() {
        return {
            leafNumber: 25,
            i: 0,
            current: 0,
        };
    },
    mounted() {
        setTimeout(this.open, 1000);
    },
    methods: {
        open() {
            this.current = this.leafNumber;
        },
        close() {
            this.current = 0;
        }
    },
};
</script>
