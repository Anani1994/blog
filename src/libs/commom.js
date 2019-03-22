export default class {
  /**
   * 判断是否是字符串
   * @param {*} 需要被检测的
   * @Returns Boolean
   */
  isString(value) {
    return "string" === typeof value;
  }

  /**
   * 判断是否是数字
   * @param {*} 需要被检测的
   * @Returns Boolean
   */
  isNumber(value) {
    return "number" === typeof value;
  }

  /**
   * 判断是否是数字
   * @param {*} 需要被检测的
   * @Returns Boolean
   */
  isUndefined(value) {
    return "undefined" === typeof value;
  }

  /**
   * 判断是否是布尔值
   * @param {*} 需要被检测的
   * @Returns Boolean
   */
  isBoolean(value) {
    return "boolean" === typeof value;
  }

  /**
   * 判断是否是对象
   * @param {*} 需要被检测的
   * @Returns Boolean
   */
  isObject(value) {
    return null !== value && "object" === typeof value;
  }

  /**
   * 判断是否是数组
   * @param {*} 需要被检测的
   * @Returns Boolean
   */
  isArray(value) {
    if (!Array.isArray) {
      Array.isArray = function(arg) {
        return Object.prototype.toString.call(arg) === "[object Array]";
      };
    }
    return Array.isArray(value);
  }

  /**
   * 判断是否是函数
   * @param {*} 需要被检测的
   * @Returns Boolean
   */
  isFunction(value) {
    return "function" === typeof value;
  }

  /**
   * 判断是否是正则
   * @param {*} 需要被检测的
   * @Returns Boolean
   */
  isRegExp(value) {
    return toString.call(value) === "[object RegExp]";
  }

  /**
   * 对传入的值与最大值和最小值进行比较
   * @parmas {number} 传入的值
   * @parmas {number} 最小值
   * @parmas {number} 最大值
   * @returns {number} 大于最大取最大，小于最小取最小，否则返回原值
   */
  clamp(value, min = 0, max = 0) {
    if (value < min) {
      return min;
    }
    if (value > max) {
      return max;
    }
    return value;
  }
};
