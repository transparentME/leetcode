var convertToBase7 = function(num) {
    if (Math.abs(num) < 7) return '' + num;
    if (num > 1e7 || num < -1e7) { console.log('输入数据超出可处理范围，请检查')};
    let result = [];
    let positive = num < 0 ? false : true;
    num = Math.abs(num);
    while(num >= 7) {
        let rest = 0;
        rest = num % 7;
        result.unshift(rest);
        num = (num - rest) / 7;
    }
    if (num > 0) {
        result.unshift(num);
    }
    return positive ? result.join('') : '-' + (result.join(''));
};

// 1. 记得好习惯，有错误处理或提示
// 2. 结果是字符串，不能直接给 - ，会转型；
// 3. 有负数的情况，一开始没想到，看事例想到的；