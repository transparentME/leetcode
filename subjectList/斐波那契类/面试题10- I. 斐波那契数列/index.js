/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 1;
    let result = 0;
    function count(n) {
        let former = 1;
        let latter = 1;
        for (let i = 3; i <= n; i ++) {
            result = (former + latter) % 1000000007;
            former = latter;
            latter = result;
        }
    }
    count(n);
    return result;
};

// 一般都会用递归，但是递归会有很多次重复的计算；
// 所以就从3 往 目标算
// % 1000000007 是题目要求，不用在意；

// 与leetcode 509题目一样