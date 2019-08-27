/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var char = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  
  var result = s.split('');
  var newResult = result.map(item => {
    return char[item];
  })
  var minus = 0;
  var add = 0;
  for (var i = 0; i < newResult.length; i++) {
    if (newResult[i] < newResult[i+1] ) {
      minus += newResult[i];
      newResult[i] = 0;
    } else {
      add += newResult[i];
    }
  }
  return add - minus;
};

// Runtime: 140 ms, faster than 74.54% of JavaScript online submissions for Roman to Integer.
// Memory Usage: 40.2 MB, less than 38.30% of JavaScript online submissions for Roman to Integer.