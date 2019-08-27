/**
 * @param {number} x
 * @return {boolean}
 */
// change to string
var isPalindrome = function(x) {
  if ( x < 0 ) return false;
   var toString = x.toString().split('').reverse().join('');
   return x === + toString ? true : false;
};

// Runtime: 224 ms, faster than 22.28% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 45.4 MB, less than 64.65% of JavaScript online submissions for Palindrome Number.