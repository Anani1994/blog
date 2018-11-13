<template lang="pug">
    BoWen
        .p-1(slot="catalog")
            Steps(direction="vertical")
                Step(title="if 语句"
                    content="if 语句"
                    status="wait"
                    @click.native="toTop('#JS-05-1', 30)")
                Step(title="do-while 语句"
                    content="do-while 语句"
                    status="wait"
                    @click.native="toTop('#JS-05-2', 30)")
                Step(title="while 语句"
                    content="while 语句"
                    status="wait"
                    @click.native="toTop('#JS-05-3', 30)")
                Step(title="for 语句"
                    content="for 语句"
                    status="wait"
                    @click.native="toTop('#JS-05-4', 30)")
                Step(title="for-in 语句"
                    content="for-in 语句"
                    status="wait"
                    @click.native="toTop('#JS-05-5', 30)")
                Step(title="label 语句"
                    content="label 语句"
                    status="wait"
                    @click.native="toTop('#JS-05-6', 30)")
                Step(title="break 和 continue 语句 语句"
                    content="break 和 continue 语句 语句"
                    status="wait"
                    @click.native="toTop('#JS-05-7', 30)")
                Step(title="with 语句"
                    content="with 语句"
                    status="wait"
                    @click.native="toTop('#JS-05-8', 30)")
                Step(title="switch 语句"
                    content="switch 语句"
                    status="wait"
                    @click.native="toTop('#JS-05-9', 30)")
        .px-1
            .py-3.text-center
                h1
                    Icon(type="ios-book-outline")
                    | &nbsp;JS-语句
                p.pt-1 ECMA-262 规定了一组语句，也称为流控制语句
            h3#JS-05-1.ml-1
                Icon(type="logo-buffer")
                | &nbsp;if 语句
            Divider
            p 如右所示是 if 语句的语法：
                pre.custom-pre if (condition) statement1 else statement2 
            p 其中的 condition（条件）可以是任意表达式；而且对这个表达式求值的结果不一定是布尔值。 ECMAScript 会自动调用 Boolean() 转换函数将这个表达式的结果转换为一个布尔值。如果对 condition 求值的结果是 true， 则执行 statement1，如果对 condition 求值的结果是 false，则执行 statement2。 
            h3#JS-05-2.ml-1
                Icon(type="logo-buffer")
                | &nbsp;do-while 语句
            Divider
            p do-while 语句是一种后测试循环语句，即只有在循环体中的代码执行之后，才会测试出口条件。
            pre.ml-2(v-highlight)
                code.js var i = 9;
                    |
                    | do {
                    |     console.log(i);
                    |     i--;
                    | } while (i > 9);
                    | // 上面的代码会输出一次 9
            h3#JS-05-3.ml-1
                Icon(type="logo-buffer")
                | &nbsp;while 语句
            Divider
            p while 语句属于前测试循环语句，也就是说，在循环体内的代码被执行之前，就会对出口条件求值。
            pre.ml-2(v-highlight)
                code.js var i = 9;
                    |
                    | while (i > 9) {
                    |     console.log(i);
                    |     i--;
                    | }
                    | // 上面的代码没有输出
            h3#JS-05-4.ml-1
                Icon(type="logo-buffer")
                | &nbsp;for 语句
            Divider
            p for 语句也是一种前测试循环语句，但它具有在执行循环之前初始化变量和定义循环后要执行的代码的能力。
            p 如右是 for 语句的语法：
                pre.custom-pre for (initialization(语句 1); expression(语句 2); post-loop-expression(语句 3)) statement(执行的代码)
            p 语句 1 （代码块）开始前执行，语句 2 定义运行循环（代码块）的条件，语句 3 在循环（代码块）已被执行之后执行。
            p.text-info for 语句与 while 语句的功能一样，for 循环只是把与循环有关的代码集中在了一个位置。
            p.text-success 由于 ECMAScript 中不存在块级作用域，因此在循环内部定义的变量也可以在外部访问到。
            p.text-muted for 语句中的初始化表达式、控制表达式和循环后表达式都是可选的。将这三个表达式全部省略，就会创建一个无限循环。
            pre.ml-2(v-highlight)
                code.js for (;;) { // 无限循环
                    |
                    |     doSomething();
                    | }
            p.text-muted 只给出控制表达式实际上就把 for 循环转换成了 while 循环。
            h3#JS-05-5.ml-1
                Icon(type="logo-buffer")
                | &nbsp;for-in 语句
            Divider
            p for-in 语句是一种精准的迭代语句，可以用来枚举对象的属性。
            pre.ml-2(v-highlight)
                code.js for (var propName in window) {
                    |
                    |     document.write(propName);
                    | }
            p 控制语句中的 var 操作符也不是必需的。但是，为了保证使用局部变量，我们推荐上面例子中的这种做法。
            p ECMAScript 对象的属性没有顺序，返回的先后次序可能会因浏览器而异。
            p.text-muted 如果表示要迭代的对象的变量值为 null 或 undefined，for-in 语句会抛出错误。ECMAScript 5 更正了这一行为；对这种情况不再抛出错误，而只是不执行循环体。为了保证最大限度的兼容性，建议在使用 for-in 循环之前，先检测确认该对象的值不是 null 或 undefined。
            h3#JS-05-6.ml-1
                Icon(type="logo-buffer")
                | &nbsp;label 语句
            Divider
            p 使用 label 语句可以在代码中添加标签，加标签的语句一般都 要与 for 语句等循环语句配合使用。
            h3#JS-05-7.ml-1
                Icon(type="logo-buffer")
                | &nbsp;break 和 continue 语句
            Divider
            p break 和 continue 语句用于在循环中精确地控制代码的执行。
            p break 语句会立即退出循环， 强制继续执行循环后面的语句。
            p continue 语句虽然也是立即退出循环，但退出循环后会从循环的顶部继续执行。
            pre.ml-2(v-highlight)
                code.js var num = 0;
                    |
                    | for (var i = 1; i < 10; i++) {
                    |     if (i % 5 == 0) {
                    |         break;
                    |     }
                    |     num++;
                    | }
                    | console.log(num); //4
                    | // 将其中的 break 换成 continue 时会输出 8
            h3#JS-05-8.ml-1
                Icon(type="logo-buffer")
                | &nbsp;with 语句
            Divider
            p with 语句的作用是将代码的作用域设置到一个特定的对象中。
            p with 语句的语法如右所示：
                pre.custom-pre with (expression) { statement };
            pre.ml-2(v-highlight)
                code.js var qs = location.search.substring(1);
                    | 
                    | var hostName = location.hostname;
                    | var url = location.href;
                    | // 如果使用 with 语句，可以像下面这样
                    | with(location) {
                    |     var qs = search.substring(1);
                    |     var hostName = hostname;
                    |     var url = href;
                    | }
            p.text-info 如果大量使用 with 语句会导致性能下降，同时也会给调试代码造成困难。
            p.text-warn 严格模式下不允许使用 with 语句，否则将视为语法错误。
            h3#JS-05-9.ml-1
                Icon(type="logo-buffer")
                | &nbsp;switch 语句
            Divider
            p 首先设置表达式 n（通常是一个变量）。随后表达式的值会与结构中的每个 case 的值做比较。如果存在匹配，则与该 case 关联的代码块会被执行。请使用 break 来阻止代码自动地向下一个 case 运行。
            p.text-warn 如果省略 break 关键字，就会导致执行完当前 case 后，继续执行下一个 case。如果确实需要混合几种情形，最好在代码中添加注释，说明你是有意省略了 break 关键字。
            p.text-info 最后的 default 关键字则用于在表达式不匹配前面任何一种情形的时候，执行机动代码。
            pre.ml-2(v-highlight)
             code.js switch (n)
                    | 
                    | {
                    |     case 1:
                    |         dosomething0(); // 执行代码块 1
                    |         break;
                    |     case 2:
                    |         dosomething1(); // 执行代码块 2
                    |         break;
                    |     default:
                    |         // 与 case 1 和 case 2 不同时执行的代码
                    |         dosomething2();
                    | }
            p 在 switch 语句中使用任何数据类型（在很多其他语言中只能使用数值），无论是字符串，还是对象。
            p 每个 case 的值不一定是常量，可以是变量，甚至是表达式。
            p.text-success switch 语句在比较值时使用的是全等操作符，因此不会发生类型转换。
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
