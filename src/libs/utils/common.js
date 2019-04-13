export default new class {
    /**
     * 对传入的值与最大值和最小值进行比较
     * @parmas {number} 传入的值
     * @parmas {number} 最小值
     * @parmas {number} 最大值
     * @returns {number} 大于最大取最大，小于最小取最小，否则返回原值
     */
    clamp(value, min = 0, max = 0) {
        if (value < min) {
            return min;
        }
        if (value > max) {
            return max;
        }
        return value;
    }

    /**
     * @description
     * 在理想情况下对传入的字符串进行包括分隔符的分隔
     * @issue
     * 字符串以分隔符开头？
     * 字符串不以分隔符结束?
     * 英文状态下的单双引号?
     * @param {string} str 需要被分割的字符串
     * @returns {array} 分割后的字符串，包含分隔符
     */
    getStringArr(str = '', mode = 'string') {
        if (mode === 'poetry') return str.trim().split(/\s/);
        const strArr = str.split(/[,\.\?!;，。！？]+(?![^\(（“‘)]*[\)）“‘])/);
        const separators = str.match(/[,\.\?!;，。！？]+(?![^\(“‘)]*[\)“‘])/g);
        // 去掉以分隔符结束生成的空元素
        if (strArr[strArr.length - 1] === '') strArr.length--;
        if (!separators) return strArr;
        return strArr.map((item, index) => {
            let str = item;
            str += separators[index];
            return str;
        });
    }
}();
