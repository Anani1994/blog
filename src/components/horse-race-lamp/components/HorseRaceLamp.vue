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
      default: "linear",
      validator(value) {
        const regexp = /^(cubic-bezier\()([01]\.?\d*,?){4}\)$/;
        return (
          ["linear", "ease", "ease-in", "ease-out", "ease-in-out"].includes(
            value
          ) || regexp.test(value)
        );
      }
    },
    iterationCount: {
      type: [String, Number],
      default: "infinite",
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
      default: "normal",
      validator(value) {
        return [
          "normal",
          "reverse",
          "alternate",
          "alternate-reverse",
          "initial",
          "inherit"
        ].includes(value);
      }
    },
    playState: {
      type: String,
      default: "running",
      validator(value) {
        return ["paused", "running"].includes(value);
      }
    },
    fillMode: {
      type: String,
      default: "none",
      validator(value) {
        return [
          "none",
          "forwards",
          "backwards",
          "both",
          "initial",
          "inherit"
        ].includes(value);
      }
    }
  },
  data() {
    return {
      // 生成随机不重复的动画名称
      name: `HorseRaceLamp-${(Math.random() * 10000000)
        .toString(16)
        .substr(0, 5)}-${new Date().getTime()}-${Math.random()
        .toString()
        .substr(2, 5)}`,
      rules: []
    };
  },
  methods: {
    initRule() {
      if (!!dom.getFrameRule(this.name)) return;
      if (!document.styleSheets.length) {
        const style = document.createElement("style");
        style.setAttribute("rel", "stylesheet");
        style.setAttribute("type", "text/css");
        const head = document.getElementsByTagName("head")[0];
        head.appendChild(style);
      }
      const styleSheets = document.styleSheets[0];

      const rules = this.getRule();
      this.rules = rules;
      let ruleStr = "";
      rules.forEach(rule => {
        ruleStr += rule;
      });
      styleSheets.insertRule(`@keyframes ${this.name} {${ruleStr}}`);
    },
    getRule() {
      const slideContainerWidth = dom.getStyle(this.$el, "width");
    //   const nodeList = this.$refs.horseRaceLamp.children;
    //   if (nodeList.length > 1) {
    //     console.warn("HorseRaceLamp should contain exactly one root element.");
    //   }
    //   const slideWidth = dom.getStyle(nodeList[0], "width");
      const slideWidth = dom.getStyle(this.$refs.horseRaceLamp, "width");
      const rules = [];
      rules.push(`0% {transform: translateX(-${slideWidth});}`);
      rules.push(`100% {transform: translateX(${slideContainerWidth});}`);

      return rules;
    },
    setRule() {
      const rules = this.getRule();
      let reset = false;
      for (let i = 0; i < rules.length; i++) {
        if (rules[i] !== this.rules[i]) reset = true;
      }
      if (!reset) return;
      this.rules = rules;
      // 重置规则
      const frameRule = dom.getFrameRule(this.name);
      const { keys } = dom.getFrameKey(frameRule);
      this.clearFrameRule(frameRule, keys);
      this.addRule(frameRule, rules);
    },
    /**
     * 清除动画规则
     * @param {*} rule 动画规则
     * @param {*} keys 动画键名组
     */
    clearFrameRule(rule, keys) {
      for (let i = 0; i < keys.length; i++) {
        rule.deleteRule(keys[i]);
      }
    },
    // 添加动画规则
    addRule(frameRule, rules) {
      rules.forEach(rule => {
        frameRule.appendRule(rule);
      });
    },
    handleResize() {
      perf.debounce(this.setRule, this);
    }
  },
  mounted() {
    this.initRule();
    event.addHandler(window, "resize", this.handleResize);
  },
  computed: {
    styles() {
      const styles = {
        animation: `${this.name} ${this.timeout}ms ${this.timingFunction} ${
          this.delay
        }ms ${this.iterationCount} ${this.direction} ${this.fillMode} ${
          this.playState
        }`
      };

      return styles;
    }
  },
  beforeDestroy() {
    event.removeHandler(window, "resize", this.handleResize);
    dom.deleteFrameRule(this.name);
  }
};
</script>
