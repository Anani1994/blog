# 跑马灯
跑马灯在此实现的主要是平滑的从左到右无限循环的运动。

## 主要功能
* 让元素平滑的从左到右无限循环的运动。
* 提供了CSS3动画中一系列属性的配置。

## API

| 属性 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| delay | 规定动画何时开始，单位是毫秒 | Number | 0 |
| timeout | 规定动画完成一个周期所花费的时间，单位是毫秒 | Number | 5000 |
| timingFunction | 规定动画的速度曲线 | String | ease |
| iterationCount | 规定动画被播放的次数 | Number/String | infinite |
| direction | 规定动画是否在下一周期逆向地播放 | String | normal |
| playState | 规定动画是否正在运行或暂停 | String | running |
| fillMode | 规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。 | String | none |

更多关于属性的介绍参照 [CSS3 动画](http://www.runoob.com/css3/css3-animations.html) 中的介绍。

## 原理
跑马灯，此处的实现是基于CSS3动画来实现的，为了让动画可以根据插入的元素的宽度来调整动画的规则，采用 `JavaScript` 来动态设置动画规则。

首先，在组件挂在到DOM树中时，检测页面中是否包含样式（document.styleSheets），在没有的情况下创建 `style` 元素，并把根据插入元素的宽度得到的动画规则插入其中。

此后，给 `window` 绑定了 `resize` 事件，以便在窗口大小改变时，重新根据组插入元素及其包裹元素的宽度来从新设置动画规则。

在 `resize` 事件处理程序中，也就是 `setRule` 方法中，通过比对前后动画规则的是否变化，来决定后续是否继续执行。另外也同时采用了函数防抖的方式，对性能进行改善。

最后，在组件销毁的时候，取消在给 `window` 绑定的 `resize` 事件，并移除动态添加的动画规则，以免污染页面样式。

## 关键点
 * 为了平滑无缝循环的运动，根据插入元素的宽度不同，通过 `JavaScript` 动态设置动画规则。
 * 为了实现组件的复用，需要给每一个组件指定一个单独唯一的动画名称，以免相互影响。

## 其他实现
此处的实现是针对一个元素来实现的，也就是组件下包括的元素可以是文本、也可以是图片等。如果要实现一个文字跑马灯，那么用 `JavaScript` 也可以简单的实现。

实现文字跑马灯，可以截取文本的第一个字符和剩下的字符，然后将第一个字符拼接到剩余字符的后面，最后重新赋值给最初的文本，如此循环。

```html
<p id="text"></p>
```

```javascript
function HorseRaceLamp(ele, txt) {
    return {
        el: ele,
        msg: txt,
        tId: null,
        recombineStr: function () {
            const firstStr = this.msg.substring(0, 1);
            const remainingStr = this.msg.substring(1);
            this.msg = remainingStr + firstStr;
            this.el.innerHTML = this.msg;

            clearTimeout(this.tId);
            return this.tId = setTimeout(this.recombineStr.bind(this), 100);
        },
        start() {
            if (this.tId !== null) return;
            return this.tId = setTimeout(this.recombineStr.bind(this), 100);
        },
        stop() {
            clearTimeout(this.tId);
            this.tId = null;
        }
    }
}

const horseRaceLamp = HorseRaceLamp(document.getElementById('text'), 'Here are some texts.');
horseRaceLamp.start();
```
