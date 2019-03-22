// =============================================================== 数组操作 ===============================================================
export default class {
  /**
   * @description 对调数组中的两个元素的位置
   * @param index1 {number} 对调元素的索引
   * @param index2 {number} 对调元素的索引
   * @param arr {Array} 操作的数组
   * @Returns 改变后的数组
   */
  swapArray(index1, index2, arr) {
    // >>>>>>>>>>>>ES5>>>>>>>>>>>>>>>
    // let temp = arr[index1];
    // arr[index1] = arr[index2];
    // arr[index2] = temp;
    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
  }
}
