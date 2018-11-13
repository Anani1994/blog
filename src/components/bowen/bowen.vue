<template>
    <Row class="bo-wen" :style="{backgroundColor: bowenBgColor}">
        <Col span="4">
            <h3 class="mt-1 text-center">目录</h3>
            <slot name="catalog">暂无</slot>
        </Col>
        <Col class="h-100 outContainer" span="17">
            <div class="h-100 innerContainer" :style="{backgroundColor: bgColor}">
               <slot>内容</slot>
            </div>
        </Col>
        <Col span="3">
            <div class="w-80 m-auto pt-1">
                设置全局的背景色：
                <ColorPicker
                    class="w-100"
                    v-model="defaultAllBgColor"
                    alpha
                    @on-change="setAllBgColor" />
            </div>
            <div class="w-80 m-auto pt-1">
                设置中间层的背景色：
                <ColorPicker
                    class="w-100"
                    v-model="defaultBowenBgColor"
                    alpha
                    @on-change="setBowenBgColor" />
            </div>
            <div class="w-80 m-auto pt-1">
                设置文章的背景色：
                <ColorPicker
                    class="w-100"
                    v-model="defaultBgColor"
                    alpha
                    @on-change="setBgColor" />
            </div>
            <Button class="d-block m-auto mt-1" @click="reset">还原默认设置</Button>
            <slot name="others">&nbsp;</slot>
        </Col>
    </Row>
</template>

<script>
export default {
    name: 'BoWen',
    data() {
        return {
            defaultBgColor: this.$store.state.bgColor,
            defaultBowenBgColor: this.bowenBgColor !== undefined ? this.bowenBgColor : this.$store.state.bowenBgColor,
            defaultAllBgColor: this.$store.state.allBgColor
        }
    },
    methods: {
        setAllBgColor(color) {
            this.$store.commit('setAllBgColor',color);
            this.$store.commit('setBowenBgColor','');
            this.$store.commit('setBgColor','');
            localStorage.defaultBgColor = '';
            localStorage.defaultBowenBgColor = '';
            localStorage.defaultAllBgColor = color;
            this.defaultBowenBgColor = '';
            this.defaultBgColor = '';
        },
        setBowenBgColor(color) {
            this.$store.commit('setBowenBgColor',color);
            this.$store.commit('setBgColor','');
            localStorage.defaultBowenBgColor = color;
            localStorage.defaultBgColor = '';
            this.defaultBgColor = '';
        },
        setBgColor(color) {
            this.$store.commit('setBgColor',color);
            localStorage.defaultBgColor = color;
        },
        reset() {
            localStorage.removeItem('defaultBgColor');
            localStorage.removeItem('defaultBowenBgColor');
            localStorage.removeItem('defaultAllBgColor');
            this.$store.commit('setBgColor','rgba(35,36,31,.8)');
            this.$store.commit('setBowenBgColor','');
            this.$store.commit('setAllBgColor','');
            this.defaultAllBgColor = '';
            this.defaultBowenBgColor = '';
            this.defaultBgColor = 'rgba(35,36,31,.8)';
            this.$Message.success('设置成功');
        }
    },
    computed: {
        bgColor() {
            return this.$store.state.bgColor;
        },
        bowenBgColor() {
            return this.$store.state.bowenBgColor;
        }
    }
}
</script>

<style lang="less">
    .bo-wen {
        height: calc(100% - 90px)!important;
        .outContainer {
            overflow: hidden;
        }
        .innerContainer {
            overflow-x: hidden;
            overflow-y: scroll;
            width: calc(100% + 17px);
        }
        //
        .ivu-steps-item {
            cursor: pointer;
        }
        .ivu-steps .ivu-steps-head,.ivu-steps .ivu-steps-title  {
            background: transparent;
            color: #fff!important;
        }
        .ivu-steps-item.ivu-steps-status-wait .ivu-steps-head-inner {
            background-color: #23241f;
        }
        .ivu-color-picker-confirm-color {
            color: #000;
        }
        p {
            margin-bottom: 1rem;
            text-indent: 2rem;
        }
    }
</style>
