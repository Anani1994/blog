import util from "./util";

export default new class {
  constructor() {
    let requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
    return this;
  }
  // =============================================================== 编织星空 ===============================================================
  /**
   * @description
   * 编织璀璨星空图
   * @useage
   * HTML结构：
   * ```
   * <canvas>Sorry,There is a drawing about a clock,But your browser does not support Canvas.</canvas>
   * ```
   * JS：
   * ```
   * let canvas = new Canvas();
   * canvas.createStarrySky();
   * ```
   * @parmas {dom} 对canvas(画布)的引用
   * @parmas {object} optional 配置对象
   */
  createStarrySky(ele, defineSetting = {}) {
    this.ctx = ele.getContext("2d");
    this.ele = ele;
    // 默认配置
    let defaultSetting = {
      // 缓动因子
      easingFactor: 5,
      // 画布
      canvasStyle: {
        // 大小
        width: document.body.clientWidth,
        height: document.body.clientHeight,
        // 颜色
        globalAlpha: 1,
        fillStyle: "#000"
      },
      // 点
      nodeStyle: {
        // 个数
        number: 100,
        globalAlpha: 1,
        fillStyle: "#fff",
        // x方向上的速度
        vx: () => Math.random() - 0.5,
        // y方向上的速度
        vy: () => Math.random() - 0.5,
        // 点的半径
        radius: () =>
          Math.random() > 0.9 ? 3 + Math.random() * 3 : 1 + Math.random() * 3
      },
      // 边
      edgeStyle: {
        globalAlpha: (len, threshold) => 1 - len / threshold,
        lineWidth: (len, threshold) => (1 - len / threshold) * 2.5,
        strokeStyle: "#fff"
      }
    };
    // 合并默认配置与输入配置
    this.setting = util.extend(defaultSetting, defineSetting);
    // 初始化画布大小
    this.ele.width = this.setting.canvasStyle.width;
    this.ele.height = this.setting.canvasStyle.height;
    // 存储点
    this.nodes = [];
    // 存储边
    this.edges = [];
    // 跟随鼠标与其周边点相连成边
    this.mousePos = [0, 0];
    // ============================================
    // 创建点
    this._createNodes();
    // 创建边
    this._createEdges();
    // 动画（在其中通过 requestAnimationFrame 循环调用自身）
    this.requestID = window.requestAnimationFrame(this._move.bind(this));
    // ============================================
    // 添加事件随鼠标移动更新特殊点的坐标
    util.addHandler(window, "mousemove", e => {
      let event = util.getEvent(e);
      this.mousePos[0] = event.clientX;
      this.mousePos[1] = event.clientY;
    });
    // 调整画布
    util.addHandler(
      window,
      "resize",
      util.debounce(() => {
        this.ele.width = this.setting.canvasStyle.width;
        this.ele.height = this.setting.canvasStyle.height;
      })
    );
    return this;
  }

  /**
   * 生成指定个数的点，是整个图纸的基础
   */
  _createNodes() {
    let node;
    for (let i = 0; i < this.setting.nodeStyle.number; i++) {
      node = {
        followMouse: 0 === i,
        x: Math.random() * this.setting.canvasStyle.width,
        y: Math.random() * this.setting.canvasStyle.height,
        vx: this.setting.nodeStyle.vx(), // x方向上的速度
        vy: this.setting.nodeStyle.vy(), // y方向上的速度
        radius: this.setting.nodeStyle.radius() // 点的半径
      };
      this.nodes.push(node);
    }
  }

  /**
   * 创建边的关系，通过双重遍历建立一个点与其他所有点间的联系
   * 在遍历存储边的数组排除A到B和B到A同时存在的情况，因为它们本身属于一条线
   */
  _createEdges() {
    let edge;
    let ignore;
    this.nodes.forEach(item1 => {
      this.nodes.forEach(item2 => {
        if (item1 === item2) {
          return;
        }
        edge = {
          from: item1,
          to: item2
        };
        ignore = false;
        this.edges.forEach(item => {
          if (item.from === edge.from && item.to === edge.to) {
            ignore = true;
          }
          if (item.from === edge.to && item.to === edge.from) {
            ignore = true;
          }
        });
        if (!ignore) {
          this.edges.push(edge);
        }
      });
    });
  }

  _move() {
    this.nodes.forEach(item => {
      if (item.followMouse) {
        return;
      }
      // 粒子系统的核心-遍历粒子，并且更新其状(v = v + a, s = s + v => a是加速度，v是速度，s是位移)
      // 这里未涉及加速度使用的是：s = s + v
      item.x += item.vx;
      item.y += item.vy;

      // 对重新计算后的坐标进行判断是否超出画布
      // 超出坐标对应速度的正负号取反(避免一直超出临界值)，并对该次的坐标与临界值进行比较
      if (item.x < 0 || item.x > this.setting.canvasStyle.width) {
        item.vx *= -1;
        item.x = util.clamp(item.x, 0, this.setting.canvasStyle.width);
      }
      if (item.y < 0 || item.y > this.setting.canvasStyle.height) {
        item.vy *= -1;
        item.y = util.clamp(item.y, 0, this.setting.canvasStyle.height);
      }
    });
    // 跟随鼠标的点缓动：x = x + (t - x) / factor(factor 是缓动因子，t 是最终位置，x 是当前位置)
    // 详见 https://link.jianshu.com?t=https://www.youtube.com/watch?v=ZfytHvgHybA
    this.nodes[0].x +=
      (this.mousePos[0] - this.nodes[0].x) / this.setting.easingFactor;
    this.nodes[0].y +=
      (this.mousePos[1] - this.nodes[0].y) / this.setting.easingFactor;

    // 开始绘制
    this._renderStarrySky();

    // come on 动起来
    this.requestID = window.requestAnimationFrame(this._move.bind(this));
  }

  _renderStarrySky() {
    // 根据配置设置样式
    this.setStyle(this.setting.canvasStyle);

    // 绘制画布
    this.ctx.fillRect(
      0,
      0,
      this.setting.canvasStyle.width,
      this.setting.canvasStyle.height
    );

    this.edges.forEach(item => {
      // 计算出两点间的距离(勾股定理)
      let len = Math.sqrt(
        Math.pow(item.from.x - item.to.x, 2) +
          Math.pow(item.from.y - item.to.y, 2)
      );
      // 给点之间设置一个参考距离
      let threshold =
        this.setting.distance || this.setting.canvasStyle.width / 8;

      // 超出参考距离则不相连
      if (len > threshold) {
        return;
      }

      // 根据边的长短动态的设置其透明度和粗细
      this.ctx.lineWidth = this.setting.edgeStyle.lineWidth(len, threshold);
      this.ctx.globalAlpha = this.setting.edgeStyle.globalAlpha(len, threshold);

      // 根据配置设置样式
      this.setStyle(this.setting.edgeStyle);

      // 绘制边
      this.drawLine(item.from.x, item.from.y, item.to.x, item.to.y);
    });

    // 根据配置设置样式
    this.setStyle(this.setting.nodeStyle);

    this.nodes.forEach(item => {
      // 排除特殊点
      if (item.followMouse) {
        return;
      }

      // 绘制点
      this.drawCircle(item.x, item.y, item.radius);
    });
  }

  // =============================================================== 编织烟花 ===============================================================
  /**
   * 编织烟花
   * @parmas {object} 配置信息
   */
  createFireworks(ele, defineSetting = {}) {
    this.ctx = ele.getContext("2d");
    this.ele = ele;
    let clientWidth = document.body.clientWidth;
    let clientHeight = document.body.clientHeight;
    let defaultSetting = {
      // 烟花爆炸事件
      timeOut: 1000,
      canvasStyle: {
        // 大小
        width: clientWidth,
        height: clientHeight,
        // 颜色
        globalAlpha: 0.35,
        fillStyle: "#000"
      },
      fireworkStyle: {
        number: 5, // 烟花个数
        count: 100, // 每个烟花爆炸后的颗粒数
        x: (i, n) => (clientWidth / (n + 1)) * (i + 1),
        y1: () => clientHeight,
        vy: () => 6 - Math.random(),
        y2: () => 200,
        radius: 5,
        fillStyle: "#fff",
        size: 100 // 爆炸后的最大半径
      }
    };
    this.setting = util.extend(defaultSetting, defineSetting);
    // 初始化画布大小
    this.ele.width = clientWidth;
    this.ele.height = clientHeight;
    // 存储烟花
    this.fireworks = [];
    // 创建烟花
    this._createFirework();
    // 储存颗粒
    this.particulates = []; // 储存颗粒
    // 动画（在其中通过 requestAnimationFrame 循环调用自身）
    this.requestID = window.requestAnimationFrame(this._moveUp.bind(this));
    // 调整画布
    util.addHandler(
      window,
      "resize",
      util.debounce(() => {
        this.ele.width = this.setting.canvasStyle.width;
        this.ele.height = this.setting.canvasStyle.height;
      })
    );
    return this;
  }

  _createFirework() {
    let firework;
    for (let i = 0; i < this.setting.fireworkStyle.number; i++) {
      firework = {
        x: this.setting.fireworkStyle.x(i, this.setting.fireworkStyle.number), // 烟花的x坐标
        y1: this.setting.fireworkStyle.y1(), // 烟花起点的y坐标
        vy: this.setting.fireworkStyle.vy(), // 烟花上升的速度
        y2: this.setting.fireworkStyle.y2(), // 烟花爆炸点的y坐标
        radius: this.setting.fireworkStyle.radius, // 烟花爆炸前的大小
        count: this.setting.fireworkStyle.count,
        size: this.setting.fireworkStyle.size,
        boomed: false // 是否已爆炸
      };
      this.fireworks.push(firework);
    }
  }

  // 烟花上升
  _moveUp() {
    // 改变位置
    this.fireworks.forEach(item => {
      if (item.y1 <= item.y2) {
        return;
      }
      item.y1 -= item.vy;
    });

    // 开始绘制
    this._renderFireworks();

    // 当烟花颗粒不存在时
    if (!this.fireworks.length) {
      window.cancelAnimationFrame(this.requestID); // 取消动画
    }

    // 重复动画
    this.requestID = window.requestAnimationFrame(this._moveUp.bind(this));
  }

  _renderFireworks() {
    // 绘制画布
    this.setStyle(this.setting.canvasStyle);
    this.ctx.fillRect(
      0,
      0,
      this.setting.canvasStyle.width,
      this.setting.canvasStyle.height
    );

    // 绘制冲天的动画
    this.setStyle(this.setting.fireworkStyle);
    this.fireworks.forEach((item, index, arr) => {
      this.drawCircle(item.x, item.y1, item.radius);
      if (item.y1 <= item.y2) {
        this._createParticulates(item);
        // 爆炸后设置 boomed 为true，后面通过检测该值来决定是否生成颗粒群
        item.boomed = true;
        // 烟花在指定时间后消失
        setTimeout(() => {
          arr.splice(index);
        }, this.setting.timeOut);

        this.drawCircle(item.x, item.y1, item.radius);
      }
    });
  }

  _createParticulates(item) {
    // 创建爆炸后的颗粒
    if (!item.boomed) {
      let particulate;
      this.particulates[this.particulates.length] = [];
      for (let i = 0; i < item.count; i++) {
        particulate = {
          // 爆炸点
          x0: item.x,
          y0: item.y2,
          // 居于爆炸点的坐标位置产生颗粒
          x: item.x,
          y: item.y2,
          // 颗粒的偏离角度(以弧度表示)
          angle: Math.PI * 2 * Math.random(),
          // (颗粒爆炸后速度从零快速加到最大的过程简化为拥有最大速度的初速度)爆炸后的初速度
          v: 0.5,
          // 类比重力加速度
          g: 0.098,
          // 颗粒半径
          radius: Math.random() * 2.5,
          // 爆炸后的最大半径
          size: item.size
        };
        // 爆炸后的初速度分解为水平方向和垂直方向，并乘以一个随机数使同一半径轨道上的颗粒以不同的速度向外散开
        particulate.vx =
          particulate.radius * particulate.v * Math.sin(particulate.angle);
        particulate.vy =
          particulate.radius * particulate.v * Math.cos(particulate.angle);

        this.particulates[this.particulates.length - 1].push(particulate);
      }
    }
    this._boom();
  }

  _boom() {
    // 改变颗粒坐标
    this.particulates.forEach(item1 => {
      item1.forEach(item2 => {
        item2.x += item2.vx;
        // 路程：s = s0 + v0t + 1/2at^2
        item2.y = item2.y + item2.vy + item2.g / 2;
      });
    });

    // 绘制颗粒
    this.particulates.forEach(item1 => {
      item1.forEach((item2, index, arr) => {
        // 颗粒位置和爆炸点在x，y方向上距离的最大值
        let max = Math.max(
          Math.abs(item2.x - item2.x0),
          Math.abs(item2.y - item2.y0)
        );
        if (max > item2.size) {
          // 超过上述的最大距离则移除该点
          arr.splice(index, 1);
          return;
        }

        // 随机颜色
        // this.ctx.fillStyle = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
        // 距离爆炸点越远颗粒越暗
        this.ctx.globalAlpha = max / item2.size - 1;

        this.drawCircle(item2.x, item2.y, item2.radius);
      });
    });
  }

  // =============================================================== 通用函数 ===============================================================
  /**
   * 设置通用配置
   * @parmas {object} 配置信息
   */
  setStyle(style = {}) {
    if (style.strokeStyle) {
      this.ctx.strokeStyle = style.strokeStyle;
    }
    if (style.fillStyle) {
      this.ctx.fillStyle = style.fillStyle;
    }
    if (style.globalAlpha || 0 === style.globalAlpha) {
      this.ctx.globalAlpha = style.globalAlpha;
    }
  }

  /**
   * 绘制线条
   * @parmas {number} 起始横坐标
   * @parmas {number} 起始纵坐标
   * @parmas {number} 节点横坐标
   * @parmas {number} 节点纵坐标
   */
  drawLine(x = 0, y = 0, m = 0, n = 0) {
    //开始路径
    this.ctx.beginPath();
    //绘制时针
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(m, n);
    //描边路径
    this.ctx.stroke();
  }

  /**
   * 以(x,y)为圆心绘制一条弧线
   * @parmas {number} 圆心横坐标
   * @parmas {number} 圆心纵坐标
   * @parmas {number} 半径
   * @parmas {number} 起始角度(用弧度表示)
   * @parmas {number} 结束角度(用弧度表示)
   * @parmas {boolean} 是否按逆时针方向计算
   */
  drawCircle(
    x = 0,
    y = 0,
    radius,
    m = 0,
    n = 2 * Math.PI,
    counterclockwise = false
  ) {
    //开始路径
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, m, n, counterclockwise);
    this.ctx.fill();
  }
}();
