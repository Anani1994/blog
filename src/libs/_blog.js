// =============================================================== 博客钦点 ===============================================================
import i18n from "../i18n/index";

export default new class {
  /**
   * 设置网页标题
   * @param {string} 网页标题
   * @param {object} vue实例
   * @Returns undefined
   */
  title(title, vm) {
    let newTitle = vm.$t("message.basic_title");
    if (title) {
      newTitle += " - " + (title.i18n ? vm.$t(`message.${title.key}`) : title);
    }
    window.document.title = newTitle;
  }

  /**
   * 路由跳转
   * @param {string} 路由名称
   * @param {object} 路由参数
   * @param {object} 上下文
   * @Returns undefined
   */
  toPage(nameStr, dataObj = {}, context) {
    let obj = {
      name: nameStr,
      params: dataObj
    };
    if (context) {
      return context.$router.push(obj);
    }
    this.$router.push(obj);
  }

  /**
   * created for a block named steps
   * @param {element} 需要滚动的元素
   * @param {element} 滚动参考的父元素
   * @param {number}  滚动后距离父元素的高度
   * @Returns undefined
   */
  toTop(eleTarget, eleParent, n = 0) {
    let target = document.querySelector(eleTarget);
    let parent = document.querySelector(eleParent);
    $(target).css({
      opacity: 0
    });
    $(target).animate(
      {
        opacity: 1
      },
      2000
    );
    $(parent).animate(
      {
        scrollTop: target.offsetTop - n
      },
      1000
    );
  }
}();
