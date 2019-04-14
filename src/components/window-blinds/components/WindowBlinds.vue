<template lang="pug">
    ul.window-blinds(
        :class="mode"
        @click="toggleMove"
    )
        li.string-wrap(
            v-for="(num, index) in leafNumber"
            :class="[{open: openBlids && 'blinds' === mode}]"
        )
            .string-content(
                :style="{top: current > index ? `-${getTop(index, true)}px` : `-${getTop(index)}px`}"
                class="string-content"
                :class="transition"
            )
                .string(v-for="oNum in lineNum") {{textArr[leafNumber * (lineNum - oNum) + index]}}
</template>

<script>
import common from '../../../libs/utils/common';
import poetry from './text';
export default {
    props: {
        mode: {
            type: String,
            default: 'string'
        },
        text: {
            type: String,
            default: ''
        },
        leafNumber: {
            type: Number,
            default: 5, // 叶数
        },
        stay: {
            type: Number,
            default: 1000,
        },
    },
    data() {
        return {
            openBlids: false,
            i: 0,
            n: 0,
            current: 0,
            lineNum: 0,
            lineHeight: 24, // 行高
            transition: 'transition',
            tid: null,
            textArr: '',
            stop: false,
        };
    },
    mounted() {
        this.init();
        this.move();
        console.log(this);
    },
    methods: {
        init() {
            this.textArr = common.getStringArr(poetry, 'poetry');
            const len = this.textArr.length;
            this.textArr.length += this.textArr.length % this.leafNumber;
            this.textArr.fill('', len);
            this.lineNum = this.textArr.length / this.leafNumber;
        },
        toggleBlinds() {
            this.openBlids = !this.openBlids;
        },
        getTop(index, next) {
            let topPos = '';
            if (next) {
                topPos = (this.lineHeight * (this.lineNum - this.n - 1)).toString().replace(/-/, '');
            } else {
                topPos = (this.lineHeight * (this.lineNum - this.n)).toString().replace(/-/, '');
            }
            return topPos;
        },
        move() {
            if (this.stop) return;
            this.current = 0;
            this.i = 0;
            this.n++;
            this.tid = setInterval(() => {
                this.i++;
                this.current += this.i;
                if (this.current > this.leafNumber) {
                    clearInterval(this.tid);
                    if (this.n < this.lineNum - 1) {
                        setTimeout(() => {
                            this.move();
                        }, this.stay); // 每次滑动到底时的停留时间
                    } else {
                        // 第一轮滑动完成的边界处理
                        setTimeout(() => {
                            this.n = 0;
                            setTimeout(() => {
                                this.move();
                            }, this.stay);
                        }, this.stay); // 需要大于CSS过度的时间
                    }
                }
            }, 500);
        },
        toggleMove() {
            this.stop = !this.stop;
            if (!this.stop) {
                this.move();
            }
        },
    },
};
</script>
