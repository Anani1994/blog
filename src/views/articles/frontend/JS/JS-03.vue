<template>
    <BoWen>
        <div class="p-1" slot="catalog">
            <Steps direction="vertical">
                <Step
                    title="一元操作符"
                    content="只能操作一个值的操作符"
                    status="wait"
                    @click.native="toTop('#JS-03-1', 30)">
                </Step>
                <Step
                    title="位操作符"
                    content="按内存中表示数值的位来操作数值"
                    @click.native="toTop('#JS-03-2', 30)">
                </Step>
                <Step
                    title="Boolean 操作符"
                    content="Boolean 操作符"
                    @click.native="toTop('#JS-03-3', 30)">
                </Step>
            </Steps>
        </div>
        <div class="px-1">
            <div class="py-3 text-center">
                <h1><Icon type="ios-book-outline" /> JS-操作符 (一)</h1>
                <p class="pt-1">介绍 JavaScript 的基本操作符</p>
            </div>
            <h3 id="JS-03-1" class="ml-1"><Icon type="logo-buffer" /> 一元操作符</h3>
            <Divider />
            <p>只能操作一个值的操作符叫做一元操作符。</p>
            <ul class="ml-2">
                <li>递增和递减操作符:
                    <p>递增和递减操作符拥有前置型和后置型两个版本，前置型位于要操作变量之前，后置型位于要操作的变量之后。</p>
                    <p class="text-success">执行前置递增和前置递减操作时，变量的值都是在语句被求值以前改变的。（在计算机科学领域，这种情况通常被叫做副效应。）</p>
                    <p>前置递增和前置递减与执行语句的优先级相等。所以整个语句会从左至右被求值。</p>
                    <p>后置型递增和后置型递减操作符是在包含它们的语句被求值之后才执行的。</p>
                    <pre v-highlight><code class="js">//前置
var num = 5;
console.log(++num);
console.log(num);

