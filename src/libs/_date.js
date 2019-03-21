// =============================================================== 时间日期 ===============================================================
export default new class {
  /**
   * @description 格式化时间格式
   * @Returns {string} 格式化输出当前时间(yyyy-mm-dd hh-mm-ss)
   */
  formatDate(dateTime = new Date()) {
    dateTime = new Date(dateTime);
    let year = dateTime.getFullYear();
    let month = (dateTime.getMonth() + 1).toString().padStart(2, 0);
    let day = dateTime.getDate().toString().padStart(2, 0);
    let hour = dateTime.getHours().toString().padStart(2, 0);
    let minute = dateTime.getMinutes().toString().padStart(2, 0);
    let second = dateTime.getSeconds().toString().padStart(2, 0);
    let result = `${year}-${month}-${day} ${hour}-${minute}-${second}`;
    return result;
  }
}();
