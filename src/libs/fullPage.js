import util from './util';

// 类接受一个对象 option 作为参数配置
// option.height 容器及每一屏的高度(px) => number
// option.delay 延迟(ms) => number
// option.showSideNav // 是否显示侧边导航栏 => boolean
// option.showAppointedNode // 需要高亮的节点组的 class ，支持 css 选择器模式 => string
// 注意： 若是要高亮指点的元素，请保证该 class 选择下的元素与 this.pageAccount 相等
class fullPage {
  constructor (Options) {
    this.visibleWindowHeight = innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    this.pageContainer = document.querySelector('.page-container');
    this.container = document.querySelector('.container');
    this.pages = document.querySelectorAll('.page');
    this.pageAccount = this.pages.length;
    this.currentPosition = 0;
    this.activePageIndex = 0; // 当前显示页面(.page)的索引
    // 单独使用方法会丢失 this，以此来绑定 this
    this.slideToPage = this.slideToPage.bind(this);
    // 默认配置
    let defaultOptions = {
      height: this.visibleWindowHeight,
      delay: 1000,
      showSideNav: true,
      showAppointedNode: undefined
    };
    // 合并自定义配置
    this.Options = Object.assign(defaultOptions, Options);
  }

  init () {
    if (!this.pageAccount) {
      return;
    };
    this.setHeight(this.Options.height);
    this.addMouseWheel();
    if (this.Options.showSideNav) {
      this.createNav();
    }
    if (this.Options.showAppointedNode) {
      let appointedNodes = document.querySelectorAll(this.Options.showAppointedNode);
      this.appointedNodes = Array.prototype.slice.call(appointedNodes);
      this.appointedNodes[0].classList.add('active');
    }
  }

  // 设置容器及页面高度
  setHeight (height) {
    this.pageContainer.style.height = `${height}px`;
    for (let i = 0; i < this.pageAccount; i++) {
      this.pages[i].style.height = `${height}px`;
    }
  }

  // 事件处理
  addMouseWheel () {
    // 设置节流函数
    let handleMouseWheel = util.throttle(this.slideToPage, this, this.Options.delay);
    // 添加滚动监听
    if ((navigator.userAgent.toLowerCase().indexOf('firefox') !== -1)) {
      document.addEventListener('DOMMouseScroll', handleMouseWheel, false);
    } else if (document.addEventListener) {
      document.addEventListener('mousewheel', handleMouseWheel, false);
    } else if (document.attachEvent) {
      document.attachEvent('onmousewheel', handleMouseWheel);
    } else {
      document.onmousewheel = handleMouseWheel;
    }
    // 窗口尺寸变化时重置位置
    // window.addEventListener('resize', this.handleWindowResize.bind(this));
  }

  // 是否支持 event.wheelDelta 浏览器只需在第一次加载时检测
  getWheelDelta (event) {
    if (event.wheelDelta) {
      // 第一次调用之后惰性载入，无需再做检测
      this.getWheelDelta = event => event.wheelDelta;
      return event.wheelDelta;
    } else {
      // 兼容火狐
      this.getWheelDelta = event => -event.detail;
      return -event.detail;
    }
  }

  // 滚动处理
  slideToPage (event) {
    // mousewheel事件中的 “event.wheelDelta” 属性值：返回的如果是正值说明滚轮是向上滚动
    // DOMMouseScroll事件中的 “event.detail” 属性值：返回的如果是负值说明滚轮是向上滚动
    let delta = this.getWheelDelta(event);
    if (delta > 0) {
      this.upGlide(this.Options.height);
    } else {
      this.downGlide(this.Options.height);
    }
  }

  // 上滑
  upGlide (height) {
    if (this.container.offsetTop < 0) {
      this.currentPosition += height;
      this.toPage(this.currentPosition);
      this.changActiveLi(this.currentPosition);
      this.activePageIndex -= 1;
    }
  }

  // 下滑
  downGlide (height) {
    if (this.container.offsetTop >= -this.visibleWindowHeight * (this.pageAccount - 2)) {
      this.currentPosition -= height;
      this.toPage(this.currentPosition);
      this.changActiveLi(this.currentPosition);
      this.activePageIndex += 1;
    }
  }

  // 滑动至指定位置
  toPage (top) {
    this.container.style.top = `${top}px`;
  }

  // 改变高亮的元素
  changActiveLi (height) {
    let i = Math.round(Math.abs(height / this.visibleWindowHeight));
    if (this.Options.showSideNav) {
      this.navLis.forEach(element => {
        if (element.classList.contains('active')) {
          element.classList.remove('active');
        }
      });

      this.navLis[i].classList.add('active');
    }
    if (this.Options.showAppointedNode) {
      this.appointedNodes.forEach(element => {
        if (element.classList.contains('active')) {
          element.classList.remove('active');
        }
      });

      this.appointedNodes[i].classList.add('active');
    }
  }

  // 设置防抖动函数
  handleWindowResize (event) {
    // util.debounce(this.getNewPosition, this, event, this.Options.delay);
  }
  // 重新获取高度便设置
  getNewPosition () {
    // set activeNavLi
    // get currentPosition & to the page
  }

  // 创建导航按钮
  createNav () {
    if (!this.pageAccount) {
      return;
    }
    let sideNav = document.createElement('ul');
    sideNav.className = 'side-nav';
    this.container.appendChild(sideNav);
    // 创建按钮节点
    for (let i = 0; i < this.pageAccount; i++) {
      sideNav.innerHTML += '<li class="nav-circle"><span></span></li>';
    }
    //
    let navLis = document.querySelectorAll('.page-container ul.side-nav li');
    this.navLis = Array.prototype.slice.call(navLis);

    this.navLis[0].classList.add('active');

    this.navLis.forEach((element, i) => {
      element.addEventListener('click', () => {
        this.activePageIndex = i;
        this.currentPosition = -i * this.Options.height;
        this.toPage(this.currentPosition);
        this.navLis.forEach(element => {
          if (element.classList.contains('active')) {
            element.classList.remove('active');
          }
        });
        element.classList.add('active');
        if (this.Options.showAppointedNode) {
          this.appointedNodes.forEach(element => {
            if (element.classList.contains('active')) {
              element.classList.remove('active');
            }
          });
          this.appointedNodes[i].classList.add('active');
        }
      });
    });
  }

  // 创建一个滑动到指定页面的方法，可以绑定到你想要绑定的节点
  slidePageTo (n) {
    this.activePageIndex = n - 1;
    this.currentPosition = -(n - 1) * this.Options.height;
    this.toPage(this.currentPosition);
    if (this.Options.showSideNav) {
      this.navLis.forEach(element => {
        if (element.classList.contains('active')) {
          element.classList.remove('active');
        }
      });
      this.navLis[n - 1].classList.add('active');
    }
    if (this.Options.showAppointedNode) {
      this.appointedNodes.forEach(element => {
        if (element.classList.contains('active')) {
          element.classList.remove('active');
        }
      });
      this.appointedNodes[n - 1].classList.add('active');
    }
  }
}

export default fullPage;
