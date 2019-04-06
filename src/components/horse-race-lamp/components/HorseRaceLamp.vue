<template lang="pug">
    .horse-race-lamp-container
        .horse-race-lamp(
            ref="horseRaceLamp"
            :style="styles"
        )
            slot
</template>

<script>
import dom from "../../../libs/utils/dom";
import common from "../../../libs/utils/common";
import utils from "../../../libs/util";
import event from "../../../libs/utils/event";
import perf from "../../../libs/utils/performance";
export default {
  props: {
    delay: {
      type: Number, // 单位毫秒
      default: 0
    },
    timeout: {
      type: Number, // 单位毫秒
      default: 5000
    },
    timingFunction: {
      type: String,
      default: 'linear',
      validator(value) {
        const regexp = /^(cubic-bezier\()([01]\.?\d*,?){4}\)$/;
        return ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'].includes(value) ||
          regexp.test(value);
      }
    },
    iterationCount: {
      type: [String, Number],
      default: 'infinite',
      validator(value) {
        if (utils.isString(value)) {
          if ("infinite" === value) return true;
          return false;
        }
        return true;
      }
    },
    direction: {
      type: String,
      default: 'normal',
      validator(value) {
        return ['normal', 'reverse', 'alternate', 'alternate-reverse', 'initial', 'inherit'].includes(value);
      }
    },
    playState: {
      type: String,
      default: 'running',
      validator(value) {
        return ['paused', 'running'].includes(value);
      }
    },
    fillMode: {
      type: String,
      default: 'none',
      validator(value) {
        return ['none', 'forwards', 'backwards', 'both', 'initial', 'inherit'].includes(value);
      }
    }
  },
  data() {
    return {
    }
  },
  methods: {
    setSlide() {
      const slideContainerWidth = dom.getStyle(this.$el, 'width');
      const nodeList = this.$refs.horseRaceLamp.children;
      if (nodeList.length > 1) {
        console.warn('HorseRaceLamp should contain exactly one root element.');
      }
      const slideWidth = dom.getStyle(nodeList[0], 'width');

      const frameRule = dom.getFrameRule('HorseRaceLamp');
      const { keys } = dom.getFrameKey(frameRule);
      const rules = [];

      this.clearFrameRule(frameRule, keys);
      if (slideWidth > slideContainerWidth) {
        rules.push(`0% {transform: translateX(-${slideWidth});}`);
        rules.push(`100% {transform: translateX(${slideWidth});}`);
      } else {
        rules.push(`0% {transform: translateX(-${slideWidth});}`);
        rules.push(`100% {transform: translateX(${slideContainerWidth});}`);
      }

      this.addRule(frameRule, rules);
    },
    /**
     * 清除动画规则
     * @param {*} rule 动画规则
     * @param {*} keys 动画
     */
    clearFrameRule(rule, keys) {
      for (let i = 0; i < keys.length; i++) {
        rule.deleteRule(keys[i]);
      }
    },
    addRule(frameRule, rules) {
      rules.forEach(rule => {
        frameRule.appendRule(rule);
      });
    },
    handleResize() {
      perf.debounce(this.setSlide, this);
    }
  },
  mounted() {
    this.setSlide();
    event.addHandler(window, "resize", this.handleResize);
  },
  computed: {
    styles() {
      const styles = {
        animation: ` HorseRaceLamp ${this.timeout}ms ${this.timingFunction} ${this.delay}ms ${this.iterationCount} ${this.direction} ${this.fillMode} ${this.playState}`
      };

      return styles;
    },
  },
  beforeDestroy() {
    event.removeHandler(window, "resize", this.handleResize);
  },
}
</script>
