export default new class {
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
}();
