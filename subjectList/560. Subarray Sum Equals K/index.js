// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// Example 1:
// Input:nums = [1,1,1], k = 2
// Output: 2
// Note:
// The length of the array is in range [1, 20,000].
// The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 如果我用最笨的办法，我脑子第一反应的那种
// 1                    r1
// 1 + 2                r2
// 1 + 2 + 3            r3
// 1 + 2 + 3 + 4        r4
// 1 + 2 + 3 + 4 + 5    r5
// 2 + 3                r3 - r1
// 2 + 3 + 4            r4 - r1
// 2 + 3 + 4 + 5        r5 - r1
// 3 + 4                r4 - r2
// 3 + 4 + 5            r5 - r2
// 4 + 5                r5 - r3
// 5                    r5 - r4
// 这样以此类推，看下所有可能，有没有等于k的；
// k是确定的；
var subarraySum = function(nums, k) {
  var data = {0: 1};
  let result = 0;
  var sum = 0;
  nums.forEach(item => {
    sum += item;
    if (data[sum]) {
      data[sum] ++;
    } else {
      data[sum] = 1;
    }
    if (data[sum - k]) {
      result ++;
    }
  })
  return result;
};
// 为什么要是加上一个{0: 1}呢，原因是，当一个sum 正好就等于k的时候，相减就等于0，也是需要计算一次的。
// 上面的写的有问题，1. 如果存在【sum - k】应该放在if(data[sum])之前；
var subarraySum = function(nums, k) {
  var data = {0: 1};
  let result = 0;
  var sum = 0;
  nums.forEach((item, index) => {
    sum += item;
    if (data[sum - k]) {
      result += data[sum - k];
    }
    data[sum] ? data[sum] ++ : data[sum] = 1;
  })
  return result;
};