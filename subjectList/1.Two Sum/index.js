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


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var data = {};
for(let i = 0; i < nums.length; i++) {
      if (data[nums[i]] !== undefined) {
          return [data[nums[i]], i];
      }
      data[target - nums[i]] = i;
}
return 'no result';
};
// 方法二用的是hash Map，也就是我理解的对象；
// 这样只需要循环一次，复杂度减低；
// 写错了一个地方： forEach的return并不会直接return出去；for循环的会return出去；
