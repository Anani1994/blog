// =============================================================== 拷贝对象 ===============================================================
export default new class {
  constructor() {
    this.extend = this.extend.bind(this);
    this.deepClone = this.deepClone.bind(this);
  }

  /**
   * 深拷贝
   * @param source 被拷贝的对象
   * @param target 可选的返回拷贝结果的对象
   * @returns {object} deep copy `source`
   */
  deepClone(source, target) {
    let key;
    let result = target;
    if (typeof source !== "object") {
      return source;
    }
    if (typeof target !== "object") {
      result = this.isArray(source) ? [] : {};
    }
    for (key in source) {
      let prop = source[key];
      // Prevent never-ending loop
      if (prop === result) {
        continue;
      }
      if (source.hasOwnProperty(key)) {
        if (typeof prop === "object") {
          result[key] = this.isArray(prop) ? [] : {};
          // arguments.callee指向拥有该arguments的函数对象，但在严格模式下会报错
          this.deepClone(prop, result[key]);
        } else {
          result[key] = prop;
        }
      }
    }
    // 下行代码也可实现深拷贝，但是undefined、function、symbol会在转换过程中被忽略
    // result = JSON.parse(JSON.stringify(source));
    if (target) {
      target = result;
    }
    return result;
  }

  /**
   * @param {...Object} src Source object(s).
   * @returns {Object} Reference to `source`.
   */
  extend(source) {
    let i = 0;
    let len = arguments.length;
    for (i; i < len; ++i) {
      let temp = arguments[i];
      if (temp) {
        this.deepClone(arguments[i], source);
      }
    }
    return source;
  }
}();
