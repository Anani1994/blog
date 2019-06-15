import util from "../util";

// =============================================================== 操作对象 ===============================================================
export default new class {
  constructor() {
    this.extend = this.extend.bind(this);
  }

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
      if (!util.isObject(src)) return src;
      Object.keys(src).forEach(key => {
        const prop = src[key];
        if (prop === dest) return; // 避免死循环
        // 深拷贝实现
        if (util.isObject(prop)) {
          dest[key] = util.isArray(dest[key]) ? [] : {};
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
   * 拷贝源对象的属性或方法（包括不可枚举）到目标对象
   * @param {*} target 目标对象
   * @param {*} source 源对象
   */
  copyProperties(target, source) {
    for (let key of Reflect.ownKeys(source)) {
      if (key !== "constructor" && key !== "prototype" && key !== "name") {
        let desc = Object.getOwnPropertyDescriptor(source, key);
        Object.defineProperty(target, key, desc);
      }
    }
  }

  /**
   * @description
   * 参数是多级对象时，需要在传参时只传递需要改变的项，此函数就是为了避免直接拷贝实参对象时
   * 如果传递的参数对象的属性少于形参，那么默认的参数对象上的属性会被抹掉的情况
   * @param {object} formalParameter 默认参数对象
   * @param {object} actualParameter 实参对象
   * @returns 结合了形参和实参后的对象
   */
  mergeParams(formalParameter, actualParameter) {
    const result = this.deepClone({}, formalParameter);

    const clone = (result, actualParameter) => {
      Object.keys(actualParameter).forEach(key => {
        if (!util.isObject(actualParameter[key])) {
          result[key] = actualParameter[key];
        } else {
          clone(result[key], actualParameter[key]);
        }
      });
    }

    clone(result, actualParameter);
    return result;
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
      if (util.isObject(obj[key])) {
        contantize(obj[key]);
      }
    });

    return obj;
  }
}();
