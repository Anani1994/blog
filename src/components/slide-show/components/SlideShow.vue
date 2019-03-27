<template lang="pug">
    .slide-container.position-relative
        button.arrow.position-absolute-centerY.btn.btn-link.ml-2(
            type="button"
            @click="arrowChange('left')"
        )
            font-awesome-icon(:icon="['fas', 'angle-double-left']")
        .group-container.h-100(ref="groupContainer")
            slot
        button.arrow.position-absolute-centerY.btn.btn-link.right-0.mr-2(
            type="button"
            @click="arrowChange('right')"
        )
            font-awesome-icon(:icon="['fas', 'angle-double-right']")
        ul.dots.position-absolute.bottom-0.list-inline.text-center.w-100
            li.position-relative.list-inline-item(
              v-for="(dot, index) in slides"
              :key="index"
              @click="dotChange(index)"
            )
</template>

<script>
export default {
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 2000
    },
    arrowMode: {
      type: String,
      default: "always",
      validator(value) {
        return ["always", "never"].includes(value);
      }
    }
  },
  data() {
    return {
      current: 0, // 当前显示图片索引
      childWidth: 0, // 每个子元素的宽度
      slides: [],
    };
  },
  methods: {
    initSlides() {
      this.slides = this.$children;
      // 获取子元素宽度
      this.childWidth = this.$el.offsetWidth;
      // 根据子元素个数设置容器宽度
      this.$refs.groupContainer.style.width = `${this.childWidth * this.$children.length}px`;
    },
    // 箭头点击事件
    arrowChange(direction) {
      let offset = 0;
      if ("left" === direction) {
        if (this.current === this.$children.length - 1) {
          this.current = -1;
        }
        offset = -this.childWidth * (this.current + 1);
      } else {
        if (this.current === 0) {
          this.current = 4;
        }
        offset = -this.childWidth * (this.current - 1);
      }
      this.$refs.groupContainer.style.transform = `translate3d(${offset}px, 0px, 0px)`;
      "left" === direction ? this.current += 1 : this.current -= 1;
    },
    // 圆点点击事件
    dotChange(index) {
      const offset = -this.childWidth * index;
      this.$refs.groupContainer.style.transform = `translate3d(${offset}px, 0px, 0px)`;
    }
  },
  mounted() {
    this.initSlides();
  }
};
</script>
