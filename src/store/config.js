import util from '../libs/util';
import canvas from '../libs/canvas';

const config = {
    state: {
        openBgAnimation: false, // 是否开启星空背景
        animationId: '' // 星空背景对象计时器ID
    },

    mutations: {
        // 星空背景开关
        toggleBgAnimation(state) {
            state.openBgAnimation = !state.openBgAnimation;
            
            if (state.openBgAnimation) {
                if (!util.isEmpty(state.animationId)) {
                    clearInterval(state.animationId);
                    state.animationId =  '';
                }
                return;
            }
            if (util.isEmpty(state.animationId)) {
                state.animationId = setInterval(
                    canvas.createStarrySky(document.querySelector('#app-bg'), {
                        nodeStyle: {
                            number: 10
                        }
                    }).start,
                    4
                );
            }
        }
    }
};

export default config;
