import i18n from '../i18n/index'

/*
 * 类的数据类型是函数，类本身指向构造函数
 * 类的所有方法都定义在类的 prototype 属性上面
 * 类的内部定义的所有方法，都是不可枚举的
 * 类必须使用 new 调用，否则会报错
 * 实例的属性除非显式定义在其本身（即定义在 this 对象上），否则都是定义在原型（即定义在class）
 * 类的所有实例共享一个原型对象
 * 类不存在变量提升
 * 类的方法内部如果含有this，它默认指向类的实例，但将其中方法提取出来单独使用，this会指向该方法运行时所在的环境，
 * 解决方法是，在构造方法中绑定 this，或使用 Proxy，或使用箭头函数
 * 如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，父类的静态方法，可以被子类继承
 */
const localUtil = class localUtil {
    /*
     * constructor 方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法
     * 如果没有显式定义，一个空的 constructor 方法会被默认添加
     * constructor 方法默认返回实例对象（即this），也可返回指定对象
     */
    constructor () {
        this.extend = this.extend.bind(this);
        this.deepClone = this.deepClone.bind(this);
    }

    // =============================================================== 博客钦点 ===============================================================
    /**
     * 设置网页标题
     * @param {string} 网页标题
     * @param {object} vue实例
     * @Returns undefined
     */
    title (title, vm) {
        let newTitle = vm.$t("message.basic_title");
        if (title) {
            newTitle += ' - ' + (title.i18n ? vm.$t((`message.${title.key}`)) : title);
        }
        window.document.title = newTitle;
    };

    /**
     * 路由跳转
     * @param {string} 路由名称
     * @param {object} 路由参数
     * @param {object} 上下文
     * @Returns undefined
     */
    toPage (nameStr, dataObj, context) {
        let obj = {
            name: nameStr,
            params: dataObj,
        };
        if (context) {
            return context.$router.push(obj);
        }
        this.$router.push(obj);
    }

    
    /**
     * created for a block named steps
     * @param {element} 需要滚动的元素
     * @param {number}  滚动后距离父元素的高度
     * @param {element} 滚动参考的父元素
     * @Returns undefined
     */
    toTop (ele, n = 0, eleParent) {
        let parent = document.querySelector('#bo-wen .layout-content'); // 兼容二代
        if (eleParent) {
            parent = document.querySelector(eleParent);
        }
        let target = document.querySelector(ele);
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

    // =============================================================== 性能优化 ===============================================================
    /**
     * 函数节流
     * @param {function} 回调函数
     * @param {this} 上下文环境
     * @param {number} 延迟(ms)
     * @Returns undefined
     */
    throttle (method, context, delay) {
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

    /**
     * 函数节流
     * @param {function} 回调函数
     * @param {this} 上下文环境
     * @param {} 传入的时间
     * @param {number} 延迟(ms)
     * @Returns undefined
     */
    debounce (method, context, event, delay) {
        clearTimeout(method.tId);
        method.tId = setTimeout(() => {
            method.call(context, event);
        }, delay);
    }

    // =============================================================== 时间日期 ===============================================================
    /**
     * @Returns {string} 格式化输出当前时间(yyyy-mm-dd hh-mm-ss)
     */
    formatDate () {
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

    // =============================================================== 拷贝对象 ===============================================================
    /*
     * 深拷贝
     * @param source 被拷贝的对象
     * @param target 可选的返回拷贝结果的对象
     * @returns {object} deep copy `source`
     */
    deepClone (source, target) {
        let key;
        let result = target;
        if (typeof (source) !== "object") {
            return source;
        }
        if (typeof (target) !== "object") {
            result = this.isArray(source) ? [] : {};
        }
        for (key in source) {
            let prop = source[key];
            // Prevent never-ending loop
            if (prop === result) {
                continue;
            }
            if (source.hasOwnProperty(key)) {
                if (typeof (prop) === "object") {
                    result[key] = this.isArray(prop) ? [] : {};
                    // arguments.callee指向拥有该arguments的函数对象
                    arguments.callee(prop, result[key]);
                } else {
                    result[key] = prop;
                }
            }
        }
        // 下行代码也可实现深拷贝，但是undefined、function、symbol会在转换过程中被忽略
        // result = JSON.parse(JSON.stringify(source));
        if (target) {
            target = result;
        }
        return result;
    }

    /*
     * @param {...Object} src Source object(s).
     * @returns {Object} Reference to `source`.
     */
    extend (source) {
        let i = 0;
        let len = arguments.length;
        for (i; i < len; ++i) {
            let temp = arguments[i];
            if (temp) {
                this.deepClone(arguments[i], source);
            }
        }
        return source;
    }

    // =============================================================== 事件处理 ===============================================================
    /*
     * 添加事件及其处理程序(兼容 IE)
     * @param {dom}
     * @param {string} 事件类型
     * @param {function} function (event) {}
     * @Returns undefined
     */
    addHandler (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    }

    /*
     * 移除事件及其处理程序(兼容 IE)
     * @param {dom}
     * @param {string} 事件类型
     * @param {function} function (event) {}
     * @Returns undefined
     */
    removeHandler (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    }

    /*
     * @params {event} 事件对象
     * @Returns 跨浏览器获取事件对象
     */
    getEvent (event) {
        return event ? event : window.event;
    }

    /*
     * @params {event} 事件对象
     * @Returns {element} 事件的目标
     */
    getTarget (event) {
        return event.target || event.srcElement;
    }

    /*
     * 阻止事件的默认行为
     * @params {event} 事件对象
     * @Returns undefined
     */
    preventDefault (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }

    /*
     * 取消事件冒泡
     * @params {event} 事件对象
     * @Returns undefined
     */
    stopPropagation (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }

    // =============================================================== 数组操作 ===============================================================
    /*
     * @param index1,index2 {number} 对调位置的两个索引
     * @param arr {Array} 操作的数组
     * @Returns undefined
     */
    swapArray (index1, index2, arr) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }

    // =============================================================== 相关判断 ===============================================================
    /*
     * 判断是否是字符串
     * @param {*} 需要被检测的
     * @Returns Boolean
     */
    isString (value) {
        return 'string' === typeof value;
    }

    /*
     * 判断是否是数字
     * @param {*} 需要被检测的
     * @Returns Boolean
     */
    isNumber (value) {
        return 'number' === typeof value;
    }

    /*
     * 判断是否是数字
     * @param {*} 需要被检测的
     * @Returns Boolean
     */
    isUndefined (value) {
        return 'undefined' === typeof value;
    }

    /*
     * 判断是否是布尔值
     * @param {*} 需要被检测的
     * @Returns Boolean
     */
    isBoolean (value) {
        return 'boolean' === typeof value;
    }

    /*
     * 判断是否是对象
     * @param {*} 需要被检测的
     * @Returns Boolean
     */
    isObject (value) {
        return null !== value && 'object' === typeof value;
    }

    /*
     * 判断是否是数组
     * @param {*} 需要被检测的
     * @Returns Boolean
     */
    isArray (value) {
        if (!Array.isArray) {
            Array.isArray = function(arg) {
                return Object.prototype.toString.call(arg) === '[object Array]';
            };
        }
        return Array.isArray(value);
    }

    /*
     * 判断是否是函数
     * @param {*} 需要被检测的
     * @Returns Boolean
     */
    isFunction (value) {
        return 'function' === typeof value;
    }

    /*
     * 判断是否是正则
     * @param {*} 需要被检测的
     * @Returns Boolean
     */
    isRegExp (value) {
        return toString.call(value) === '[object RegExp]';
    }
}

let util = new localUtil();

export default util;
