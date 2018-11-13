<template>
    <BoWen>
        <div class="p-1" slot="catalog">
            <Steps direction="vertical">
                <Step
                    title="经典递归"
                    content="经典的递归函数"
                    status="wait"
                    @click.native="toTop('#factorial-0', 30)">
                </Step>
                <Step
                    title="经典递归的弊端"
                    content="经典的递归函数的弊端"
                    status="wait"
                    @click.native="toTop('#factorial-1', 30)">
                </Step>
                <Step
                    title="更好的递归"
                    content="解决经典的递归函数的弊端"
                    status="wait"
                    @click.native="toTop('#factorial-2', 30)">
                </Step>
            </Steps>
        </div>
        <div class="px-1">
            <div class="py-3 text-center">
                <h1><Icon type="ios-book-outline" /> 递归函数</h1>
                <p class="pt-1">递归函数是在一个函数通过名字调用自身</p>
            </div>
            <h3 id="factorial-0" class="ml-1"><Icon type="logo-buffer" /> 经典递归</h3>
            <Divider />
            <p>递归函数是一个函数通过名字调用自身，下面的函数是一个经典的递归函数：</p>
            <pre v-highlight class="ml-2"><code class="js">function factorial (num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num-1);
    }
} </code></pre>
            <h3 id="factorial-1" class="ml-1"><Icon type="logo-buffer" /> 经典递归的弊端</h3>
            <Divider />
            <p>经典的递归函数存在一个弊端，就像下面这样：</p>
            <pre v-highlight class="ml-2"><code class="js">function factorial (num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num-1);
    }
}
var anotherFactorial = factorial;
factorial = null;
console.log(anotherFactorial(4)); // 报错</code></pre>
            <p>上面由于在 factorial() 函数内部通过函数名调用了自身，所以当我们将 factorial 设为 null，执行 anotherFactorial(4) 时，由于 factorial 已经不是函数，所以报错。</p>
            <h3 id="factorial-2" class="ml-1"><Icon type="logo-buffer" /> 更好的递归</h3>
            <Divider />
            <p>因为在非严格模式下，我们在函数内部可以通过 arguments.callee 来访问正在执行的函数(<span class="text-info">arguments.callee 是一个指向正在执行的函数的指针</span>)，所以我们可以根据这一条来改进：</p>
            <pre v-highlight class="ml-2"><code class="js">function factorial (num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num-1);
    }
} </code></pre>
            <p>但是在严格模式下，访问 arguments.callee 属性会导致错误，为了能够在严格模式和非严格模式下都能正常执行，我们需要用到的命名函数表达式：</p>
            <pre v-highlight class="ml-2"><code class="js">var factorial = (function f (num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * f(num-1); }
    }); </code></pre>
            <p>以上代码创建了一个名为 f()的命名函数表达式，然后将它赋值给变量 factorial。即便把函数 赋值给了另一个变量，函数的名字f 仍然有效，所以递归调用照样能正确完成。</p>
            <p class="text-warn">需要注意的是：递归函数必须指定一个条件退出递归调用，否则会造成内存溢出。</p>
            <p class="text-right">参考资料：JavaScript 高级程序设计（第三版）</p>
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
