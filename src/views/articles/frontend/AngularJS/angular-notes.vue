<template>
    <BoWen>
        <div class="p-1" slot="catalog">
            <Steps direction="vertical">
                <Step
                    title="使用笔录"
                    content="记录开发过程中相关知识点"
                    status="wait"
                    @click.native="toTop('#angular-notes-01', 30)">
                </Step>
            </Steps>
        </div>
        <div class="px-1">
            <div class="py-3 text-center">
                <h1><Icon type="ios-book-outline" /> AngularJS 的使用笔记</h1>
                <p class="pt-1">记录工作中的学习中遇到的重点</p>
            </div>
            <h3 id="angular-notes-01" class="ml-1"><Icon type="logo-buffer" /> 使用笔录</h3>
            <Divider />
            <p>jQuery 是一个 JS 函数库，AngularJS是一个 JS 结构化框架。</p>
            <p>AngularJS 中的所有 DOM 操作都是在指令中进行的。</p>
            <ul class="ml-2">ng-app 指令：
                <li class="ml-1">ng-app 指令用于告诉 AngularJS 应用当前这个元素是根元素。</li>
                <li class="ml-1">HTML 文档中必有且只能有一个 ng-app 指令，如果有多个 ng-app 指令，则只有第一个会被使用。</li>
            </ul>
            <ul class="ml-2 mt-1">作用域对象：
                <li class="ml-1">作用域对象是一个 js 实例对象，ng-app 指令默认会创建一个根作用域对象($rootScope)。</li>
                <li class="ml-1">作用域对象的属性和方法与页面中的指令或表达式是关联的。</li>
            </ul>
            <ul class="ml-2 mt-1">控制器：
                <li class="ml-1">控制器是用来控制 AngularJS 应用数据的实例对象。</li>
                <li class="ml-1">ng-controllerr 指令用来指定控制器的构造函数，Angular 会自动 new 此函数创建控制对象。</li>
                <li class="ml-1">在控制器函数中必须申明一个形参($scope)，然后 Angular 会自动将 $scope 对象传入。</li>
                <li class="ml-1">同时 Angular 还会创建一个新的作用域对象($scope)，它是根作用域对象($rootScope)的子对象。</li>
            </ul>
            <ul class="ml-2 mt-1">ng-model 指令:
                <li class="ml-1">ng-model 指令绑定了 HTML 表单元素到 scope 变量中，如果 scope 中不存在变量, 将会创建它。</li>
                <li class="ml-1">&lt;input&gt;, &lt;select&gt;, &lt;textarea&gt;, 元素支持该指令。</li>
            </ul>
            <ul class="ml-2 mt-1">表达式：
                <li class="ml-1">表达式通常是有一个返回值，可以放在任何需要值的地方，比如函数的参数，一个变量名，一个运算。</li>
                <li class="ml-1">语句通常表示一个完整的执行单位，一段完整的 js 可执行代码，有的语句也可以用表达式来执行，叫做表达式语句。</li>
                <li class="ml-1">AngularJS 中的语句用双重花括号来包含（{{}}），写在页面中用来显示数据，写在花括号中的变量会从作用域对象上获取。</li>
            </ul>
            <p class="mt-1">开发的两种方式：1、命令式-更加注重执行的过程。2、声明式-更加看重的是执行的结果。</p>
            <ul class="ml-2">模块对象：用 angular.module 来注册和检索模块。
                <li class="ml-1">模块对象上有 controller 方法用于创建控制器，该方法返回模块对象，所以可以进行链式创建控制器。</li>
                <li class="ml-1">在创建控制器时，我们必须为控制器的函数声明依赖注入 $scope，然而当项目打包后，函数中的所有形参都会被替换(通常会是 a,b,c 等)，这时 AngularJS 执行时就会报错，为了解决这个问题 AngularJS 提出了显示声明依赖注入的方法代替之前隐式声明依赖注入的方法。</li>
                <pre class="ml-2" v-highlight><code class="html">&lt;!-- html --&gt;
&lt;div ng-controller="MyCtrl"&gt;{{sayHello}}&lt;/div&gt;</code></pre>
            <pre class="ml-2" v-highlight><code class="js">// 隐式声明依赖注入的方法
function MyCtrl ($scope) {
    $scope.sayHello = 'Hello world!';
}</code></pre>
<pre class="ml-2" v-highlight><code class="js">// 显示声明依赖注入的方法
angular.module('MyCtrl', ['$scope', function MyCtrl ($scope) {
    // 因为数组中基本类型的值是不会被打包改变的，所以可以将依赖显式地写在数组中
    // AngularJS 会查找数组中的值对应注入依赖
    $scope.sayHello = 'Hello world!';
}]);</code></pre>
            </ul>
            <FooterDivider></FooterDivider>
        </div>
    </BoWen>
</template>

<script>
export default {
    data() {
        return {
            toTop: this.$util.toTop
        }
    }
}
</script>
