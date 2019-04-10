module.exports = {
    root: true, // 找配置文件不能往父级查找
    // parser: 'babel-eslint',
    extends: [
        // 'eslint-config-alloy',
        'eslint-config-alloy/vue',
    ],
    // parserOptions: {
    //     parser: 'babel-eslint',
    //     ecmaVersion: 7,
    //     sourceType: 'module',
    //     ecmaFeatures: { // 添加ES特性支持，使之能够识别ES6语法
    //         jsx: true
    //     }
    // },
    globals: {
        // 这里填入你的项目需要的全局变量
        // 这里值为 false 表示这个全局变量不允许被重新赋值
    },
    rules: {
        // 项目个性化配置
    }
};
