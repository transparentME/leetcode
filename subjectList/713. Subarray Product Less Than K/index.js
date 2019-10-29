// Your are given an array of positive integers nums.

// Count and print the number of (contiguous) subarrays where the product of all the elements in the subarray is less than k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 2          r1
// 2 * 3        r1 * r2
// 2 * 3 * 4      r1 * r2 * r3
// 2 * 3 * 4 * 5    r1 * r2 * r3 * r4
// 2 * 3 * 4 * 5 * 6  r1 * r2 * r3 * r4 * r5

// 3           r2
// 3 * 4         r2 * r3
// 3 * 4 * 5       r2 * r3 * r4
// 3 * 4 * 5 * 6     r2 * r3 * r4 * r5

// 4           r3
// 4 * 5         r3 * r4
// 4 * 5 * 6       r3 * r4 * r5

// 5           r4
// 5 * 6         r4 * r5

// 6           r5
// 上面没用。

var numSubarrayProductLessThanK = function (nums, k) {
  let caculate = 1;
  let times = 0;
  let point = 0;
  let movePoint = 0;
  while (point < nums.length) {
    if (nums[point] > k || movePoint >= nums.length) {
      point++;
      movePoint = point;
      caculate = 1;
    } else {
      caculate *= nums[movePoint];
      if (caculate >= k) {
        point++;
        movePoint = point;
        caculate = 1;
      } else {
        movePoint++;
        times++;
      }
    }
  }
  return times;
};
// 写这题，学习到了双指针的写法；
// 但是上面的问题是，当数据特别大的时候，写爆了。
// 难受。。。
// 什么错呢？因为重复运算造成的，改造下。。。
