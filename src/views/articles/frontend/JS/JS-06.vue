<template lang="pug">
    BoWen
        .p-1(slot="catalog")
            Steps(direction="vertical")
                Step(title="函数"
                    content="JavaScript 中的函数"
                    status="wait"
                    @click.native="toTop('#JS-06-1', 30)")
                Step(title="理解参数"
                    content="理解参数"
                    status="wait"
                    @click.native="toTop('#JS-06-2', 30)")
                Step(title="没有重载"
                    content="没有重载"
                    status="wait"
                    @click.native="toTop('#JS-06-3', 30)")
        .px-1
            .py-3.text-center
                h1
                    Icon(type="ios-book-outline")
                    | &nbsp;JS-函数
                p.pt-1 通过函数可以封装任意多条语句，而且可以在任何地方、任何时候调用执行
            h3#JS-06-1.ml-1
                Icon(type="logo-buffer")
                | &nbsp;函数
            Divider
            p ECMAScript 中的函数使用 function 关键字来声明，后跟一组参数以及函数体。
            pre.ml-2(v-highlight)
                code.js function functionName(arg0, arg1, ..., argN) { statements }
            p 函数可以通过其函数名来调用，后面还要加上一对圆括号和参数。
            p ECMAScript 中的函数在定义时不必指定是否返回值。实际上，任何函数在任何时候都可以通过 return 语句后跟要返回的值来实现返回值。
            p 函数会在执行完 return 语句之后停止并立即退出。
            p return 语句也可以不带有任何返回值。在这种情况下，函数在停止执行后将返回undefined 值。
            p 严格模式对函数有一些限制，如果发生以下情况，就会导致语法错误，代码无法执行：
                ul.ml-1.text-warn
                    li 不能把函数命名为eval 或arguments；
                    li 不能把参数命名为eval 或arguments；
                    li 不能出现两个命名参数同名的情况。
            h3#JS-06-2.ml-1
                Icon(type="logo-buffer")
                | &nbsp;理解参数
            Divider
            p ECMAScript 函数不介意传递进来多少个参数，也不在乎传进来参数是什么数据类型。
            p 即便你定义的函数只接收两个参数，在调用这个函数时你可以传递任意个参数，甚至是不传递参数。
            p 原因是 ECMAScript 中的参数在内部是用一个数组来表示的。函数接收到的始终都是这个数组，而不关心数组中包含哪些参数（如果有参数的话）。
            p.text-info 在函数体内可以通过 arguments 对象来访问这个参数数组，从而获取传递给函数的每一个参数。
            p.text-warn arguments 对象只是与数组类似（它并不是 Array 的实例），，因为可以使用方括号语法访问它的每一个元素。
            p 通过访问 arguments 对象的 length 属性可以获知有多少个参数传递给了函数。
            p.text-success 命名参数只提供便利，但不是必需的。
            p.text-success 没有传递值的命名参数将自动被赋予 undefined 值。这就跟定义了变量但又没有初始化一样。
            p arguments 它的值永远与对应命名参数的值保持同步。但是，这两个值它们的内存空间是独立的，只是它们的值会同步。
            pre.ml-2(v-highlight)
                code.js function test(num1, num2) {
                    | 
                    |     arguments[1] = 10;
                    |     console.log(arguments[0] + num2);
                    | }
                    | test(5,20) // 15
                    | test(5); // NaN
            p 需要记住的是，如果只传入了一个参数，那么为 arguments[1] 设置的值不会反应到命名参数中。这是因为 arguments 对象的长度是由传入的参数个数决定的，不是由定义函数时的命名参数的个数决定的。
            p.text-warn 严格模式下：通过 arguments[] 的形式无法改变参数的值，2、重写 arguments 的值会导致语法错误。
            pre.ml-2(v-highlight)
                code.js function test(num1, num2) {
                    | 
                    |     arguments[1] = 10;
                    |     console.log(arguments[0] + num2);
                    | }
                    | test(5,20) // 25
                    | test(5); // NaN
            p.text-warn 严格模式下：重写 arguments 的值会导致语法错误。
            p.text-success ECMAScript 中的所有参数传递的都是值，不可能通过引用传递参数。
            h3#JS-06-3.ml-1
                Icon(type="logo-buffer")
                | &nbsp;没有重载
            Divider
            p ECMAScirpt 函数没有签名，因为其参数是由包含零或多个值的数组来表示的。
            p 由于不存在函数签名的特性，ECMAScript 函数不能重载。
            p 如果在 ECMAScript 中定义了两个名字相同的函数，则该名字只属于后定义的函数。
            p 通过检查传入函数中参数的类型和数量并作出不同的反应，可以模仿方法的重载。
            pre.ml-2(v-highlight)
                code.js function saySomething() {
                    | 
                    |     // 根据传入参数的个数执行不同的代码
                    |     if (arguments.length == 1) {
                    |         console.log(arguments[0]);
                    |     } else if (arguments.length == 2) {
                    |         console.log(arguments[0] + arguments[1]);
                    |     }
                    | }
                    | saySomething('Hello');
                    | saySomething('Hello', 'world');
            p.text-right 参考资料：JavaScript 高级程序设计（第三版）
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
