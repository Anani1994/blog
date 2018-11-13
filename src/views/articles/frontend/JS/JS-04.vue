<template>
    <BoWen>
        <div class="p-1" slot="catalog">
            <Steps direction="vertical">
                <Step
                    title="乘性操作符"
                    content="乘性操作符"
                    status="wait"
                    @click.native="toTop('#JS-04-1', 30)">
                </Step>
                <Step
                    title="加性操作符"
                    content="加性操作符"
                    @click.native="toTop('#JS-04-2', 30)">
                </Step>
                <Step
                    title="关系操作符"
                    content="关系操作符"
                    @click.native="toTop('#JS-04-3', 30)">
                </Step>
                <Step
                    title="相等操作符"
                    content="相等操作符"
                    @click.native="toTop('#JS-04-4', 30)">
                </Step>
                <Step
                    title="条件操作符"
                    content="条件操作符"
                    @click.native="toTop('#JS-04-5', 30)">
                </Step>
                <Step
                    title="赋值操作符"
                    content="赋值操作符"
                    @click.native="toTop('#JS-04-6', 30)">
                </Step>
                <Step
                    title="逗号操作符"
                    content="逗号操作符"
                    @click.native="toTop('#JS-04-7', 30)">
                </Step>
            </Steps>
        </div>
        <div class="px-1">
            <div class="py-3 text-center">
                <h1><Icon type="ios-book-outline" /> JS-操作符 (二)</h1>
                <p class="pt-1">介绍 JavaScript 的基本操作符</p>
            </div>
            <h3 id="JS-04-1" class="ml-1"><Icon type="logo-buffer" /> 乘性操作符</h3>
            <Divider />
            <p>ECMAScript 定义了 3 个乘性操作符：乘法、除法和求模。</p>
            <p>如果参与乘性计算的某 个操作数不是数值，后台会先使用 Number()转型函数将其转换为数值。</p>
            <p>
                <ul class="ml-1">
                    <li>乘法：乘法操作符由一个星号（*）表示，用于计算两个数值的乘积。
                        <ul>
                            <li>如果操作数都是数值，执行常规的乘法计算，即两个正数或两个负数相乘的结果还是正数，而如果只有一个操作数有符号，那么结果就是负数。如果乘积超过了 ECMAScript 数值的表示范围， 则返回 Infinity 或 -Infinity；</li>
                            <li>如果有一个操作数是 NaN，则结果是 NaN；</li>
                            <li>如果是 Infinity 与 0相乘，则结果是 NaN；</li>
                            <li> 如果是 Infinity 与非 0 数值相乘，则结果是 Infinity 或 -Infinity，取决于有符号操作数的符号；</li>
                            <li>如果是 Infinity 与 Infinity 相乘，则结果是 Infinity；</li>
                            <li>如果有一个操作数不是数值，则在后台调用 Number() 将其转换为数值，然后再应用上面的规则。</li>
                        </ul>
                    </li>
                </ul>
            </p>
            <p>
                <ul class="ml-1">
                    <li>除法 ：除法操作符由一个斜线符号（/）表示，执行第二个操作数除第一个操作数的计算。
                        <ul>
                            <li>如果操作数都是数值，执行常规的除法计算，即两个正数或两个负数相除的结果还是正数，而如果只有一个操作数有符号，那么结果就是负数。如果商超过了 ECMAScript 数值的表示范围，则返回 Infinity 或 -Infinity；</li>
                            <li>如果有一个操作数是 NaN，则结果是 NaN；</li>
                            <li>如果是 Infinity 被 Infinity 除，则结果是 NaN；</li>
                            <li>如果是零被零除，则结果是 NaN；</li>
                            <li>如果是非零的有限数被零除，则结果是 Infinity 或 -Infinity，取决于有符号操作数的符号；</li>
                            <li>如果是 Infinity 被任何非零数值除，则结果是 Infinity 或 -Infinity，取决于有符号操作数的符号；</li>
                            <li>如果有一个操作数不是数值，则在后台调用 Number() 将其转换为数值，然后再应用上面的规则。</li>
                        </ul>
                    </li>
                </ul>
            </p>
            <p>
                <ul class="ml-1">
                    <li>求模：求模（余数）操作符由一个百分号（%）表示。
                        <ul>
                            <li>如果操作数都是数值，执行常规的除法计算，返回除得的余数；</li>
                            <li>如果被除数是无穷大值而除数是有限大的数值，则结果是NaN；</li>
                            <li>如果被除数是有限大的数值而除数是零，则结果是 NaN；</li>
                            <li>如果是 Infinity 被 Infinity 除，则结果是NaN；</li>
                            <li>如果被除数是有限大的数值而除数是无穷大的数值，则结果是被除数；</li>
                            <li>如果被除数是零，则结果是零；</li>
                            <li>如果有一个操作数不是数值，则在后台调用Number()将其转换为数值，然后再应用上面的规则。</li>
                        </ul>
                    </li>
                </ul>
            </p>
            <h3 id="JS-04-2" class="ml-1"><Icon type="logo-buffer" /> 加性操作符</h3>
            <Divider />
            <p>
                <ul class="ml-1">
                    <li>加法：加法操作符（+）表示。
                        <ul>
                            <li>如果有一个操作数是 NaN，则结果是 NaN；</li>
                            <li>如果是 Infinity 加 Infinity，则结果是 Infinity；</li>
                            <li>如果是 -Infinity 加 -Infinity，则结果是 -Infinity；</li>
                            <li>如果是 Infinity 加 -Infinity，则结果是 NaN；</li>
                            <li>如果是 +0 加 +0，则结果是 +0；</li>
                            <li>如果是 -0 加 -0，则结果是 -0；</li>
                            <li>如果是 +0 加 -0，则结果是 +0。</li>
                            <li>如果两个操作数都是字符串，则将第二个操作数与第一个操作数拼接起来；</li>
                            <li>如果只有一个操作数是字符串，则将另一个操作数转换为字符串，然后再将两个字符串拼接起来。</li>
                            <li>如果有一个操作数是对象、数值或布尔值，则调用它们的 toString() 方法取得相应的字符串值，然后再应用前面关于字符串的规则。对于 undefined 和 null，则分别调用 String() 函数并取得字符串 "undefined" 和 "null"。</li>
                        </ul>
                    </li>
                </ul>
            </p>
            <p>
                <ul class="ml-1">
                    <li>减法：减法操作符（-）表示。
                        <ul>
                            <li>如果两个操作符都是数值，则执行常规的算术减法操作并返回结果；</li>
                            <li>如果有一个操作数是 NaN，则结果是 NaN；</li>
                            <li>如果是 Infinity 减 Infinity，则结果是 NaN；</li>
                            <li>如果是 -Infinity 减 -Infinity，则结果是 NaN；</li>
                            <li>如果是 Infinity 减 -Infinity，则结果是 Infinity；</li>
                            <li>如果是 -Infinity 减 Infinity，则结果是 -Infinity；</li>
                            <li> 如果是 +0 减 +0，则结果是 +0；</li>
                            <li>如果是 +0 减 -0，则结果是 -0；</li>
                            <li>如果是 -0 减 -0，则结果是 +0；</li>
                            <li>如果有一个操作数是字符串、布尔值、null 或 undefined，则先在后台调用 Number( )函数将其转换为数值，然后再根据前面的规则执行减法计算。如果转换的结果是 NaN，则减法的结果就是 NaN；</li>
                            <li>如果有一个操作数是对象，则调用对象的 valueOf() 方法以取得表示该对象的数值。如果得到的值是 NaN，则减法的结果就是 NaN。如果对象没有 valueOf() 方法，则调用其 toString() 方法并将得到的字符串转换为数值。</li>
                        </ul>
                    </li>
                </ul>
            </p>
            <h3 id="JS-04-3" class="ml-1"><Icon type="logo-buffer" /> 关系操作符</h3>
            <Divider />
            <p>
                <ul class="ml-1">
                    <li>小于（<） 、大于（>） 、小于等于（<=）和大于等于（>=）这几个关系操作符都返回一个布尔值。
                        <ul>
                            <li>如果两个操作数都是数值，则执行数值比较。</li>
                            <li>如果两个操作数都是字符串，则比较两个字符串对应的字符编码值。</li>
                            <li>如果一个操作数是数值，则将另一个操作数转换为一个数值，然后执行数值比较。</li>
                            <li>如果一个操作数是对象，则调用这个对象的 valueOf() 方法，用得到的结果按照前面的规则执行比较。如果对象没有 valueOf() 方法，则调用 toString() 方法，并用得到的结果根据前面的规则执行比较。</li>
                            <li>如果一个操作数是布尔值，则先将其转换为数值，然后再执行比较。</li>
                        </ul>
                    </li>
                </ul>
            </p>
            <p class="text-warn">在比较字符串时，实际比较的是两个字符串中对应位置的每个字符的字符编码值。</p>
            <p>在 ECMAScript 里所有大写字母的字符编码全部小于小写字母的字符编码。</p>
            <p>如果要真正按字母表顺序比较字符串，就必须把两个操作数转换为相同的大小写形式（全部大写或全部小写），然后再执行比较。</p>
            <p>按照常理，如果一个值不小于另一个值，则一定是大于或等于那个值。然而，在与 NaN 进行比较时， 这两个比较操作的结果都返回了 false。</p>
            <h3 id="JS-04-4" class="ml-1"><Icon type="logo-buffer" /> 相等操作符</h3>
            <Divider />
            <p>ECMAScript中的相等操作符由两个等于号（==）表示，如果两个操作数相等，则返回 true。而不相等操作符由叹号后跟等于号（!=）表示。</p>
            <p>这两个操作符都会先转换操作数（通常称为强制转型），然后再比较它们的相等性。</p>
            <p>
                <ul class="ml-1">
                    <li>相等和不相等：在转换不同的数据类型时，相等和不相等操作符遵循下列基本规则：
                        <ul>
                            <li>如果有一个操作数是布尔值，则在比较相等性之前先将其转换为数值——false 转换为 0，而 true 转换为 1；</li>
                            <li>如果一个操作数是字符串，另一个操作数是数值，在比较相等性之前先将字符串转换为数值；</li>
                            <li>如果一个操作数是对象，另一个操作数不是，则调用对象的 valueOf() 方法，用得到的基本类型值按照前面的规则进行比较；</li>
                            <li>null 和 undefined 是相等的。</li>
                            <li>要比较相等性之前，不能将 null 和 undefined 转换成其他任何值。</li>
                            <li>如果有一个操作数是 NaN，则相等操作符返回 false，而不相等操作符返回 true。<span class="text-warn">重要提示：即使两个操作数都是 NaN，相等操作符也返回 false；因为按照规则，NaN 不等于 NaN。</span></li>
                            <li>如果两个操作数都是对象，则比较它们是不是同一个对象。如果两个操作数都指向同一个对象，则相等操作符返回 true；否则，返回 false。</li>
                        </ul>
                    </li>
                </ul>
            </p>
            <p>全等和不全等：与相等和不相等两个操作符相比，它们主要的区别就是在比较之前不会转换操作数。</p>
            <h3 id="JS-04-5" class="ml-1"><Icon type="logo-buffer" /> 条件操作符</h3>
            <Divider />
            <pre v-highlight class="ml-2"><code class="js">variable = boolean_expression ? true_value : false_value; </code></pre>
            <p>基于对 boolean_expression 求值的结果，决定给变量 variable 赋什么值。如果求值结果为 true，则给变量 variable 赋 true_value 值；如果求值结果为 false， 则给变量 variable 赋 false_value 值。</p>
            <h3 id="JS-04-6" class="ml-1"><Icon type="logo-buffer" /> 赋值操作符</h3>
            <Divider />
            <p>赋值操作符：简单的赋值操作符由等于号（=）表示。</p>
            <p>如果在等于号（=）前面再添加乘性操作符、加性操作符或位操作符，就可以完成复合赋值操作符。</p>
            <p>
                <ul class="ml-1">
                    <li>每个主要算术操作符 （以及个别的其他操作符） 都有对应的复合赋值操作符。
                        <ul>
                            <li>乘/赋值（*=）；</li>
                            <li>除/赋值（/=）；</li>
                            <li>模/赋值（%=）；</li>
                            <li>加/赋值（+=）；</li>
                            <li>减/赋值（-=）；</li>
                            <li>左移/赋值（<<=）；</li>
                            <li>有符号右移/赋值（>>=）；</li>
                            <li>无符号右移/赋值（>>>=）。</li>
                        </ul>
                    </li>
                </ul>
            </p>
            <h3 id="JS-04-7" class="ml-1"><Icon type="logo-buffer" /> 逗号操作符</h3>
            <Divider />
            <p>逗号操作符多用于声明多个变量；但除此之外，逗号操作符还可以用于赋值。在用于赋值时，逗号操作符总会返回表达式中的最后一项。</p>
            <pre v-highlight class="ml-2"><code class="js">var num = (5, 1, 4, 8, 0); // num 的值为 0 </code></pre>
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
