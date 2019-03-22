// =============================================================== 操作对象 ===============================================================
export default class {
  /**
   * @description
   * 深拷贝一组对象的属性到目标对象
   * @param {object} 可选的返回拷贝结果的对象
   * @param {...object} 被拷贝的对象
   * @returns {object} deep copy `source`
   */
  deepClone(dest = {}, ...src) {
    // 下行代码也可实现深拷贝，但是undefined、function、symbol会在转换过程中被忽略
    // dest = JSON.parse(JSON.stringify(src));
    const clone = (dest = {}, src) => {
      Object.keys(src).forEach(key => {
        let prop = src[key];
        if (!isObject(prop)) return prop;
        if (prop === dest) return; // 避免死循环
        // 深拷贝实现
        if ('object' === typeof prop) {
          dest[key] = isArray(dest[key]) ? [] : {};
          clone(dest[key], prop);
        } else {
          dest[key] = prop;
        }
      });
    };
    // 拷贝多个对象
    src.forEach(obj => clone(dest, obj));
    return dest;
  }

  /**
   * @description
   * 深拷贝 => deepClone 的别名
   * @param {object} 可选的返回拷贝结果的对象
   * @param {...object} 被拷贝的对象
   * @returns {object} deep copy `source`
   */
  extend(dest, ...src) {
    return this.deepClone(dest, ...src);
  }

  /**
   * @description
   * 完全冻结一个对象，包括其属性对象
   * @param {object} obj 需要被冻结的对象
   * @returns {object} 冻结后的对象
   */
  constantize(obj) {
    Object.freeze(obj);
    Object.keys(obj).forEach(key => {
      if ('object' === typeof obj[key]) {
        contantize(obj[key]);
      }
    });

    return obj;
  }
}
