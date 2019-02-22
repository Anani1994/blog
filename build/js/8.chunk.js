(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{356:function(t,l,s){"use strict";s.r(l);var a=s(495),i=s(394);for(var n in i)"default"!==n&&function(t){s.d(l,t,function(){return i[t]})}(n);var e=s(0),c=Object(e.a)(i.default,a.a,a.b,!1,null,null,null);c.options.__file="src/views/articles/frontend/AngularJS/angular-notes.vue",l.default=c.exports},394:function(t,l,s){"use strict";s.r(l);var a=s(395),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(l,t,function(){return a[t]})}(n);l.default=i.a},395:function(t,l,s){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default={data:function(){return{toTop:this.$util.toTop}}}},495:function(t,l,s){"use strict";var a=function(){var t=this,l=t.$createElement,s=t._self._c||l;return s("BoWen",[s("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[s("Steps",{attrs:{direction:"vertical"}},[s("Step",{attrs:{title:"使用笔录",content:"记录开发过程中相关知识点",status:"wait"},nativeOn:{click:function(l){t.toTop("#angular-notes-01",30)}}})],1)],1),t._v(" "),s("div",{staticClass:"px-1"},[s("div",{staticClass:"py-3 text-center"},[s("h1",[s("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" AngularJS 的使用笔记")],1),t._v(" "),s("p",{staticClass:"pt-1"},[t._v("记录工作中的学习中遇到的重点")])]),t._v(" "),s("h3",{staticClass:"ml-1",attrs:{id:"angular-notes-01"}},[s("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 使用笔录")],1),t._v(" "),s("Divider"),t._v(" "),s("p",[t._v("jQuery 是一个 JS 函数库，AngularJS是一个 JS 结构化框架。")]),t._v(" "),s("p",[t._v("AngularJS 中的所有 DOM 操作都是在指令中进行的。")]),t._v(" "),s("ul",{staticClass:"ml-2"},[t._v("ng-app 指令：\n                "),s("li",{staticClass:"ml-1"},[t._v("ng-app 指令用于告诉 AngularJS 应用当前这个元素是根元素。")]),t._v(" "),s("li",{staticClass:"ml-1"},[t._v("HTML 文档中必有且只能有一个 ng-app 指令，如果有多个 ng-app 指令，则只有第一个会被使用。")])]),t._v(" "),s("ul",{staticClass:"ml-2 mt-1"},[t._v("作用域对象：\n                "),s("li",{staticClass:"ml-1"},[t._v("作用域对象是一个 js 实例对象，ng-app 指令默认会创建一个根作用域对象($rootScope)。")]),t._v(" "),s("li",{staticClass:"ml-1"},[t._v("作用域对象的属性和方法与页面中的指令或表达式是关联的。")])]),t._v(" "),s("ul",{staticClass:"ml-2 mt-1"},[t._v("控制器：\n                "),s("li",{staticClass:"ml-1"},[t._v("控制器是用来控制 AngularJS 应用数据的实例对象。")]),t._v(" "),s("li",{staticClass:"ml-1"},[t._v("ng-controllerr 指令用来指定控制器的构造函数，Angular 会自动 new 此函数创建控制对象。")]),t._v(" "),s("li",{staticClass:"ml-1"},[t._v("在控制器函数中必须申明一个形参($scope)，然后 Angular 会自动将 $scope 对象传入。")]),t._v(" "),s("li",{staticClass:"ml-1"},[t._v("同时 Angular 还会创建一个新的作用域对象($scope)，它是根作用域对象($rootScope)的子对象。")])]),t._v(" "),s("ul",{staticClass:"ml-2 mt-1"},[t._v("ng-model 指令:\n                "),s("li",{staticClass:"ml-1"},[t._v("ng-model 指令绑定了 HTML 表单元素到 scope 变量中，如果 scope 中不存在变量, 将会创建它。")]),t._v(" "),s("li",{staticClass:"ml-1"},[t._v("<input>, <select>, <textarea>, 元素支持该指令。")])]),t._v(" "),s("ul",{staticClass:"ml-2 mt-1"},[t._v("表达式：\n                "),s("li",{staticClass:"ml-1"},[t._v("表达式通常是有一个返回值，可以放在任何需要值的地方，比如函数的参数，一个变量名，一个运算。")]),t._v(" "),s("li",{staticClass:"ml-1"},[t._v("语句通常表示一个完整的执行单位，一段完整的 js 可执行代码，有的语句也可以用表达式来执行，叫做表达式语句。")]),t._v(" "),s("li",{staticClass:"ml-1"},[t._v("AngularJS 中的语句用双重花括号来包含（{{}}），写在页面中用来显示数据，写在花括号中的变量会从作用域对象上获取。")])]),t._v(" "),s("p",{staticClass:"mt-1"},[t._v("开发的两种方式：1、命令式-更加注重执行的过程。2、声明式-更加看重的是执行的结果。")]),t._v(" "),s("ul",{staticClass:"ml-2"},[t._v("模块对象：用 angular.module 来注册和检索模块。\n                "),s("li",{staticClass:"ml-1"},[t._v("模块对象上有 controller 方法用于创建控制器，该方法返回模块对象，所以可以进行链式创建控制器。")]),t._v(" "),s("li",{staticClass:"ml-1"},[t._v("在创建控制器时，我们必须为控制器的函数声明依赖注入 $scope，然而当项目打包后，函数中的所有形参都会被替换(通常会是 a,b,c 等)，这时 AngularJS 执行时就会报错，为了解决这个问题 AngularJS 提出了显示声明依赖注入的方法代替之前隐式声明依赖注入的方法。")]),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"html"},[t._v('\x3c!-- html --\x3e\n<div ng-controller="MyCtrl">'+t._s(t.sayHello)+"</div>")])]),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"js"},[t._v("// 隐式声明依赖注入的方法\nfunction MyCtrl ($scope) {\n    $scope.sayHello = 'Hello world!';\n}")])]),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"js"},[t._v("// 显示声明依赖注入的方法\nangular.module('MyCtrl', ['$scope', function MyCtrl ($scope) {\n    // 因为数组中基本类型的值是不会被打包改变的，所以可以将依赖显式地写在数组中\n    // AngularJS 会查找数组中的值对应注入依赖\n    $scope.sayHello = 'Hello world!';\n}]);")])])]),t._v(" "),s("FooterDivider")],1)])},i=[];a._withStripped=!0,s.d(l,"a",function(){return a}),s.d(l,"b",function(){return i})}}]);