/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length === 1) return nums[0];
    let result = 0;
    nums.forEach(item => {
        result = result ^ item;
    })
    return result;
};

// 第一反应是哈希表；
// 最近做了很多题目都是跟位操作符有关；
// 1. 不用加号来做加法
// 2. 判断某个值是不是2的幂



// 还有一个去重的方法，也好好玩；
// 用set去重，然后乘以2，再减去之前的数字；