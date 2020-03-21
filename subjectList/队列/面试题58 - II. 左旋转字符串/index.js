/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */

 // 第一个相当的是用数组
var reverseLeftWords = function(s, n) {
    let savingArr = [...s];
    if (n > (savingArr.length / 2)) {
        for(let times = 0; times < savingArr.length - n;) {
            let result = savingArr.pop();
            savingArr.unshift(result);
            times ++;
        }
    } else {
        for(let times = 0; times < n;) {
            let result = savingArr.shift();
            savingArr.push(result);
            times ++;
        }
    }
    return savingArr.join('');
};

// 第二个方法就是切字符串 
var reverseLeftWords = function(s, n) {
    let result1 = s.substr(0, n);
    let result2 = s.substr(n, s.length);
    return result2 + result1;
};