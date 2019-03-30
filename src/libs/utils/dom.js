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
}();
