/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let count = 0;
  nums.forEach(item => {
    if (item !== 0) {
      nums[count] = item;
      count++;
    }
  })
  for(var j = count; j < nums.length; j++ ) {
    nums[j] = 0;
  }
  return nums;
};

// 如果发现一个就让数组少一位，并让当前的i减少一位也是可以；
// 一次循环完成但是操作笨重；
// 好像是用赋值的方式比较好；
// 找时间研究一下java和javascript的区别；