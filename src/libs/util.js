import array from "./_array";
import blog from "./_blog";
import date from "./_date";
import object from "./_object";
import common from "./_commom";
import event from "./_event";
import perf from "./_performance";

/**
 * 类的数据类型是函数，类本身指向构造函数
 * 类的所有方法都定义在类的 prototype 属性上面
 * 类的内部定义的所有方法，都是不可枚举的
 * 类必须使用 new 调用，否则会报错
 * 实例的属性除非显式定义在其本身（即定义在 this 对象上），否则都是定义在原型（即定义在class）
 * 类的所有实例共享一个原型对象
 * 类不存在变量提升
 * 类的方法内部如果含有this，它默认指向类的实例，但将其中方法提取出来单独使用，this会指向该方法运行时所在的环境，
 * 解决方法是，在构造方法中绑定 this，或使用 Proxy，或使用箭头函数
 * 如果在一个方法前，加上 static 关键字，就表示该方法不会被实例继承，而是直接通过类来调用，父类的静态方法，可以被子类继承
 */
class Util {
  /**
   * constructor 方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法
   * 如果没有显式定义，一个空的 constructor 方法会被默认添加
   * constructor 方法默认返回实例对象（即this），也可返回指定对象
   */
  constructor() {
    this.deepClone = this.deepClone.bind(this);
    this.mixins = this.mixins.bind(this);
  }

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
      Array.isArray = function (arg) {
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
   * @param  {*} the value to check 
   * @returns {boolean} Returns `true` if `value` is empty, else `false`.
   */
  isEmpty(value) {
    return value === '' || value === undefined || value === null;
  }

  /**
   * 该混合由阮老师出品
   * http://es6.ruanyifeng.com/#docs/class-extends#Mixin-%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%AE%9E%E7%8E%B0
   * @description
   * 将多个对象合成一个新的对象，新对象具有各个组成成员的接口
   * @param  {...any} mixins 需要被继承的一个或多个类
   * @returns '继承'了多个类的类
   */
  mixins(...mixins) {
    const that = this;
    /**
     * @description
     * 将目标类的实例属性拷贝给混合类的实例
     */
    class Mixin {
      constructor() {
        for (let mixin of mixins) {
          that.copyProperties(this, new mixin()); // 拷贝实例属性
        }
      }
    }

    for (let mixin of mixins) {
      that.copyProperties(Mixin, mixin); // 拷贝静态属性
      that.copyProperties(Mixin.prototype, mixin.prototype); // 拷贝原型属性
    }

    return Mixin;
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
   * 深拷贝一组对象的属性到目标对象
   * @param {object} 可选的返回拷贝结果的对象
   * @param {...object} 被拷贝的对象
   * @returns {object} deep copy `source`
   */
  deepClone(dest = {}, ...src) {
    // 下行代码也可实现深拷贝，但是undefined、function、symbol会在转换过程中被忽略
    // dest = JSON.parse(JSON.stringify(src));
    const clone = (dest = {}, src) => {
      if (!this.isObject(src)) return src;
      Object.keys(src).forEach(key => {
        const prop = src[key];
        if (prop === dest) return; // 避免死循环
        // 深拷贝实现
        if (this.isObject(prop)) {
          dest[key] = this.isArray(dest[key]) ? [] : {};
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
}

const util = new Util();
const sources = [blog, array, object, date, common, event, perf];
util.deepClone(util, ...sources);

export default util;
