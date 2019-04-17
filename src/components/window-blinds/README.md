## 百叶窗
百叶窗本是窗子的一种式样，在此模拟了其打开和收起的样式和动画。

## 主要功能
 * 模拟百叶窗一样打开和关闭。
 * 文字轮播。

## API

| 属性 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| mode | 百叶窗的模式：blinds（窗帘），string（与百叶窗贴切的文字轮播，非无缝），string-2（无缝的类百叶窗文字轮播） | String | blinds |
| leafNumber | 每一帘的行数 | Number | 5 |
| text | 文字轮播的内容，在非 blinds 模式下有效 | String | 《一棵开花的树》 |
| textType | 文字的类型：string（将以符号分隔），poetry（以空格分隔），在非 blinds 模式下有效 | String | poetry |
| stay | 动画执行的时间，单位为毫秒，在非 blinds 模式下有效 | Number | 1000 |

## 原理
 * **blinds 模式**

    该模式的效果主要是通过CSS3来实现的，首先通过遍历产生指定行数，然后为每一项（.string-wrap）都设置了过度，通过动态的添加和移除 `.open` 类来产生开启和关闭的效果。

    ```less
    .string-wrap {
            transition: all 1s ease;
            transform-origin: 50% 0 0;
        &.open {
            transform: rotateX(85deg);
        }
    }
    ```

 * **string 模式**

    该模式相对前者显得稍微复杂一点，我们现需要根据传递的文字或默认的文字的情况，结合每一帘要显示的行数来推出共有多少帘。

    ```javascript
    // 根据文字信息拆分为一个文字数组，每一行的内容将对应数组的每一项
    this.textArr = common.getStringArr(this.text || poetry, this.textType);

    // 获取字符串数组的长度，当其长度小于配置的行数时，则设置为一帘的行数
    const len = this.textArr.length;
    if (len < this.leafNumber) {
        this.textArr.length = this.leafNumber;
    } else {
        // 或者大于的情况下，则需要保证能与一帘的行数求模为零
        this.textArr.length = Math.ceil(this.textArr.length / this.leafNumber) * this.leafNumber;
    }
    // 为了满足上面的条件，可以填充合适个数的空字符项
    this.textArr.fill('', len);

    // 求得的帘数
    this.lineNum = this.textArr.length / this.leafNumber;
    ```

    然后，在DOM结构上，需要先遍历每帘的行数（.string-wrap），在其中再遍历帘树，这样在一帘的每一行中都包含了求得的帘数个元素（.string）。

    ```html
    <ul class="">
        <li class="string-wrap">
            <div class="string-content">
                <div class="string"></div>
            </div>
        </li>
    </ul>
    ```

    结合下面关键的样式，我们就可以创建出贴合百叶窗的文字轮播。

    ```less
    .string-wrap {
      overflow: hidden;
      position: relative;
      height: @text-height;

      .string-content {
        position: absolute;
        width: 100%;

        &.transition {
          transition: all 1s ease;
        }

        .string {
          height: @text-height;
          line-height: @text-height;
        }
      }
    }
    ```

    现在，我们可以根据一个递增的值来做判断，陆续的为其每一项添加样式，样式的内容只要就是增加 `top` 的值。

 * **string-2 模式**

    该模式的做法与第二种实现大同小异，主要的区别就是，第二种是根据切换 `top` 的值来实现动画的，而第三种是根据CSS3的过度。

    这里的文字轮播技术和 Bootstrap 轮播图的实现很像，但不尽是，比如这里它只是单向的。

    首先，在初始化时同第二种一样需要得到文字信息和每一帘的行数，不同的是它还需要多设置一个 `active` 的值，用来判断每一帘下当前显示的项。

    ```javascript
    // 第二种模式也是一样，因为窗帘的关闭是从上到下的动画，所以遍历出的元素也是如此
    // 因此要首先显示的元素也就是最后一个，所以这里 active 的值设为帘数加壹
    this.active = this.lineNum + 1;
    ```

    实现动画的关键，也是根据对当前显示的元素（.active，.transition）和下一个元素（.next）添加对应的样式类。

    ```less
    .string {
        height: @text-height;
        line-height: @text-height;
        display: none;
        margin-top: -@text-height;

        &.next {
            display: block;
        }

        &.active {
            display: block;
        }

        &.transition {
            transform: translateY(100%);
            transition: transform 1s ease;
        }
    }
    ```

    相比第二种的实现，它可以进行无缝的文字轮播，但不比第二种更贴切百叶窗。

## 关键点
后面两种模式的实现，在每一帘中，要实现陆续下滑关闭（显示）的关键，是根据一个递增的值来做判断。

因为每一帘中的行都是遍历出来的，所以我们可以将遍历时产生的索引值与递增的值做比较，如果递增的值大于索引的值就添加相应的样式。

为了表现出与百叶窗更相似的效果，可以另外设置一个递增的值，这样与索引比较的那个值每次循环的时候不再依次递增，而是加上后面这个递增的值，这样就产生了跟好的视觉效果。

另外，就是在求得合适的字符串数组的元素。

```javascript
this.textArr.length = Math.ceil(this.textArr.length / this.leafNumber) * this.leafNumber;
```

## 缺点
 * 第二种模式没有实现无缝的循环。
 * 第三种模式没有太形象的模拟百叶窗。