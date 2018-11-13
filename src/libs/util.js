let util = {

};

util.title = function (title, vm) {
  let newTitle = '码良的博客';
  if (title) {
    newTitle += ' - ' + (title.i18n ? vm.$t(title.i18n) : title);
  }
  window.document.title = newTitle;
};

util.toPage = function (nameStr, dataObj) {
  let obj = {
    name: nameStr,
    params: dataObj,
  };
  this.$router.push(obj);
}

// 节流函数，method 回调函数，context 上下文，delay 延迟
util.throttle = function (method, context, delay) {
  let wait = false;
  return function () {
    if (!wait) {
      method.apply(context, arguments);
      wait = true;
      setTimeout(() => {
        wait = false;
      }, delay);
    }
  }
};

// 防抖动函数，method 回调函数，context 上下文，event 传入的时间，delay 延迟
util.debounce = function (method, context, event, delay) {
  clearTimeout(method.tId);
  method.tId = setTimeout(() => {
    method.call(context, event);
  }, delay);
}

// this fun is created for a block named BoWen
util.toTop = function (eleId, n = 0) {
  let target = document.querySelector(eleId);
  let parent = document.querySelector('.innerContainer');
  $(target).css({
    opacity: 0
  });
  $(target).animate({
    opacity: 1
  }, 2000);
  // parent.scrollTop = target.offsetTop - n;
  $(parent).animate({
    scrollTop: target.offsetTop - n
  }, 1000);
}

util.formatDate = function () {
  let dateTime = new Date();
  let year = dateTime.getFullYear();
  let month = dateTime.getMonth() + 1;
  let day = dateTime.getDate();
  let hour = dateTime.getHours();
  let minute = dateTime.getMinutes();
  let second = dateTime.getSeconds();
  let result = year +
    '-' + (month < 10 ? '0' + month : month) +
    '-' + (day < 10 ? '0' + day : day) +
    ' ' + (hour < 10 ? '0' + hour : hour) +
    ':' + (minute < 10 ? '0' + minute : minute) +
    ':' + (second < 10 ? '0' + second : second);
  return result;
}

/**
 * @param source { string } 需要被检测替换的数据
 * @param replaced { Array } 被替换的符号
 */
util.removeSymbol = function (source, replaced) {
  if (source && replaced) {
    let regArr = [];
    if ('string' === typeof replaced) {
      regArr = [replaced];
    }
    if (replaced instanceof Array) {
      regArr = replaced;
    }
    for (let i = 0; i < regArr.length; i++) {
      let regItem = new RegExp('\\' + regArr[i], 'g');
      source = source.replace(regItem, '');
    }
    return source;
  }
}

export default util;
