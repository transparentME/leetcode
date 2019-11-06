/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var carry = 0;
  for (var i = digits.length - 1; i >= 0; i--) {
    if (digits[i] + 1 + carry < 10) {
      digits[i] += 1 + carry;
	    carry = 0;
      break;
    } else {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
      }
    }
  }
    return digits;
};

// 写完要多看下
// 有没有相似情况，可以合并！哎呦！