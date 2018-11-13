<template>
    <BoWen>
        <div class="p-1" slot="catalog">
            <Steps direction="vertical">
                <Step
                    title="typeof 操作符"
                    content="检测数据类型"
                    status="wait"
                    @click.native="toTop('#JS-02-1', 30)">
                </Step>
                <Step
                    title="undefined null 类型"
                    content="undefined null 类型"
                    @click.native="toTop('#JS-02-2', 30)">
                </Step>
                <Step
                    title="Boolean 类型"
                    content="Boolean 类型"
                    @click.native="toTop('#JS-02-3', 30)">
                </Step>
                <Step
                    title="Number 类型"
                    content="Number 类型"
                    @click.native="toTop('#JS-02-4', 30)">
                </Step>
                <Step
                    title="String 类型"
                    content="String 类型"
                    @click.native="toTop('#JS-02-5', 30)">
                </Step>
                <Step
                    title="对象"
                    content="复杂数据类型"
                    @click.native="toTop('#JS-02-6', 30)">
                </Step>
            </Steps>
        </div>
        <div class="px-1">
            <div class="py-3 text-center">
                <h1><Icon type="ios-book-outline" /> JS-数据类型</h1>
                <p class="pt-1">介绍 JavaScript 的基本数据类型</p>
            </div>
            <h3 id="JS-02-1" class="ml-1"><Icon type="logo-buffer" /> typeof 操作符</h3>
            <Divider />
            <p>ECMAScript 中有 5 种简单数据类型 （也称为基本数据类型） ： Undefined、 Null、 Boolean、 Number 和 String。 还有 1 种复杂数据类型——Object， Object 本质上是由一组无序的名值对组成。</p>
            <p>typeof 检测给定变量的数据类型：
                <ul class="ml-1">
                    <li>"undefined"——如果这个值未定义</li>
                    <li>"boolean"——如果这个值是布尔值</li>
                    <li>"string"——如果这个值是字符串</li>
                    <li>"number"——如果这个值是数值</li>
                    <li>"object"——如果这个值是对象或 null</li>
                    <li>"function"——如果这个值是函数</li>
                </ul>
            </p>
            <h3 id="JS-02-2" class="ml-1"><Icon type="logo-buffer" /> undefined null 类型</h3>
            <Divider />
            <p>undefined 用于正式区分空对象指针与未经初始化的变量。</p>
            <p>对于尚未声明过的变量，只能执行一项操作，即使用 typeof 操作符检测其数据类型，且会返回 undefined。</p>
            <P>null 值表示一个空对象指针，由于 undefined 值是派生自 null 值的，所以存在如下所示得关系。</P>
            <pre class="ml-2" v-highlight><code class="js">// 等于
