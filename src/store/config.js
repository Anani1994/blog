import util from "../libs/util";
import canvas from "../libs/utils/canvas";

const config = {
    state: {
        // 配置信息
        openBgAnimation: false, // 是否开启星空背景
        // 此以下状态作中间变量
        animationId: "" // 星空背景对象计时器ID
    },

    mutations: {
        // 星空背景开关
        // 对此一个想法是将此函数封装进星空动画，调用时传递开关参照变量
        toggleBgAnimation(state) {
            state.openBgAnimation = !state.openBgAnimation;

            if (state.openBgAnimation) {
                if (!util.isEmpty(state.animationId)) {
                    clearInterval(state.animationId);
                    state.animationId = "";
                    // 清除绑定在 window 上的 mousemove 事件
                    state.canvas.removeMouseListrner();
                }
                return;
            }
            if (util.isEmpty(state.animationId)) {
                state.canvas = canvas.createStarrySky(
                    document.querySelector("#app-bg"),
                    {
                        nodeStyle: {
                            number: 10
                        }
                    }
                );
                state.animationId = setInterval(state.canvas.start, 4);
            }
        }
    }
};

export default config;
