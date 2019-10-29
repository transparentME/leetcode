// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

// Note:

// Your returned answers (both index1 and index2) are not zero-based.
// You may assume that each input would have exactly one solution and you may not use the same element twice.

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 最简单的方法
var twoSum = function(numbers, target) {
    let data = {};
    for(let i = 0; i < numbers.length; i++) {
      if(data[target-numbers[i]]) {
        return [data[target-numbers[i]], i + 1 ]
      }
      data[numbers[i]] = i + 1;
    }
};

// 两个关键词 sorted， one solution
var twoSum = function(numbers, target) {
  var i = 0;
  var j = numbers.length - 1;
  while (j > i) {
    if (numbers[i] + numbers[j] === target) {
        return [i, j];
    } else if (numbers[i] + numbers[j] > target) {
        j--;
    } else if (numbers[i] + numbers[j] < target) {
        i++;
    } 
  }
};