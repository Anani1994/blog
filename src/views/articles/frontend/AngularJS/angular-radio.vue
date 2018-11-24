<template lang="pug">
    BoWen
        .p-1(slot="catalog")
            Steps(direction="vertical")
                Step(title="常规的获取方式"
                    content="常规的获取方式"
                    status="wait"
                    @click.native="toTop('#angular-radio-1', 30)")
                Step(title="jQuery 的获取方式"
                    content="jQuery 的获取方式"
                    status="wait"
                    @click.native="toTop('#angular-radio-2', 30)")
                Step(title="Angular 的获取方式"
                    content="Angular 的获取方式"
                    status="wait"
                    @click.native="toTop('#angular-radio-3', 30)")
        .px-1
            .py-3.text-center
                h1
                    Icon(type="ios-book-outline")
                    | &nbsp;AngularJS 获取 radio 选中的值
                p.pt-1 AngularJS 获取 实时获取被选中的 radio 的值
            h3#angular-radio-1.ml-1
                Icon(type="logo-buffer")
                | &nbsp;常规的获取方式
            Divider
            p 原生js 获取 radio 选中的值的核心思想就是遍历所有的单选按钮，检测是否被选中，当某个单选按钮选中的时候，将它对应的值传递给我们赋值的参数，然后退出遍历循环。
            pre.ml-2(v-highlight)
                code.html &lt;label&gt;
                    | 
                    |     &lt;input type="radio" name="sex" value="male" checked="checked"&gt;男
                    | &lt;/label&gt;
                    | &lt;label&gt;
                    |     &lt;input type="radio" name="sex" value="female"&gt;女
                    | &lt;/label&gt;
                    | &lt;p&gt;
                    |     &lt;button onclick="logValue()"&gt;打印&lt;/button&gt;
                    | &lt;/p&gt;
            pre.ml-2(v-highlight)
                code.js // 核心函数
                    | 
                    | function getCheckedRadioValue (radioName) {
                    |     let radios = document.getElementsByName(radioName);
                    |     if (radios.length) {
                    |         for (let i = 0; i < radios.length; i++) {
                    |             if (radios[i].checked) {
                    |                 return radios[i].value;
                    |             }
                    |         }
                    |     } else {
                    |         return undefined;
                    |     }
                    | }
                    | // 测试函数
                    | function logValue() {
                    |     console.log(getCheckedRadioValue('sex'))
                    | }
            h3#angular-radio-2.ml-1
                Icon(type="logo-buffer")
                | &nbsp;jQuery 的获取方式
            Divider
            p jQuery 获取 radio 选中的值的方式有多种，比如：
            pre.ml-2(v-highlight)
                code.html &lt;label&gt;
                    | 
                    |     &lt;input type="radio" name="phone" value="huawei" checked="checked">华&gt;
                    | &lt;/label&gt;
                    | &lt;label&gt;
                    |     &lt;input type="radio" name="phone" value="xiaomi">小&gt;
                    | &lt;/label&gt;
                    | &lt;p&gt;
                    |     &lt;button onclick="logValue()">打印&lt;/button&gt;
                    | &lt;/p&gt;
            pre.ml-2(v-highlight)
                code.js function logValue() {
                    | 
                    |     console.log($('input:radio[name="phone"]:checked').val());
                    |     console.log($('input:radio:checked').val());
                    |     console.log($("input[type='radio']:checked").val());
                    |     console.log($("input[name='phone']:checked").val());
                    | }
            p 另外其中的 .val() 也可以换作 .attr('value')。
            h3#angular-radio-3.ml-1
                Icon(type="logo-buffer")
                | &nbsp;Angular 的获取方式
            Divider
            p 第一种使用方式：
            pre.ml-2(v-highlight)
                code.pug // pug 文件
                    | 
                    | div(ng-app="app", ng-controller="appCon")
                    |     input(type="radio", name="fruit", value="apple", ng-model="testValue")/ apple
                    |     input(type="radio", name="fruit", value="banana", ng-model="testValue")/ banana
                    |     input(type="text", name="result1", ng-model="testValue")/
            pre.ml-2(v-highlight)
                code.js var App = angular.module('app', []);
                    | 
                    | App.controller('appCon', ['$scope', function ($scope) {
                    |     $scope.testValue = "banana";
                    | }]);
            p 使用 ng-model 把 radio 绑到一个变量上，ng-value 使用表达式来表示值。选中时它的值就是 ng-value 的值了。
            p 第二种使用方式：
            pre.ml-2(v-highlight)
                code.pug // pug 文件,为避免在文中读取 { {fruit} } 报错，所以多添加了两个花括号之间的空格，实际中应去掉
                    |
                    | div(ng-app="app", ng-controller="appCon")
                    |     form(name="testForm")
                    |         label(ng-repeat="fruit in fruits", for="{ {fruit} }") { {fruit} }
                    |             input(type="radio", name="fruit", ng-value="fruit", ng-model="test.testValue2", id="{ {fruit} }")/
                    |             input(type="text", name="result2", ng-model="test.testValue2")/
            pre.ml-2(v-highlight)
                code.js var App = angular.module('app', []);
                    | 
                    | App.controller('appCon', ['$scope', function ($scope) {
                    |     // 为何此处只能为对象？
                    |     $scope.test = {
                    |         testValue2: "banana"
                    |     };
                    |     $scope.fruits = ['apple', 'banana'];
                    | }]);
            p 第三种使用方式：
            p 在第二种方式的基础上，我们可以在 .pug 中通过 
                pre.custom-pre testForm.fruit.$modelValue
                |  或 
                pre.custom-pre testForm.fruit.$viewValue
                |  来获取选中的值。
            p 其中 testForm 为 form 元素的 name 属性的值，fruit 为 input 元素 name 属性的值。
            p.text-info 在单选框中 ng-model 绑定输出的是 value 属性的值。
            p.text-info 将 value 改为 ng-value 时，绑定的表达式必须是对象，不知为何？
            <FooterDivider></FooterDivider>
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
