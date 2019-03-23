// =============================================================== 操作对象 ===============================================================
export default {
  /**
   * @description
   * 深拷贝 => deepClone 的别名
   * @param {object} 可选的返回拷贝结果的对象
   * @param {...object} 被拷贝的对象
   * @returns {object} deep copy `source`
   */
  extend(dest, ...src) {
    return this.deepClone(dest, ...src);
  },

  /**
   * @description
   * 完全冻结一个对象，包括其属性对象
   * @param {object} obj 需要被冻结的对象
   * @returns {object} 冻结后的对象
   */
  constantize(obj) {
    Object.freeze(obj);
    Object.keys(obj).forEach(key => {
      if (this.isObject(obj[key])) {
        contantize(obj[key]);
      }
    });

    return obj;
  }
};
