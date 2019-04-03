# 轮播图
轮播图，就是在一个模块或者说窗口中，像幻灯片一样的循环播放，也可以通过电脑上鼠标点击、手机上手指滑动后，平滑的切换图片。

## 主要功能点
 * 图片似幻灯片一样播放。
 * 点击箭头按钮跳转到前/后一张。
 * 点击跳跃点，会跳转到索引对应的元素。
 * 无缝轮播。

## API

| 属性 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| autoplay| 是否自动切换 | Boolean | true |
| autoplaySpeed | 自动切换的时间间隔（ms） | Number | 2000 |
| loop | 是否开启循环 | Boolean | true |
| easing | 动画效果	| String | ease |
| arrowMode | 箭头按钮的显示方式：hover（悬停），always（一直显示），never（从不显示） | String | hover |
| dotMode | 底部圆点的显示方式：hover（悬停），always（一直显示），never（从不显示） | String | always |

| 事件名 | 说明 | 参数 |
| :-- | :-- | :-- |
| on-change | 幻灯片切换时触发 | 目前激活的幻灯片的索引 |

## 原理
轮播图在网页搭建中经常遇到，其原理也比较简单，基本就是靠三级的DOM结构来实现的，首先设置三层关键的样式。

```less
@width: 100px; // 图片宽度100像素
@n: 3; // n张图片

.slide-container {
    over-flow: hidden;
    position: relative;
    width: @width;
    .group-container {
        width: @width * @n;
        transition: transform 500ms ease 0s; // 动画
        .slide { // 图片
            width: @width;
        }
    }
}
```

然后，透过切换DOM2层的样式并可以实现切换。

```javascript
const offset = 100; // 每次移动每张图片宽度的距离，通过正负来控制方向
document.getElementsByClassName(".group-container").style.transform = `translate3d(${offset}px, 0px, 0px)`;
```
## 关键点
普通的轮播图就像上面所说的一样简单，更为好的是实现无缝循环、和一些关键点的处理。

### 无缝循环
实现无缝循环的方式有多种，其中之一就是本组件采用的双轨道。

双轨道的原理主要是在一个轨道到达极限位置时，就启用另一个轨道在后面接着像同方向滑动。因为只有两个轨道，所以在一个轨道滑动到某一个位置时，就应该根据滑动的方向，将另一个滑出边界的轨道重置到后面，等到前面一个滑动到极点时又周而复始。

为了在轨道交换位置的时候不被用户所察觉，所以应该给当前的轨道一个更高的层叠上下文，同样如此交换。

### 函数防抖
通常用户在改变窗口大小的时候，会触发多次的 `resize` 事件，为了节约性能开销，对其事件处理函数采用了函数防抖的方式进行处理。

```javascript
perf.debounce(this.resetSlideShow, this);
```

为了在组件销毁的时候撤销在 `window` 上绑定的 `resize` 事件的该处理函数，并对原本的函数又进行了一层包装。

```javascript
handleResize() {
    perf.debounce(this.resetSlideShow, this);
}
```

### 边界处理
 * 每次滑动，应当根据当前索引和方向将另一个轨道移动到滑动方向的后面。
 * 两个轨道的切换主要是根据 `this.active` 来判断的，所以在临界值应当改变其值。
 * 通常，会是一个轨道在滑动，当到达极点时（一个轨道中的最后一张图片），应当协同滑动一次，以实现平滑的衔接。
 * 当索引为最后一张图的索引时，应当重置索引为 0，反之，应当设为最后一张图的索引。

## 缺点
比较显著的一个缺点就是，如果第一次进来就直接点击方向向右的箭头时，轮播图会快速的由当前轨道的第一张图移到最后一张图，所以此时没有无缝循环的效果。

## 其他实现
 * Bootstrap4 轮播效果(Carousel)
