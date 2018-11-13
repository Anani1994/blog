<template lang="pug">
    BoWen
        .p-1(slot="catalog")
            Steps(direction="vertical")
                Step(title="基本概念及创建"
                    content="基本概念及创建"
                    status="wait"
                    @click.native="toTop('#JS-11-1', 30)")
                Step(title="检测数组"
                    content="检测数组"
                    status="wait"
                    @click.native="toTop('#JS-11-2', 30)")
                Step(title="转换方法"
                    content="转换方法"
                    status="wait"
                    @click.native="toTop('#JS-11-3', 30)")
                Step(title="栈方法"
                    content="栈方法"
                    status="wait"
                    @click.native="toTop('#JS-11-4', 30)")
                Step(title="队列方法"
                    content="队列方法"
                    status="wait"
                    @click.native="toTop('#JS-11-5', 30)")
                Step(title="重排序方法"
                    content="重排序方法"
                    status="wait"
                    @click.native="toTop('#JS-11-6', 30)")
                Step(title="操作方法"
                    content="操作方法"
                    status="wait"
                    @click.native="toTop('#JS-11-7', 30)")
                Step(title="位置方法"
                    content="位置方法"
                    status="wait"
                    @click.native="toTop('#JS-11-8', 30)")
                Step(title="迭代方法"
                    content="迭代方法"
                    status="wait"
                    @click.native="toTop('#JS-11-9', 30)")
                Step(title="归并方法"
                    content="归并方法"
                    status="wait"
                    @click.native="toTop('#JS-11-10', 30)")
        .px-1
            .py-3.text-center
                h1
                    Icon(type="ios-book-outline")
                    | &nbsp;JS-Array 类型
                p.pt-1  ECMAScript 数组与其他语言中的数组都是 数据的有序列表
            h3#JS-11-1.ml-1
                Icon(type="logo-buffer")
                | &nbsp;基本概念及创建
            Divider
            p  ECMAScript 数组是数据的有序列表，每一项可以保存任何类型的数据。
            p.text-info 创建数组的基本方式有两种。第一种是使用 Array 构造函数，创建数组的第二种基本方式是使用数组字面量表示法。
            p 对于第一种方式其代码如右所示： 
                pre.custom-pre var students = new Array();
            p 如果预先知道数组要保存的项目数量，也可以给构造函数传递该数量，右边的代码将创建 length 值为 2 的数组： 
                pre.custom-pre var students = new Array(2);
            p 也可以直接向 Array 构造函数传递数组中应该包含的项： 
                pre.custom-pre var students = new Array('Anani', 'Sharon');
            p 当给构造函数只传递一个参数时，如果传递的是数值，则创建 length 会指定数值的数值，如果传递的是其它类型，则创建一个包含此项的一个 length 为 1 的数组。
            pre.ml-2(v-highlight)
                code.js var boy = new Array(1); // 包含一项的数组
                    |
                    | var girl = new Array('Sharon');  // 包含一项即字符串"Sharon"的数组
            p.text-success 在使用 Array 构造函数时也可以省略 new 操作符。
            p 对于第二种方式其代码如右所示： 
                pre.custom-pre var students = [];
            p 也可以直接向数组中应该包含的项： 
                pre.custom-pre var students = ['Anani', 'Sharon'];
            p IE8 及之前版本中的 ECMAScript 实现在数组字面量方面存在 bug：在数组的最后一项添加逗号会认为是数组中的一个元素，值位 undefined，如下所示数组元素为 Anani, Sharon, undefined 三项：
            p
                pre.custom-pre var students = ['Anani', 'Sharon',];
            p.text-success 在读取和设置数组的值时，要使用方括号并提供相应值的基于 0 的数字索引。
            p 数组的项数保存在其 length 属性中，这个属性始终会返回 0 或更大的值。
            p 数组的 length 属性是可读写的。因此，通过设置这个属性，可以从数组的末尾移除项或向数组中添加新项。
            p 如果将其 length 属性设置为大于数组项数的值，则新增的每一项都会取得 undefined 值。
            p 当把一个值放在超出当前数组大小的位置上时，数组就会重新计算其长度值。
            h3#JS-11-2.ml-1
                Icon(type="logo-buffer")
                | &nbsp;检测数组
            Divider
            p.text-muted instanceof 操作符假定只有一个全局执行环境。如果网页中包含多个框架，实际上就存在两个以上不同的全局执行环境，从而存在两个以上不同版本的 Array 构造函数。如果从一个框架向另一个框架传入一个数组，那么传入的数组与在第二个框架中原生创建的数组分别具有各自不同的构造函数。
            p 为了避免上述的情况 ECMAScript 5 新增了 Array.isArray() 方法。这个方法的目的是最终确定某个值到底是不是数组，而不管它是在哪个全局执行环境中创建的。
            h3#JS-11-3.ml-1
                Icon(type="logo-buffer")
                | &nbsp;转换方法
            Divider
            p.text-info 调用数组的 toString() 方法会返回由数组中每个值的字符串形式拼接而成的一个以逗号分隔的字符串。
            p.text-info 调用 valueOf() 返回的还是数组。
            p.text-info toLocaleString() 方法调用的是每一项的 toLocaleString()方法，而不是 toString() 方法。
            p 数组继承的 toLocaleString()、toString() 和 valueOf() 方法，在默认情况下都会以逗号分隔的字符串的形式返回数组项。而如果使用 join() 方法，则可以使用不同的分隔符来构建这个字符串。
                span.text-info join() 方法只接收一个参数，即用作分隔符的字符串，然后返回包含所有数组项的字符串。
            p 如果不给 join() 方法传入任何值，或者给它传入 undefined，则使用逗号作为分隔符。
                span.text-warn IE7 及更早版本会错误的使用字符串 "undefined" 作为分隔符。
            p 如果数组中的某一项的值是 null 或者 undefined，那么该值在 join()、 toLocaleString()、toString() 和 valueOf() 方法返回的结果中以空字符串表示。
            h3#JS-11-4.ml-1
                Icon(type="logo-buffer")
                | &nbsp;栈方法
            Divider
            p 栈是一种 LIFO（Last-In-First-Out，后进先出）的数据结构。
            p ECMAScript 为数组专门提供了 push() 和 pop() 方法，以便 实现类似栈的行为。 
            p.text-info push() 方法可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度。
            p.text-info pop() 方法则从数组末尾移除最后一项，减少数组的 length 值，然后返回移除的项。
            h3#JS-11-5.ml-1
                Icon(type="logo-buffer")
                | &nbsp;队列方法
            Divider
            p 队列数据结构的访问规则是 FIFO （First-In-First-Out，先进先出）。
            p.text-info shift()，会够移除数组中的第一个项并返回该项，同时将数组长度减 1。
            p 结合使用 shift() 和 push() 方法，可以像使用队列一样使用数组。
            p.text-info unshift() 与 shift() 的用途相反：它能在数组前端添加任意个项并返回新数组的长度。
            p 使用 unshift() 和 pop() 方法，可以从相反的方向来模拟队列。
            p.text-muted IE7及更早版本对 JavaScript 的实现中存在一个偏差，其 unshift() 方法总是返回 undefined 而不是数组的新长度。
            h3#JS-11-6.ml-1
                Icon(type="logo-buffer")
                | &nbsp;重排序方法
            Divider
            p 数组中已经存在两个可以直接用来重排序的方法：reverse() 和 sort()。
            p.text-info reverse() 方法会反转数组项的顺序。
            p.text-info sort() 方法会调用每个数组项的 toString() 转型方法，然后比较得到的字符串，以确定如何排序。
                span.text-warn 即使数组中的每一项都是数值，sort() 方法比较的也是字符串。
            p 在默认情况下，sort() 方法按升序排列数组项。
            p sort() 方法可以接收一个比较函数作为参数，以便我们指定哪个值位于哪个值的前面。
            p 比较函数接收两个参数，如果第一个参数应该位于第二个之前则返回一个负数，如果两个参数相等则返回 0，如果第一个参数应该位于第二个之后则返回一个正数。
            p 如果只想反转数组原来的顺序，使用 reverse() 方法要更快一些。
            p.text-warn reverse() 和 sort() 方法的返回值是经过排序之后的数组，会改变原数组。 
            h3#JS-11-7.ml-1
                Icon(type="logo-buffer")
                | &nbsp;操作方法
            Divider
            p.text-info concat() 方法可以基于当前数组中的所有项创建一个新数组。
            p 具体该方法会先创建当前数组一个副本，然后将接收到的参数添加到这个副本的末尾，最后返回新构建的数组。
            p 在没有给 concat() 方法传递参数的情况下，它只是复制当前数组并返回副本。
            p 如果传递给 concat() 方法的是一或多个数组，则该方法会将这些数组中的每一项都添加到结果数组中。
            p 如果传递的值不是数组，这些值就会被简单地添加到结果数组的末尾。
            p.text-info  slice() 方法，它能够基于当前数组中的一或多个项创建一个新数组。
            p 在只有一个参数的情况下，slice() 方法返回从该参数指定位置开始到当前数组末尾的所有项。
            p 如果有两个参数，该方法返回起始和结束位置之间的项—但不包括结束位置的项。
            p 如果 slice() 方法的参数中有一个负数，则用数组长度加上该数来确定相应的位置。
            p.text-info splice() 方法可以实现三种功能。
                ul.ml-1
                    li 删除：只需指定 2 个参数：要删除的第一项的位置和要删除的项数。
                    li 插入：只需提供3个参数：起始位置、0（要删除的项数）和要插入的项。
                    li 替换：只需指定 3 个参数：起 始位置、要删除的项数和要插入的任意数量的项。
            p.text-info splice() 方法始终都会返回一个数组，该数组中包含从原始数组中删除的项（如果没有删除任何 项，则返回一个空数组）。
            h3#JS-11-8.ml-1
                Icon(type="logo-buffer")
                | &nbsp;位置方法
            Divider
            p ECMAScript 5 为数组实例添加了两个位置方法：indexOf() 和 lastIndexOf()。
            p.text-info indexOf() 方法从数组的开头（位置 0）开始向后查找，返回要查找的项在数组中的位置，或者在没找到的情况下返回 1。
            p.text-info lastIndexOf() 方法则从数组的末尾开始向前查找，，返回要查找的项在数组中的位置，或者在没找到的情况下返回 1。
            p.text-success 在比较第一个参数与数组中的每一项时，会使用全等操作符。
            h3#JS-11-9.ml-1
                Icon(type="logo-buffer")
                | &nbsp;迭代方法
            Divider
            p ECMAScript 5 为数组定义了 5 个迭代方法，它们都不会改变原数组。
            p 每个方法都接收两个参数：要在每一项上运行的函数和（可选的）运行该函数的作用域对象——影响 this 的值。
                ul.ml-1
                    li.text-info every()：对数组中的每一项运行给定函数，如果该函数对每一项都返回 true，则返回 true。
                    li.text-info filter()：对数组中的每一项运行给定函数，返回该函数会返回 true 的项组成的数组。
                    li.text-info forEach()：对数组中的每一项运行给定函数。这个方法没有返回值。
                    li.text-info map()：对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
                    li.text-info some()：对数组中的每一项运行给定函数，如果该函数对任一项返回 true，则返回 true。
            h3#JS-11-10.ml-1
                Icon(type="logo-buffer")
                | &nbsp;归并方法
            Divider
            p ECMAScript 5 还新增了两个归并数组的方法：reduce() 和 reduceRight()。这两个方法都会迭代数组的所有项，然后构建一个最终返回的值。
            p.text-info reduce() 方法从数组的第一项开始，逐个遍历到最后。
            p.text-info reduceRight() 从数组的最后一项开始，向前遍历到第一项。
            p 两个方法都接受两个参数，一个在每一项上调用的函数（可接受四个参数：前一个值、当前值、项的索引和数组对象。）和（可选的）作为归并基础的初始值。
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