console.log(undefined == null);  // true
// 全等于
console.log(undefined === null); // false</code></pre>
            <p>另外我们没有必要显示的申明一个变量为 undefined，但是只要意在保存对象的变量还没有真正保存对象，就应该明确地让该变量保存为 null 值。</p>
            <h3 id="JS-02-3" class="ml-1"><Icon type="logo-buffer" /> Boolean 类型</h3>
            <Divider />
            <p>Boolean 类型只有两个字面值：true 和 false。</p>
            <p>我们可以对任何数据类型的值调用 Boolean()函数，而且总会返回一个 Boolean 值。</p>
            <Table border :columns="columns" :data="data"></Table>
            <h3 id="JS-02-4" class="ml-1 mt-1"><Icon type="logo-buffer" /> Number 类型</h3>
            <Divider />
            <p>JavaScript 用 IEEE754 格式来表示整数和浮点数值（浮点数值在某些语言中也被称为双精度数值）。</p>
            <p>所谓浮点数值，就是该数值中必须包含一个小数点，并且小数点后面必须至少有一位数字。虽然小数点前面可以没有整数，但我们不推荐这种写法（保存浮点数值需要的内存空间是保存整数值的两倍， 因此 ECMAScript 会不失时机地将浮点数值转换为整数值）。</p>
            <p>浮点数值的最高精度是 17 位小数，但在进行算术计算时其精确度远远不如整数（0.1 加 0.2 的结果不是 0.3，而是 0.30000000000000004）。</p>
            <p>八进制字面量在严格模式下是无效的，会导致支持的JavaScript引擎抛出错误。<span class="text-info">在进行算术计算时，所有以八进制和十六进制表示的数值最终都将被转换成十进制数值。</span></p>
            <p>isFinite() 函数在参数位于最小（Number.MIN_VALUE）与最大数值（Number.MAX_VALUE）之间时会返 回 true。</p>
            <p>任何涉及 NaN 的操作（例如 NaN/10）都会返回 NaN，NaN 与任何值都不相等，包括 NaN 本身。</p>
            <p>确定这个参数是否“不是数值”：isNaN() 在接收到一个值之后，会尝试将这个值转换为数值。某些不是数值的值会直接转换为数值。</p>
            <p>数值转换：
                <ul class="ml-1">
                    <li>转型函数 Number()可以用于任何数据类型：
                        <ul>
                            <li>如果是 Boolean 值，true 和 false 将分别被转换为 1和 0。</li>
                            <li>如果是数字值，只是简单的传入和返回。  如果是 null 值，返回 0。</li>
                            <li>如果是 undefined，返回 NaN。</li>
                            <li>如果是字符串，遵循下列规则：
                                <ul>
                                    <li>如果字符串中只包含数字（包括前面带正号或负号的情况） ，则将其转换为十进制数值，即"1" 会变成 1，"123"会变成 123，而"011"会变成11（注意：前导的零被忽略了）； </li>
                                    <li>如果字符串中包含有效的浮点格式，如"1.1"，则将其转换为对应的浮点数值（同样，也会忽 略前导零）； </li>
                                    <li>如果字符串中包含有效的十六进制格式，例如"0xf"，则将其转换为相同大小的十进制整 数值；</li>
                                    <li>如果字符串是空的（不包含任何字符），则将其转换为 0；</li>
                                    <li>如果字符串中包含除上述格式之外的字符，则将其转换为 NaN；</li>
                                    <li>如果是对象，则调用对象的 valueOf()方法，然后依照前面的规则转换返回的值。如果转换 的结果是 NaN，则调用对象的 toString()方法，然后再次依照前面的规则转换返回的字符串值。</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>parseInt()和 parseFloat() 专门用于把字符串转换成数值:
                        <ul>
                            <li>parseInt()转换空字符串会返回 NaN（Number()对空字符返回 0）；</li>
                            <li>与 parseInt()函数类似，parseFloat()也是从第一个字符（位置 0）开始解析每个字符。不同的是字符串中的第一个小数点是有效的，第二个区别在于它始终都会忽略前导的零；</li>
                            <li>parseInt()在ECMAScript 5 JavaScript引擎前具有解析八进制值的能力，parseFloat()只解析十进制值。</li>
                        </ul>
                    </li>
                </ul>
            </p>
            <h3 id="JS-02-5" class="ml-1 mt-1"><Icon type="logo-buffer" /> String 类型</h3>
            <Divider />
            <p>String 类型用于表示由零或多个 16 位 Unicode 字符组成的字符序列，符串可以由双引号（"）或单引号（'）表示。</p>
            <p>长的转义序列表示 1 个字符。</p>
            <p>如果字符串中包含双字节字符，那么 length 属性 可能不会精确地返回字符串中的字符数目。</p>
            <p class="text-info">ECMAScript 中的字符串是不可变的，要改变某个变量保存的字符串，首先要销毁原来的字符串，然后再用另一个包含新值的字符串填充该变量。</p>
            <p>数值、布尔值、对象和字符串值，都有 toString() 方法。但 null 和 undefined 值没有这个方法。默认情况下，toString() 方法以十进制格式返回数值的字符串表示。而通过传递基数，toString() 可以输出以二进制、八进制、十六进制，乃至其他任意有效进制格式表示的字符串值。</p>
            <p>String()，这个转型函数能够将任何类型的值转换为字符串：
                <ul class="ml-1">
                    <li>如果值有 toString() 方法，则调用该方法（没有参数）并返回相应的结果；</li>
                    <li>如果值是null，则返回"null"； </li>
                    <li>如果值是undefined，则返回"undefined"。</li>
                </ul>
            </p>
            <p class="text-info">要把某个值转换为字符串，可以使用加号操作符（3.5 节讨论）把它与一个字符 串（""）加在一起。</p>
            <h3 id="JS-02-6" class="ml-1 mt-1"><Icon type="logo-buffer" /> 对象</h3>
            <Divider />
            <p>ECMAScript中的对象其实就是一组数据和功能的集合。</p>
            <p>Object 的每个实例都具有下列属性和方法：
                <ul>
                    <li>constructor：存着用于创建当前对象的函数。</li>
                    <li>hasOwnProperty(propertyName)：用于检查给定的属性在当前对象实例中（而不是在实例 的原型中）是否存在。</li>
                    <li>isPrototypeOf(object)：于检查传入的对象是否是传入对象的原型。</li>
                    <li>propertyIsEnumerable(propertyName)：于检查给定的属性是否能够使用 for-in 语句 （本章后面将会讨论）来枚举。与 hasOwnProperty()方法一样，作为参数的属性名必须以字符 串形式指定。</li>
                    <li>toLocaleString()：返回对象的字符串表示，该字符串与执行环境的地区对应。</li>
                    <li>toString()：回对象的字符串表示。</li>
                    <li>valueOf()：回对象的字符串、数值或布尔值表示。通常与 toString()方法的返回值 相同。</li>
                </ul>
            </p>
            <p class="text-right">参考资料：JavaScript 高级程序设计（第三版）</p>
            <FooterDivider></FooterDivider>
        </div>
    </BoWen>
</template>

<script>
export default {
    data() {
        return {
            toTop: this.$util.toTop,
            columns: [
                {
                    title: '数据类型',
                    key: 'title'
                },
                {
                    title: '转换为 true 的值',
                    key: 'toTrue'
                },
                {
                    title: '转换为 false 的值',
                    key: 'toFalse'
                }
            ],
            data: [
                {
                    title: 'Boolean',
                    toTrue: 'true',
                    toFalse: 'false'
                },
                {
                    title: 'String',
                    toTrue: '任何非空字符串',
                    toFalse: '\"\"（空字符串）'
                },
                {
                    title: 'Number',
                    toTrue: '任何非零数字值（包括无穷大）',
                    toFalse: '0 和 NaN'
                },
                {
                    title: 'Object',
                    toTrue: '任何对象',
                    toFalse: 'null'
                },
                {
                    title: 'Undefined',
                    toTrue: 'n/a n/a（或N/A），是not applicable的缩写，意思是“不适用”',
                    toFalse: 'undefined'
                },
            ]
        }
    }
}
</script>

<style lang="less" scoped>
ul {
    li {
        p {
            text-indent: 1rem;
        }
        p:first-child {
            margin-top: 1rem;
        }
        ul {
            margin-left: 1rem;
            li:last-child {
                margin-bottom: 1rem;
            }
        }
    }
}
</style>
