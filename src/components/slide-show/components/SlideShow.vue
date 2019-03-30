<template lang="pug">
    .slide-container
        button.arrow(
            type="button"
            @click="toLeft()"
        )
            font-awesome-icon(:icon="['fas', 'angle-double-left']")
        .slideTrack.active(
            ref="slideTrack"
            :style="trackStyles"
        )
            slot
        .slideTrackBak(
            ref="slideTrackBak"
            :style="trackBakStyles"
        )
        button.arrow(
            type="button"
            @click="toRight()"
        )
            font-awesome-icon(:icon="['fas', 'angle-double-right']")
        ul.dots
            li(
                v-for="(dot, index) in childLen"
                :key="index"
                @click="toDesignated(index)"
            )
</template>

<script>
import common from "../../../libs/utils/common";
import dom from "../../../libs/utils/dom";
export default {
  props: {
    index: {
      // 当前显示图片索引
      type: Number,
      default: 0
    },
    easing: {
      type: String,
      default: "ease"
    },
    loop: {
      type: Boolean,
      default: false
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    autoplaySpeed: {
      type: Number,
      default: 2000
    },
    arrowMode: {
      type: String,
      default: "always",
      validator(value) {
        return ["always", "never", "hover"].includes(value);
      }
    },
    dotMode: {
      type: String,
      default: "always",
      validator(value) {
        return ["always", "never"].includes(value);
      }
    }
  },
  data() {
    return {
      current: 0, // 当前显示元素的索引
      childWidth: 0, // 每个子元素的宽度
      childLen: 0, // 实际子元素个数
      trackWidth: 0, // 轨道宽度
      trackOffset: 0, // 轨道偏移量
      timer: null // 计时器
    };
  },
  methods: {
    initSlides() {
      this.childLen = this.$children.length;
      this.childWidth = Number.parseInt(dom.getStyle(this.$el, "width"));
      this.trackWidth = this.childWidth * this.childLen; // 触发监听属性 trackStyles 和 trackBakStyles，初始化轨道和动画
      this.$children.forEach(
        child => (child.$el.style.width = `${this.childWidth}px`)
      );
      this.$refs.slideTrackBak.innerHTML = this.$refs.slideTrack.innerHTML; // 复制第一轨道，以实现无缝循环
    },
    toLeft() {
      this.setAutoplay();
      this.current += 1;
      this.move();
    },
    toRight() {
      this.setAutoplay();
      this.current -= 1;
      this.move();
    },
    move(offset) {
      this.trackOffset =
        this.childWidth * (offset || Math.abs(this.current) % this.childLen);
    },
    // 圆点点击事件
    toDesignated(index) {
      this.trackOffset = this.childWidth * index;
      this.current = index;
      // 重置计时器
      this.setAutoplay();
    },
    setAutoplay() {
      window.clearInterval(this.timer);
      if (this.autoplay) {
        this.timer = window.setInterval(() => {
          this.toLeft();
        }, this.autoplaySpeed);
      }
    }
  },
  mounted() {
    this.initSlides();
    this.setAutoplay();
  },
  computed: {
    trackStyles() {
      return {
        width: `${this.trackWidth}px`,
        transform: `translate3d(${-this.trackOffset}px, 0px, 0px)`,
        transition: `transform 500ms ${this.easing}`
      };
    },
    trackBakStyles() {
      return {
        width: `${this.trackWidth}px`,
        transform: `translate3d(${-this.trackOffset}px, 0px, 0px)`,
        transition: `transform 500ms ${this.easing}`
      };
    }
  },
  watch: {
    // 当动画相关配置改变时重置动画
    autoplay() {
      this.setAutoplay();
    },
    autoplaySpeed() {
      this.setAutoplay();
    }
  }
};
</script>
