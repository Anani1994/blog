<template>
    <BoWen>
        <div class="p-1" slot="catalog">
            <Steps direction="vertical">
                <Step
                    title="let 命令"
                    content="let 命令"
                    status="wait"
                    @click.native="toTop('#ES6-0-0', 30)">
                </Step>
                <Step
                    title="快级作用域"
                    content="快级作用域"
                    @click.native="toTop('#ES6-0-1', 30)">
                </Step>
                <Step
                    title="const 命令"
                    content="const 命令"
                    @click.native="toTop('#ES6-0-2', 30)">
                </Step>
                <Step
                    title="ES6 声明变量的六种方法"
                    content="ES6 声明变量的六种方法"
                    @click.native="toTop('#ES6-0-3', 30)">
                </Step>
                <Step
                    title="global 对象"
                    content="global 对象"
                    @click.native="toTop('#ES6-0-4', 30)">
                </Step>
                <Step
                    title="顶层对象的属性"
                    content="顶层对象的属性"
                    @click.native="toTop('#ES6-0-5', 30)">
                </Step>
            </Steps>
        </div>
        <div class="px-1">
            <div class="py-3 text-center">
                <h1><Icon type="ios-book-outline" /> ES6-变量申明</h1>
                <p class="pt-1">ES6 中新增了 let 和 const 命令，用于申明变量</p>
            </div>
            <h3 id="ES6-0-0" class="ml-1"><Icon type="logo-buffer" /> let 命令</h3>
            <Divider />
            <h4>1、基本用法</h4>
			<p>ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。</p>
			<p>for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。</p>
			<h4>2、不存在变量提升</h4>
			<p>var命令会发生”变量提升“现象，即变量可以在声明之前使用，值为undefined。let命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。</p>
			<h4>3、暂时性死区</h4>
			<p>在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。</p>
			<p>typeof检查未申明的变量返回undefined,但在“暂时性死区”typeof运行时就会抛出一个ReferenceError。</p>
			<h4>4、不允许重复申明</h4>
			<p>let不允许在相同作用域内，重复声明同一个变量。</p>
            <h3 id="ES6-0-1" class="ml-1"><Icon type="logo-buffer" /> 块级作用域</h3>
            <Divider />
            <h4>1、为什么需要块级作用域？</h4>
            <p>ES5 只有全局作用域和函数作用域，没有块级作用域。</p>
            <pre class="ml-2" v-highlight><code class="js">var tmp = new Date();

function f() {
    console.log(tmp);
    if (false) {
        var tmp = 'hello world';
    }
}

f(); // undefined</code></pre>
            <p>上面代码的原意是，if 代码块的外部使用外层的 tmp 变量，内部使用内层的 tmp 变量。但是，函数 f 执行后，输出结果为 undefined，原因在于变量提升，导致内层的 tmp 变量覆盖了外层的 tmp 变量。</p>
            <p>for 循环中的变量 i 只用来控制循环，但是循环结束后，它并没有消失，泄露成了全局变量。</p>
            <h4>2、ES6 的块级作用域</h4>
            <p>let 实际上为 JavaScript 新增了块级作用域。</p>
            <pre class="ml-2" v-highlight><code class="js">function f1() {
    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n); // 5
}</code></pre>
            <p>上面的函数有两个代码块，都声明了变量 n，运行后输出 5。这表示外层代码块不受内层代码块的影响。如果两次都使用 var 定义变量 n，最后输出的值才是 10。</p>
            <p>ES6 允许块级作用域的任意嵌套。</p>
            <h4>3、块级作用域与函数声明</h4>
            <p>ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。(但是，浏览器没有遵守这个规定)</p>
	   		<p>ES6 规定，块级作用域之中，函数声明语句的行为类似于 let，在块级作用域之外不可引用。但对于对 ES6 的浏览器：1、允许在块级作用域内声明函数。2、函数声明类似于var，即会提升到全局作用域或函数作用域的头部。3、函数声明提升到所在的块级作用域的头部。</p>
	   		<p>ES6 的块级作用域允许声明函数的规则，只在使用大括号的情况下成立，如果没有使用大括号，就会报错。</p>
	   		<p>考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。</p>
            <h3 id="ES6-0-2" class="ml-1"><Icon type="logo-buffer" /> const 命令</h3>
            <Divider />
            <h4>1、基本用法</h4>
            <p>const声明一个只读的常量。一旦声明，常量的值就不能改变。</p>
	   		<p>const的作用域与 let 命令相同：只在声明所在的块级作用域内有效。</p>
	   		<p>const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。</p>
	   		<p>const声明的常量，也与 let 一样不可重复声明。</p>
            <h4>2、本质</h4>
            <p>const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指针，const只能保证这个指针是固定的，无法控制它指向的数据结构是不是可变的。</p>
	   		<p>将对象冻结，应该使用Object.freeze方法。</p>
            <pre class="ml-2" v-highlight><code class="js">const foo = Object.freeze({});

// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
foo.prop = 123;</code></pre>
            <h3 id="ES6-0-3" class="ml-1"><Icon type="logo-buffer" /> ES6 声明变量的六种方法</h3>
            <Divider />
            <p>ES5 只有两种声明变量的方法：var 命令和 function 命令。ES6 除了添加 let 和 const 命令，后面章节还会提到，另外两种声明变量的方法：import 命令和 class 命令。所以，ES6 一共有 6 种声明变量的方法。</p>
            <h3 id="ES6-0-4" class="ml-1"><Icon type="logo-buffer" /> global对象</h3>
            <Divider />
            <p>ES5 的顶层对象，本身也是一个问题，因为它在各种实现里面是不统一的。</p>
            <p>
                <ul class="ml-1">
                    <li>浏览器里面，顶层对象是 window，但 Node 和 Web Worker 没有 window。</li>
                    <li>浏览器和 Web Worker 里面，self 也指向顶层对象，但是 Node 没有 self。</li>
                    <li>Node 里面，顶层对象是 global，但其他环境都不支持。同一段代码为了能够在各种环境，都能取到顶层对象，现在一般是使用 this 变量，但是有局限性。</li>
                    <li>全局环境中，this 会返回顶层对象。但是，Node 模块和 ES6 模块中，this 返回的是当前模块。</li>
                    <li>函数里面的 this，如果函数不是作为对象的方法运行，而是单纯作为函数运行，this 会指向顶层对象。但是，严格模式下，这时 this 会返回 undefined。</li>
                    <li>不管是严格模式，还是普通模式，new Function('return this')()，总是会返回全局对象。但是，如果浏览器用了 CSP（Content Security Policy，内容安全政策），那么 eval、new Function 这些方法都可能无法使用。</li>
                </ul>
            </p>
            <p>综上所述，很难找到一种方法，可以在所有情况下，都取到顶层对象。下面是两种勉强可以使用的方法。</p>
            <pre class="ml-2" v-highlight><code class="js">// 方法一
(typeof window !== 'undefined' ?
    window :
    (typeof process === 'object' &&
        typeof require === 'function' &&
        typeof global === 'object') ?
    global :
    this);

// 方法二
var getGlobal = function () {
    if (typeof self !== 'undefined') {
        return self;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof global !== 'undefined') {
        return global;
    }
    throw new Error('unable to locate global object');
};</code></pre>
            <p>现在有一个提案，在语言标准的层面，引入 global 作为顶层对象。也就是说，在所有环境下，global 都是存在的，都可以从它拿到顶层对象。</p>
            <p>垫片库 system.global 模拟了这个提案，可以在所有环境拿到 global。</p>
            <pre class="ml-2" v-highlight><code class="js">require('system.global/shim')();

// ES6 模块的写法
import shim from 'system.global/shim';
shim();</code></pre>
            <p>上面代码可以保证各种环境里面，global 对象都是存在的。</p>
            <pre class="ml-2" v-highlight><code class="js">// CommonJS 的写法
var global = require('system.global')();

// ES6 模块的写法
import getGlobal from 'system.global';
const global = getGlobal();</code></pre>
            <p>上面代码将顶层对象放入变量 global。</p>
            <h3 id="ES6-0-5" class="ml-1"><Icon type="logo-buffer" /> 顶层对象的属性</h3>
            <Divider />
            <p>ES5 之中，顶层对象的属性与全局变量是等价的。</p>
            <p>ES6 中 var 命令和 function 命令声明的全局变量，依旧是顶层对象的属性；另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。</p>
            <p class="text-right">
                <a href="http://es6.ruanyifeng.com/#README">ECMAScript 6 入门</a>
            </p>
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

<style lang="less" scoped>
h4 {
    margin-left: 2rem;
    margin-bottom: 1rem;
    &~p {
        margin-left: 1rem;
    }
}
</style>
