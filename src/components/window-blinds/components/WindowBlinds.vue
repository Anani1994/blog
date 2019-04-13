<template lang="pug">
    ul.window-blinds(
        :class="mode"
        @click="toggleBlinds"
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
                .string(v-for="(text, index) in text") {{text[index]}}
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
        }
    },
    data() {
        return {
            openBlids: false,
            i: 0,
            n: 0,
            current: 0,
            lineNum: 3,
            leafNumber: 5,
            lineHeight: 24,
            transition: 'transition',
            tid: null,
            textArr: ''
        };
    },
    mounted() {
        this.init();
        this.move();
    },
    methods: {
        init() {
            this.textArr = common.getStringArr(poetry, 'poetry');
            console.log(this.textArr);
            this.textArr.length += this.textArr.length % this.lineNum;
            this.textArr.fill();
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
                        }, 1000); // 每次滑动到底时的停留时间
                    } else {
                        // 第一轮滑动完成的边界处理
                        setTimeout(() => {
                            this.n = 0;
                            setTimeout(() => {
                                this.move();
                            }, 1000);
                        }, 1000);
                    }
                }
            }, 500);
        }
    },
};
</script>
