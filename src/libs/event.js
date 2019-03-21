// =============================================================== 事件处理 ===============================================================
export default new class {
    /**
     * 添加事件及其处理程序(兼容 IE)
     * @param {dom}
     * @param {string} 事件类型
     * @param {function} function (event) {}
     * @Returns undefined
     */
    addHandler(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    }

    /**
     * 移除事件及其处理程序(兼容 IE)
     * @param {dom}
     * @param {string} 事件类型
     * @param {function} function (event) {}
     * @Returns undefined
     */
    removeHandler(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    }

    /**
     * @params {event} 事件对象
     * @Returns 跨浏览器获取事件对象
     */
    getEvent(event) {
        return event ? event : window.event;
    }

    /**
     * @params {event} 事件对象
     * @Returns {element} 事件的目标
     */
    getTarget(event) {
        return event.target || event.srcElement;
    }

    /**
     * 阻止事件的默认行为
     * @params {event} 事件对象
     * @Returns undefined
     */
    preventDefault(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }

    /**
     * 取消事件冒泡
     * @params {event} 事件对象
     * @Returns undefined
     */
    stopPropagation(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
}
