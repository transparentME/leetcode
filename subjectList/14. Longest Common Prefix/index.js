/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var firstValue = strs[0];
  var secondValue = strs[1];
  if (!firstValue) return ''; 
  if (firstValue && secondValue === undefined) return firstValue;

  var result = [];
  for(var i = 1; i < firstValue.length + 1; i++) {
    result.push(firstValue.substring(i, -1));
  }
  var newResult = [];
  var common = '';
  for (var o = 0; o < result.length; o ++ ) {
    if (secondValue.indexOf(result[o]) === -1) {
      newResult = result.splice(0, o);
      break;
    } else {
      common = result[o];
    }
  }
  newResult.reverse();
  var count = 0;
  for (var l = 0; l < newResult.length; l++) {
    count = 0;
    for (var k = 0; k < strs.length; k ++) {
      if (strs[k].indexOf(newResult[l]) === -1) {
        break;
      } else {
        count += 1;
      }
    }
    if (count === strs.length) {
      common = newResult[l];
      break;
    }
  }
  return common;
};


// 两个想法：不应该只局限于prefix string，这题只考虑string。
// 1. 找到数组里面string的长度是最短，然后再一次找。
// 2. 直接用第一个字符串切割开始找。
// 3. 直接把第一个和第二个对比，如果有相同的，就继续对比，如果没有就直接为‘’;
// 4. 二叉树的找发，在数据量巨大的时候，二叉树的查找是最少的，要看数学
// 5. 除了轮训做法，是不是还可以想着用正则？