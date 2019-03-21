// =============================================================== 性能优化 ===============================================================
export default new class {
  /**
   * 函数节流
   * @param {function} 回调函数
   * @param {this} 上下文环境
   * @param {number} 延迟(ms)
   * @Returns undefined
   */
  throttle(method, context, delay) {
    let wait = false;
    return function() {
      if (!wait) {
        method.apply(context, arguments);
        wait = true;
        setTimeout(() => {
          wait = false;
        }, delay);
      }
    };
  }

  /**
   * 防抖动函数
   * @param {function} 回调函数
   * @param {this} 上下文环境
   * @param {only} 传入的参数
   * @param {number} 延迟(ms)
   * @Returns undefined
   */
  debounce(method, context, args, delay = 500) {
    clearTimeout(method.tId);
    method.tId = setTimeout(() => {
      method.call(context, args);
    }, delay);
  }
}();
