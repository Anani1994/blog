<template lang="pug">
    .slide-container
        button.arrow(
            type="button"
            @click="move(1)"
        )
            font-awesome-icon(:icon="['fas', 'angle-double-left']")
        .slideTrack.active(
            ref="slideTrack"
            :style="trackStyles"
            :class="[active ? '' : 'active']"
        )
            slot
        .slideTrackBak(
            ref="slideTrackBak"
            :style="trackBakStyles"
            :class="[active ? 'active' : '']"
        )
        button.arrow(
            type="button"
            @click="move(-1)"
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
      childWidth: 0, // 每个子元素的宽度
      childLen: 0, // 实际子元素个数
      trackWidth: 0, // 轨道宽度
      current: 0, // 当前显示元素的索引
      currentBak: 4, // 第二轨道当前显示元素的索引
      trackOffset: 0, // 轨道偏移量
      trackBakOffset: 0, // 第二轨道偏移量
      active: false, // 第二轨道在上，改变样式遮盖复位
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
    move(step = 1) {
      // 初始化轨道位置
      if (0 < step) {
        if (this.active) {
          this.trackOffset = -this.childWidth * step;
        } else {
          this.trackBakOffset = -this.childWidth * step;
        }
      } else {
        if (this.active) {
          this.trackOffset = this.childWidth * this.childLen;
        } else {
          this.trackBakOffset = this.childWidth * this.childLen;
        }
      }
      // 边界处理
      if ((step > 0 && this.childLen - 1 === this.current) || (step < 0 && 0 === this.current)) {
        this.active = !this.active;
        this.trackOffset += this.childWidth * step;
        this.trackBakOffset += this.childWidth * step;
      } else {
        if (this.active) {
          this.trackBakOffset += this.childWidth * step;
        } else {
          this.trackOffset += this.childWidth * step;
        }
      }
      this.current += step;
      if (this.current === this.childLen) this.current = 0;
      if (this.current < 0) this.current += this.childLen;

      this.$emit('on-change', this.current);
      this.setAutoplay();
    },
    // 圆点点击事件
    toDesignated(index) {
      this.active ? this.trackBakOffset = this.childWidth * index : this.trackOffset = this.childWidth * index;
      this.current = index;
      this.setAutoplay(); // 重置计时器
    },
    // 设置轮播
    setAutoplay() {
      window.clearInterval(this.timer);
      if (this.autoplay) {
        this.timer = window.setInterval(() => {
          this.move();
        }, this.autoplaySpeed);
      }
    }
  },
  mounted() {
    this.initSlides();
    this.setAutoplay();
  },
  computed: {
    // 当下面对应依赖值改变时重置动画
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
        transform: `translate3d(${-this.trackBakOffset}px, 0px, 0px)`,
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
