<template lang="pug">
    .drawer-container(v-if="show")
        .drawer(:class="classObj")
            slot(name="content")
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        position: {
            type: String,
            default: 'right',
        },
        animated: {
            type: Boolean,
            default: false,
        },
        animatedType: {
            type: String,
            default: 'slideInRight',
        },
        speed: {
            type: String,
        }
    },
    data() {
        return {
            floatDir: {
                left: 'float-left',
                right: 'float-right',
            },
            speeds: ['slow', 'slower', 'fast', 'faster'],
        }
    },
    computed: {
        // 将 classObj 设置为箭头函数时报错
        // [Vue warn]: Error in render: "TypeError: Cannot read property 'show' of undefined"
        classObj: function() {
            let classObj = {};
            if (!this.show) {
                return classObj;
            }
            this.position = this.position ? this.position : 'float-right';
            classObj[this.floatDir[this.position]] = true;
            if (!this.animated) {
                return classObj;
            }
            if (this.speeds.includes(this.speed)) {
                classObj[this.speed] = true;
            }
            classObj.animated = true;
            classObj[this.animatedType] = true;
            return classObj;
        }
    }
}
</script>
