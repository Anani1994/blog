<template lang="pug">
    BoWen
        .p-1(slot="catalog")
            Steps(direction="vertical")
                Step(title="基本概念"
                    content="数据类型的基本概念"
                    status="wait"
                    @click.native="toTop('#JS-07-1', 30)")
                Step(title="动态的属性"
                    content="动态的属性"
                    status="wait"
                    @click.native="toTop('#JS-07-2', 30)")
                Step(title="赋值变量值"
                    content="赋值变量值"
                    status="wait"
                    @click.native="toTop('#JS-07-3', 30)")
                Step(title="传递参数"
                    content="传递参数"
                    status="wait"
                    @click.native="toTop('#JS-07-4', 30)")
                Step(title="检测类型"
                    content="检测类型"
                    status="wait"
                    @click.native="toTop('#JS-07-5', 30)")
        .px-1
            .py-3.text-center
                h1
                    Icon(type="ios-book-outline")
                    | &nbsp;JS-基本类型和引用类型的值
                p.pt-1 ECMAScript变量可能包含两种不同数据类型的值：基本类型值和引用类型值
            h3#JS-07-1.ml-1
                Icon(type="logo-buffer")
                | &nbsp;基本概念
            Divider
            p ECMAScript 变量可能包含两种不同数据类型的值：基本类型值和引用类型值。
            p 基本数据类型：Undefined、Null、Boolean、Number 和 String。这 5 种基本数据类型是按值访问的，因为可以操作保存在变量中的实际的值。
            p 引用类型的值是保存在内存中的对象，JavaScript 不允许直接访问内存中的位置，也就是说不能直接操作对象的内存空间。
            p.text-success 在操作对象时，实际上是在操作对象的引用而不是实际的对象，引用类型的值是按引用访问的。
                span.text-muted 这种说法不严谨，因为当复制保存着对象的某个变量时，操作的是对象的引用。但在为对象添加属性时，操作的是实际的对象。
            h3#JS-07-2.ml-1
                Icon(type="logo-buffer")
                | &nbsp;动态的属性
            Divider
            p 定义基本类型值和引用类型值得方式是类似的：创建一个变量并为该变量赋值。
            p.text-warn 我们可以给引用类型的值添加属性和方法，但是不能给基本类型的值添加属性，尽管这样做不会导致任何错误。
            h3#JS-07-3.ml-1
                Icon(type="logo-buffer")
                | &nbsp;赋值变量值
            Divider
            p 如果从一个变量向另一个变量复制基本类型的值，会在变量对象上创建一个新值，然后把该值复制到为新变量分配的位置上。
            p 当从一个变量向另一个变量复制引用类型的值时，同样也会将存储在变量对象中的值复制一份放到为新变量分配的空间中。
                span.text-success 不同的是，这个值的副本实际上是一个指针，而这个指针指向存储在堆中的一个对象。复制操作结束后，两个变量实际上将引用同一个对象。因此，改变其中一个变量，就会影响另一个变量。
            img.d-block.ml-2.mb-1(src="../.././../../assets/images/acticles/frontend/js/JS-07-0.jpg", alt="引用类型的复制", style="height: 200px")
            h3#JS-07-4.ml-1
                Icon(type="logo-buffer")
                | &nbsp;传递参数
            Divider
            p 
                span.text-success ECMAScript 中所有函数的参数都是按值传递的。
                span 也就是说，把函数外部的值复制给函数内部的参数，就和把值从一个变量复制到另一个变量一样。
            p 基本类型值的传递如同基本类型变量的复制一样，而 引用类型值的传递，则如同引用类型变量的复制一样。
            p 在向参数传递基本类型的值时，被传递的值会被复制给一个局部变量（即命名参数，或者用 ECMAScript 的概念来说，就是 arguments 对象中的一个元素）。
            p.text-info 在向参数传递引用类型的值时，会把这个值在内存中的地址复制给一个局部变量，因此这个局部变量的变化会反映在函数的外部。
            p.text-success 参数实际上是函数的局部变量。
            h3#JS-07-5.ml-1
                Icon(type="logo-buffer")
                | &nbsp;检测类型
            Divider
            p 要检测一个变量是不是基本数据类型？那么 typeof 操作符是最佳的选择。
            p 要想知道一个变量是什么类型的对象？ECMAScript 提供了 instanceof 操作符，其语法如右所示 
                pre.custom-pre result = variable instanceof constructor
                | 。
            p 如果变量是给定引用类型（根据它的原型链来识别）的实例，那么 instanceof 操作符就会返回 true。
            p 所有引用类型的值都是 Object 的实例，因此，在检测一个引用类型值和 Object 构造 函数时，instanceof 操作符始终会返回 true。
            p.text-warn 对正则表达式应用 typeof 会返回 "function"。在 IE 和 Firefox 中，对正则表达式应用 typeof 会返回 "object"。
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
