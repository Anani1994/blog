import common from "./commom";
import event from "./event";
import arr from "./_array";
import obj from "./_object";
import date from "./_date";
import performance from "./performance";
import blog from "./_blog";
import canvas from "./_canvas";

function mixins(...mixins) {
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
  class Mixin {
    /**
     * constructor 方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法
     * 如果没有显式定义，一个空的 constructor 方法会被默认添加
     * constructor 方法默认返回实例对象（即this），也可返回指定对象
     */
    constructor() {
      for (let mixin of mixins) {
        copyProperties(this, new mixin()); // 拷贝实例属性
      }
    }
  }

  for (let mixin of mixins) {
    copyProperties(Mixin, mixin); // 拷贝静态属性
    copyProperties(Mixin.prototype, mixin.prototype); // 拷贝原型属性
  }

  return Mixin;

  function copyProperties(target, source) {
    for (let key of Reflect.ownKeys(source)) {
      if (key !== 'constructor'
        && key !== 'prototype'
        && key !== 'name'
      ) {
        let desc = Object.getOwnPropertyDescriptor(source, key);
        Object.defineProperty(target, key, desc);
      }
    }
  }
}
// 该混合由阮老师出品
// http://es6.ruanyifeng.com/#docs/class-extends#Mixin-%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%AE%9E%E7%8E%B0

class Util extends mixins(common, event, arr, obj, date, performance, blog, canvas) {}

const util = new Util();

export default util;
