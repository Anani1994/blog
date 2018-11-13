<template lang="pug">
    BoWen
        .p-1(slot="catalog")
            Steps(direction="vertical")
                Step(title="创建对象"
                    content="引用类型的创建方式"
                    status="wait"
                    @click.native="toTop('#JS-10-1', 30)")
                Step(title="访问属性"
                    content="访问属性"
                    status="wait"
                    @click.native="toTop('#JS-10-2', 30)")
        .px-1
            .py-3.text-center
                h1
                    Icon(type="ios-book-outline")
                    | &nbsp;JS-Object 类型
                p.pt-1 ECMAScript 中的引用类型
            h3#JS-10-1.ml-1
                Icon(type="logo-buffer")
                | &nbsp;创建对象
            Divider
            p 创建Object实例的方式有两种。第一种是使用 new 操作符后跟 Object 构造函数。
            pre.ml-2(v-highlight)
                code.js var author = new Object();
                    | 
                    | author.name = 'Anani';
                    | author.age = 24;
            p 另一种方式是使用对象字面量表示法。
            pre.ml-2(v-highlight)
                code.js var author = {
                    | 
                    |     name: 'Anani',
                    |     age: 24
                    | }
            p.text-info ECMAScript中的表达式上下文指的是能够返回一个值（表达式）。
            p 赋值操作符表示后面是一个值，所以赋值操作符后的左花括号表示一个表达式的开始。
            p 在使用对象字面量语法时，属性名也可以使用字符串，就像下面这样：
            pre.ml-2(v-highlight)
                code.js var author = {
                    | 
                    |     'name': 'Anani',
                    |     'age': 24
                    | }
            p.text-success 数值属性名会自动转换为字符串。
            p 另外，使用对象字面量语法时，如果留空其花括号，则可以定义只包含默认属性和方法的对象。
            p
                pre.custom-pre var obj = {}
                |  等价于 
                pre.custom-pre var obj = new Object()
            p 对象的使用：命名参数虽然容易处理，但在有多个可选参数的情况下就会显示不够灵活。最好的做法是对那些必需值使用命名参数，而使用对象字面量来封装多个可选参数。
            h3#JS-10-2.ml-1
                Icon(type="logo-buffer")
                | &nbsp;访问属性
            Divider
            p 通常访问对象属性时使用的都是点表示法。
            p 另外在 JavaScript 也可以使用方括号表示法来访问对象的属性。在使用方括号语法时，应该将要访问的属性以字符串的形式放在方括号中。
            pre.ml-2(v-highlight)
                code.js author.name // Anani
                    |
                    | author["name"] // Anani
            p.text-success 方括号语法的主要优点是可以通过变量来访问属性。
            pre.ml-2(v-highlight)
                code.js var propertyName = "name";
                    |
                    | author[propertyName] // Anani
            p 如果属性名中包含会导致语法错误的字符，或者属性名使用的是关键字或保留字，也可以使用方括号表示法。
            pre.ml-2(v-highlight)
                code.js // 比如属性名中包含空格
                    |
                    | var author = new Object();
                    | author["author name"] = 'Anani'
            p.text-warn 通常，除非必须使用变量来访问属性，否则我们建议使用点表示法。
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