// 后置
var num = 5;
console.log(num++);
console.log(num);</code></pre>
                </li>
            </ul>
            <p>递减和递增操作符对任何值都有效，在应用于不同的值时，递增和递减操作符遵循以下规则：
                <ul class="ml-1">
                    <li>在应用于一个包含有效数字字符的字符串时，先将其转换为数字值，再执行加减 1 的操作。字符串变量变成数值变量。</li>
                    <li>在应用于浮点数值时，执行加减 1的操作。</li>
                    <li>在应用于一个不包含有效数字字符的字符串时，将变量的值设置为 NaN。字符串变量变成数值变量。</li>
                    <li>在应用于布尔值 false 时，先将其转换为 0再执行加减 1的操作。布尔值变量变成数值变量。</li>
                    <li>在应用于布尔值 true 时，先将其转换为 1再执行加减 1的操作。布尔值变量变成数值变量。</li>
                    <li>在应用于对象时，先调用对象的 valueOf() 方法以取得一个可供操作的值。然后对该值应用前述规则。如果结果是 NaN，则在调用 toString() 方法后再应用前述规则。对象变量变成数值变量。</li>
                </ul>
            </p>
            <p>在对非数值应用一元加操作符时，该操作符会像Number()转型函数一样对这个值执行转换。</p>
            <p>在将一元减操作符应用于数值时，该值会变成负数，。而当应用于非数值时， 一元减操作符遵循与一元加操作符相同的规则，最后再将得到的数值转换为负数。</p>
            <h3 id="JS-03-2" class="ml-1"><Icon type="logo-buffer" /> 位操作符</h3>
            <Divider />
            <P>位操作符并不直接操作 64 位的值。而是先将 64 位的值转换成 32 位的整数，然后执行操作，最后再将结果转换回 64 位。</P>
            <p><span class="text-info">对于有符号的整数，从右往左数，第 32 位用于表示数值的符号：0 表示正数，1 表示负数。</span>这个表示符号的位叫做符号位，符号位的值决定了其他位数值的格式。</p>
            <p>正数以纯二进制格式存储，负数同样以二进制码存储，但使用的格式是二进制补码。</p>
            <p class="text-warn">值得注意的是：在处理有 符号整数时，是不能访问位 31的。</p>
            <p class="text-warn">在对特殊的 NaN 和 Infinity 值应用位操作时，这两个值都会被当成 0 来处理。</p>
            <p class="text-muted">对非数值应用位操作符，会先使用 Number() 函数将该值转换为一个数值（自动完成），然后再应用位操作。得到的结果将是一个数值。</p>
            <p>位操作符包括以下几种：</p>
            <p>
                <ul class="ml-1">
                    <li>按位非操作符
                        <ul>
                            <li>按位非操作符由一个波浪线（~）表示，执行按位非的结果就是返回数值的反码。</li>
                            <li>按位非操作的本质：操作数的负值减 1。</li>
                        </ul>
                    </li>
                </ul>
            </p>
            <p>
                <ul class="ml-1">
                    <li>按位与操作符
                        <ul>
                            <li>按位与操作符由一个和号字符（&）表示，它有两个操作符数。</li>
                            <li>按位与操作只在两个数值的对应位都是 1 时才返回 1，任何一位是 0，结果都是 0。</li>
                        </ul>
                    </li>
                </ul>
            </p>
            <p>
                <ul class="ml-1">
                    <li>按位或操作符
                        <ul>
                            <li>按位或操作符由一个竖线符号（|）表示，同样也有两个操作数。</li>
                            <li> 按位或操作在有一个位是 1 的情况下就返回 1， 而只有在两个位都是 0 的情况下才返回 0。</li>
                        </ul>
                    </li>
                </ul>
            </p>
            <p>
                <ul class="ml-1">
                    <li>按位异或操作符
                        <ul>
                            <li>按位异或操作符由一个插入符号（^）表示，也有两个操作数。</li>
                            <li>两个数值对应位上只有一个 1 时才返回 1。</li>
                        </ul>
                    </li>
                </ul>
            </p>
            <p>
                <ul class="ml-1">
                    <li>左移操作符
                        <ul>
                            <li>左移操作符由两个小于号（<<）表示，这个操作符会将数值的所有位向左移动指定的位数。</li>
                            <li class="text-warn">注意，左移不会影响操作数的符号位。</li>
                        </ul>
                    </li>
                </ul>
            </p>
            <p>
                <ul class="ml-1">
                    <li>有符号的右移操作符
                        <ul>
                            <li>有符号的右移操作符由两个大于号（>>）表示，这个操作符会将数值向右移动，但保留符号位（即 正负号标记）。</li>
                        </ul>
                    </li>
                </ul>
            </p>
            <p>
                <ul class="ml-1">
                    <li>无符号右移操作符
                        <ul>
                            <li>无符号右移操作符由3个大于号（>>>）表示，这个操作符会将数值的所有32位都向右移动。对正 数来说，无符号右移的结果与有符号右移相同。</li>
                        </ul>
                    </li>
                </ul>
            </p>
            <h3 id="JS-03-3" class="ml-1"><Icon type="logo-buffer" /> Boolean 操作符</h3>
            <Divider />
            <p>Boolean 操作符一共有三个，分别是非、与、或。</p>
            <p>在有一个操作数不是布尔值的情况 下，逻辑与和逻辑或操作就不一定返回布尔值</p>
            <p>逻辑非操作符可用于 ECMAScript 中的任何值，无论这个值是什么数据类型，这个操作符都会返回一个布尔值。</p>
            <p><strong>逻辑非操作符</strong>：由一个叹号（！）表示，可以应用于ECMAScript中的任何值</p>
            <p>
                <ul class="ml-1">
                    <li>如果操作数是一个对象，返回 false；</li>
                    <li>如果操作数是一个对象，返回 false；</li>
                    <li>如果操作数是 null，返回 true；</li>
                    <li>如果操作数是 undefined，返回 true。</li>
                    <li>如果操作数是 NaN，返回 true；</li>
                    <li>如果操作数是任意非 0 数值（包括Infinity） ，返回 false；</li>
                    <li>如果操作数是数值 0，返回 true；</li>
                    <li>如果操作数是一个非空字符串，返回 false；</li>
                    <li> 如果操作数是一个空字符串，返回 true；</li>
                </ul>
            </p>
            <p class="text-info">同时使用两个逻辑非操作符，实际上就会模拟 Boolean() 转型函数的行为。</p>
            <p><strong>逻辑与</strong>：逻辑与操作符由两个和号（&&）表示，有两个操作数。</p>
            <p>逻辑与操作可以应用于任何类型的操作数，而不仅仅是布尔值。</p>
            <p>
                <ul class="ml-1">
                    <li>如果第一个操作数是对象，则返回第二个操作数；</li>
                    <li>如果第二个操作数是对象，则只有在第一个操作数的求值结果为 true 的情况下才会返回该对象；</li>
                    <li>如果两个操作数都是对象，则返回第二个操作数；</li>
                    <li>如果有一个操作数是 null，则返回 null；</li>
                    <li>如果有一个操作数是 NaN，则返回 NaN；</li>
                    <li>如果有一个操作数是 undefined，则返回 undefined。</li>
                </ul>
            </p>
            <p class="text-warn">注意不能在逻辑与操作中使用未定义的值，否则会发生错误。</p>
            <p class="text-success">在使用逻辑与操作符时要始终铭记它是一个短路操作符，所以当第一个值为 false 时，不会再对第二位求值，直接返回 false。</p>
            <p><strong>逻辑或操作符</strong>：由两个竖线符号（||）表示，有两个操作数。</p>
            <p>
                <ul class="ml-1">
                    <li>如果第一个操作数是对象，则返回第一个操作数；</li>
                    <li>如果第一个操作数的求值结果为 false，则返回第二个操作数；</li>
                    <li>如果两个操作数都是对象，则返回第一个操作数；</li>
                    <li>如果两个操作数都是 null，则返回 null；</li>
                    <li> 如果两个操作数都是 NaN，则返回 NaN；</li>
                    <li>如果两个操作数都是 undefined，则返回 undefined。</li>
                </ul>
            </p>
            <p>与逻辑与操作符相似，逻辑或操作符也是短路操作符。如果第一个操作数的求值结果为 true，就不会对第二个操作数求值。</p>
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
