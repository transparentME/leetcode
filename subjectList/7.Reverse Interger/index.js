/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x >= 2**31 - 1 || x <= - (2**31)) return 0;
 var negative = x < 0;
 var result = negative ? (-x).toString() : x.toString(); 
 var newResult = negative ? - (+ result.split('').reverse().join('')) : + result.split('').reverse().join('') ;
 if (newResult >= 2**31 - 1 || newResult <= - (2**31)) {
   return 0;
 } else {
   return newResult;
 }
};



// Runtime: 76 ms, faster than 60.53% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 36 MB, less than 34.37% of JavaScript online submissions for Reverse Integer.