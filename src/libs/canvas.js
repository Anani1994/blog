// 依赖全局的 util 类
import util from './util';

const localCanvas = class localCanvas {
    constructor () { }
    // =============================================================== 编织星空 ===============================================================
    /* 编织璀璨星空图
     * HTML结构：
     * <canvas>Sorry,There is a drawing about a clock,But your browser does not support Canvas.</canvas>
     * JS：
     * let canvas = new Canvas();
     * canvas.createStarrySky();
     * @parmas {dom} 对canvas(画布)的引用
     * @parmas {object} optional 配置对象
     */
    createStarrySky (ele, defineSetting = {}) {
        this.ctx = ele.getContext('2d');
        this.ele = ele;
        // 默认配置
        let defaultSetting = {
            // 画布大小
            width: document.body.clientWidth,
            height: document.body.clientHeight,
            // 点的个数
            nodeNumber: 100,
            easingFactor: 5, // ???
            // 画布的颜色
            canvasStyle: {
                globalAlpha: 1,
                fillStyle: '#000'
            },
            // 点的颜色
            nodeStyle: {
                globalAlpha: 1,
                fillStyle: '#fff'
            },
            // // 边的颜色
            edgeStyle: {
                // globalAlpha: 1,
                strokeStyle: '#fff'
            }
        };
        // 合并默认配置与输入配置
        this.setting = util.extend(defaultSetting, defineSetting);
        // 初始化画布大小
        this.ele.width = this.setting.width;
        this.ele.height = this.setting.height;
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
        this._move();
        // ============================================
        // 添加事件随鼠标移动更新特殊点的坐标
        util.addHandler(window, 'mousemove', (e) => {
            let event = util.getEvent(e); 
            this.mousePos[0] = event.clientX;
            this.mousePos[1] = event.clientY;
        });
        // 调整画布
        util.addHandler(window, 'resize', util.debounce(() => {
            this.ele.width = this.setting.width;
            this.ele.height = this.setting.height;
        }));
        return this;
    }

    /*
     * 生成指定个数的点，是整个图纸的基础
     */
    _createNodes () {
        let node;
        for (let i = 0; i < this.setting.nodeNumber; i++) {
            node = {
                followMouse: 0 === i,
                x: Math.random() * this.setting.width,
                y: Math.random() * this.setting.height,
                vx: Math.random() - 0.5, // x方向上的速度
                vy: Math.random() - 0.5, // y方向上的速度
                radius: Math.random() > 0.9 ? 3 + Math.random() * 3 : 1 + Math.random() * 3 // 点的半径
            };
            this.nodes.push(node);
        }
    }

    /*
     * 创建边的关系，通过双重遍历建立一个点与其他所有点间的联系
     * 在遍历存储边的数组排除A到B和B到A同时存在的情况，因为它们本身属于一条线
     */
    _createEdges () {
        let edge;
        let ignore;
        this.nodes.forEach((item1) => {
            this.nodes.forEach((item2) => {
                if (item1 === item2) {
                    return;
                }
                edge = {
                    from: item1,
                    to: item2
                };
                ignore = false;
                this.edges.forEach((item) => {
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

    _move () {
        this.nodes.forEach((item) => {
            if (item.followMouse) {
                return;
            }
            // 粒子系统的核心-遍历粒子，并且更新其状(v = v + a, s = s + v => a是加速度，v是速度，s是位移)
            // 这里未涉及加速度使用的是：s = s + v
            item.x += item.vx;
            item.y += item.vy;

            // 对重新计算后的坐标进行判断是否超出画布
            // 超出坐标对应速度的正负号取反(避免一直超出临界值)，并对该次的坐标与临界值进行比较
            if (item.x < 0 || item.x > this.setting.width) {
                item.vx *= -1;
                item.x = util.clamp(item.x, 0, this.setting.width)
            }
            if (item.y < 0 || item.y > this.setting.height) {
                item.vy *= -1;
                item.y = util.clamp(item.y, 0, this.setting.height)
            }
        });
        // 跟随鼠标的点缓动：x = x + (t - x) / factor(factor 是缓动因子，t 是最终位置，x 是当前位置)
        // 详见 https://link.jianshu.com?t=https://www.youtube.com/watch?v=ZfytHvgHybA
        this.nodes[0].x += (this.mousePos[0] - this.nodes[0].x) / this.setting.easingFactor;
        this.nodes[0].y += (this.mousePos[1] - this.nodes[0].y) / this.setting.easingFactor;

        // 开始绘制
        this._render();

        // come on 动起来
        window.requestAnimationFrame(this._move.bind(this));
    }

    _render () {
        // 根据配置设置样式
        this.ctx.globalAlpha = this.setting.canvasStyle.globalAlpha;
        this.ctx.fillStyle = this.setting.canvasStyle.fillStyle;

        // 绘制画布
        this.ctx.fillRect(0, 0, this.setting.width, this.setting.height);

        this.edges.forEach ((item) => {
            // ???
            let len = Math.sqrt(Math.pow((item.from.x - item.to.x), 2) + Math.pow((item.from.y - item.to.y), 2));
            let threshold = this.setting.width / 8;

            // ???
            if (len > threshold) {
                return;
            }

            // ???
            this.ctx.lineWidth = (1 - len / threshold) * 2.5;
            this.ctx.globalAlpha = 1 - len / threshold;

            // 根据配置设置样式
            if (this.setting.edgeStyle) {
                if (this.setting.edgeStyle.globalAlpha) {
                    this.ctx.globalAlpha = this.setting.edgeStyle.globalAlpha;
                }
                if (this.setting.edgeStyle.strokeStyle) {
                    this.ctx.strokeStyle = this.setting.edgeStyle.strokeStyle;
                }
            }

            // 绘制边
            this.drawLine(item.from.x, item.from.y, item.to.x, item.to.y);
        });

        // 根据配置设置样式
        this.ctx.globalAlpha = this.setting.nodeStyle.globalAlpha;
        this.ctx.fillStyle = this.setting.nodeStyle.fillStyle;

        this.nodes.forEach((item) => {
            // 排除特殊点
            if (item.followMouse) {
                return;
            }

            // 绘制点
            this.drawCircle(item.x, item.y, item.radius, 0, 2 * Math.PI);
        });
    }

    // =============================================================== 通用函数 ===============================================================
    /*
     * 设置通用配置
     * @parmas {object} 配置信息
     */
    setStyle (style = {}) {
        this.ctx.strokeStyle = style.strokeStyle;
        this.ctx.fillStyle = style.fillStyle;
    }

    /*
     * 绘制线条
     * @parmas {number} 起始横坐标
     * @parmas {number} 起始纵坐标
     * @parmas {number} 节点横坐标
     * @parmas {number} 节点纵坐标
     */
    drawLine (x = 0, y = 0, m = 0, n = 0) {
        //开始路径
        this.ctx.beginPath();
        //绘制时针
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(m, n);
        //描边路径
        this.ctx.stroke();
    }

    /*
     * 以(x,y)为圆心绘制一条弧线
     * @parmas {number} 圆心横坐标
     * @parmas {number} 圆心纵坐标
     * @parmas {number} 半径
     * @parmas {number} 起始角度(用弧度表示)
     * @parmas {number} 结束角度(用弧度表示)
     * @parmas {boolean} 是否按逆时针方向计算
     */
    drawCircle (x = 0, y = 0, radius, m = 0, n = 0, counterclockwise = false) {
        //开始路径
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, m, n, counterclockwise);
        this.ctx.fill();
    }
}

let canvas = new localCanvas();

export default canvas;
