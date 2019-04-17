<template lang="pug">
    ul.window-blinds(
        :class="mode"
        @click="'blinds' === mode ? toggleBlinds() : toggleMove()"
    )
        li.string-wrap(
            v-for="(num, index) in leafNumber"
            :class="[{open: openBlids && 'blinds' === mode}]"
        )
            .string-content(
                :style="getStyle(index)"
                :class="[{transition: mode === 'string'}]"
            )
                .string(
                    v-for="oNum in lineNum"
                    :class="getStringClass(oNum, index)"
                ) {{textArr[leafNumber * (lineNum - oNum) + index]}}
</template>

<script>
import common from '../../../libs/utils/common';
import poetry from './text';
export default {
    props: {
        mode: {
            type: String,
            default: 'blinds'
        },
        text: {
            type: String,
            default: ''
        },
        textType: {
            type: String,
            default: 'poetry'
        },
        leafNumber: {
            type: Number,
            default: 15 // 叶数
        },
        stay: {
            type: Number,
            default: 1000
        }
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
            active: 0,
        };
    },
    mounted() {
        this.init();
        if (this.mode === 'string') {
            this.move();
        }
        if (this.mode === 'string-2') {
            this.moveSlide();
        }
    },
    methods: {
        init() {
            if (this.mode === 'blinds') {
                this.lineNum = 1;
                return;
            }

            this.textArr = common.getStringArr(this.text || poetry, this.textType);

            const len = this.textArr.length;
            if (len < this.leafNumber) {
                this.textArr.length = this.leafNumber;
            } else {
                this.textArr.length = Math.ceil(this.textArr.length / this.leafNumber) * this.leafNumber;
            }
            this.textArr.fill('', len);

            this.lineNum = this.textArr.length / this.leafNumber;
            this.active = this.lineNum + 1;
        },
        toggleBlinds() {
            this.openBlids = !this.openBlids;
        },
        toggleMove() {
            this.stop = !this.stop;
            if (!this.stop) {
                this.move();
            }
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
        getTop(index, next) {
            let topPos = '';
            if (next) {
                topPos = (this.lineHeight * (this.lineNum - this.n - 1))
                    .toString()
                    .replace(/-/, '');
            } else {
                topPos = (this.lineHeight * (this.lineNum - this.n))
                    .toString()
                    .replace(/-/, '');
            }
            return topPos;
        },
        getStyle(index) {
            if (this.mode !== 'string') return {};
            return { top: this.current > index ? `-${this.getTop(index, true)}px` : `-${this.getTop(index)}px` };
        },
        getStringClass(oNum, index) {
            if (this.mode !== 'string-2') return [];
            return [
                { active: oNum === this.active },
                { next: (oNum === this.active - 1) || (this.active === 1 && oNum === this.lineNum) },
                { transition: this.current >= index && oNum === this.active }
            ];
        },
        moveSlide() {
            this.current = 0;
            this.i = 0;
            if (this.active === 1) {
                this.active = this.lineNum;
            } else {
                this.active--;
            }
            this.tid = setInterval(() => {
                this.i++;
                this.current += this.i;
                if (this.current >= this.leafNumber) {
                    clearInterval(this.tid);
                    setTimeout(() => {
                        this.moveSlide();
                    }, 1000);
                }
            }, this.stay);
        },
    }
};
</script>
