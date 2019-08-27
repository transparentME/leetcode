/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var resultList =[];
  for(var i = 0; i < nums.length; i++ ) {
    var result = target - nums[i];
    for(var o = i+1; o < nums.length; o++) {
      if (nums[o] === result && i !== o) {
        resultList = [i, o];
        break;
      }
    }
    if (resultList.length !== 0) {
      break;
    }
  }
  return resultList;
};

// Runtime: 84 ms, faster than 52.72% of JavaScript online submissions for Two Sum.
// Memory Usage: 34.8 MB, less than 40.08% of JavaScript online submissions for Two Sum.