// =============================================================== DOM操作 ===============================================================
export default new class {
  /**
   * @description
   * element.style 获取的一般都是行内样式，所以多数是空的
   * 在此采用 window.getComputedStyle 获取样式
   * @param {element}
   * @param {string}
   */
  getStyle(ele, styleName, pseudoClass = null) {
    if (!ele || !styleName) return null;
    if ("float" === styleName) styleName = "cssFloat";
    try {
      const self = document.defaultView; // for firefox3.6 子框架内的样式
      const computed = self.getComputedStyle(ele, pseudoClass);
      return ele.style[styleName] || computed ? computed[styleName] : null;
    } catch (e) {
      return ele.style[styleName];
    }
  }

  /**
   * 查找指定动画的规则
   * @param rule {string} 由 @keyframes 指定的动画名称
   * @returns {object|null}
   */
  getFrameRule(rule) {
    const styleSheets = document.styleSheets;
    for (let i = 0; i < styleSheets.length; i++) {
      for (let j = 0; j < styleSheets[i].cssRules.length; j++) {
        if (styleSheets[i].cssRules[j].type === window.CSSRule.KEYFRAMES_RULE &&
          styleSheets[i].cssRules[j].name === rule) {
          return styleSheets[i].cssRules[j];
        }
      }
    }
    return null;
  }

  /**
   * 获取指定动画规则的 key 值
   * @param {*} keyframesRule 动画规则
   * @returns {array} 动画的键名数组
   */
  getFrameKey(keyframesRule) {
    const keys = [];
    const cssRules = keyframesRule.cssRules;
    const len = cssRules.length;
    for (var i = 0; i < len; i++) {
      keys.push(cssRules[i].keyText);
    }

    // Removes all the % values from the array so
    // the getClosest function can perform calculations
    const nums = keys.map(function (str) {
      return str.replace('%', '');
    });

    return {
      keys,
      nums
    };
  }
}();
