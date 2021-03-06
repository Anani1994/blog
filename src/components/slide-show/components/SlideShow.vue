<template lang="pug">
    .slide-container(
        @mouseover="handleMouseOver()"
        @mouseout="handleMouseOut()"
    )
        button.arrow(
            type="button"
            @click="move(1)"
            v-show="showArrow"
        )
            font-awesome-icon(:icon="['fas', 'angle-double-left']")
        .slideTrack(
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
            v-show="showArrow"
        )
            font-awesome-icon(:icon="['fas', 'angle-double-right']")
        ul.dots(
            v-show="showDot"
        )
            li(
                v-for="(dot, index) in childLen"
                :key="index"
                @click="toDesignated(index)"
                :class="{active: current === index}"
            )
</template>

<script>
import common from "../../../libs/utils/common";
import dom from "../../../libs/utils/dom";
import event from "../../../libs/utils/event";
import perf from "../../../libs/utils/performance";
export default {
  props: {
    easing: {
      type: String,
      default: "ease"
    },
    loop: {
      type: Boolean,
      default: true
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
      default: "hover",
      validator(value) {
        return ["always", "never", "hover"].includes(value);
      }
    },
    dotMode: {
      type: String,
      default: "always",
      validator(value) {
        return ["always", "never", "hover"].includes(value);
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
      timer: null, // 计时器
      showArrow: false,
      showDot: true,
    };
  },
  methods: {
    initSlides() {
      this.setTrackInfo();
      this.setTrackBak();
    },
    setTrackInfo() {
      this.childLen = this.$children.length;
      this.childWidth = Number.parseInt(dom.getStyle(this.$el, "width"));
      this.trackWidth = this.childWidth * this.childLen; // 触发监听属性 trackStyles 和 trackBakStyles，初始化轨道和动画
      this.$children.forEach(
        child => (child.$el.style.width = `${this.childWidth}px`)
      );
    },
    setTrackBak() {
      this.$refs.slideTrackBak.innerHTML = this.$refs.slideTrack.innerHTML; // 复制第一轨道，以实现无缝循环
    },
    move(step = 1) {
      if (this.childLen - 1 === this.current && !this.loop) return window.clearInterval(this.timer);
      // 重置另一个轨道（底层轨道）的位置
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
        // 当一个轨道滑动到极点时，应当带着另一个轨道继续滑动一次，以便平滑的衔接
        this.trackOffset += this.childWidth * step;
        this.trackBakOffset += this.childWidth * step;
        // 并在此时切换轨道
        this.active = !this.active;
      } else {
        if (this.active) {
          this.trackBakOffset += this.childWidth * step;
        } else {
          this.trackOffset += this.childWidth * step;
        }
      }
      this.current += step;
      if (this.current === this.childLen) this.current = 0;
      // 当反向滑动时，索引 0 之后对应显示的图片应该是索引为 this.childLen - 1 的图片
      // 所以此处当索引小于 0（-1）时，应当加上总的图片个数，此时就对应上了最后一张图片的索引值
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
    },
    handleMouseOver() {
      if ("hover" === this.arrowMode) {
        this.showArrow = true;
      }
      if ("hover" === this.dotMode) {
        this.showDot = true;
      }
    },
    handleMouseOut() {
      if ("hover" === this.arrowMode) {
        this.showArrow = false;
      }
      if ("hover" === this.dotMode) {
        this.showDot = false;
      }
    },
    setArrow() {
      switch (this.arrowMode) {
        case "never": this.showArrow = false;
          break;
        case "always": this.showArrow = true;
          break;
      }
    },
    setDot() {
      switch (this.dotMode) {
        case "never": this.showDot = false;
          break;
        case "always": this.showDot = true;
          break;
      }
    },
    handleResize() {
      perf.debounce(this.resetSlideShow, this);
    },
    resetSlideShow() {
      // 重置轨道和子元素的样式
      this.setTrackInfo();
      this.$refs.slideTrackBak.childNodes.forEach(
        child => (child.style.width = `${this.childWidth}px`)
      );
      // 根据当前轨道和索引重置位置
      if (this.active) {
        this.trackOffset = -this.childWidth;
        this.trackBakOffset = this.childWidth * this.current;
      } else {
        this.trackOffset = this.childWidth * this.current;
        this.trackBakOffset = -this.childWidth;
      }

      this.setAutoplay();
    }
  },
  mounted() {
    this.initSlides();
    this.setAutoplay();
    this.setArrow();
    this.setDot();
    event.addHandler(window, "resize", this.handleResize);
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
    },
  },
  watch: {
    // 当动画相关配置改变时重置动画
    autoplay() {
      this.setAutoplay();
    },
    autoplaySpeed() {
      this.setAutoplay();
    },
    arrowMode() {
      this.setArrow();
    },
    dotMode() {
      this.setDot();
    },
    loop() {
      this.setAutoplay();
    },
  },
  beforeDestroy() {
    event.removeHandler(window, "resize", this.handleResize);
  }
};
</script>
