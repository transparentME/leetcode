/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var data = [];
  var map = {
      '(': 1, 
      ')': -1,
      '{': 2, 
      '}': -2,
      '[': 3,
      ']': -3,
  };
  for(var i = 0; i < s.length; i++) {
    if (map[s[i]] > 0) {
       data.push(map[s[i]]);
    } else {
        if (data[data.length === 0]) {
            return false;
        }
        if (data[data.length - 1] + map[s[i]] !== 0) {
            return false;
        } else {
            data.pop(data.length -1);
        }
    }
  }
  if(data.length !== 0) {
    return false;  
  } else {
    return true;
  }
};

// 方法二，没什么区别;

var isValid = function(s) {
  const len = s.length;
  if (!len) return true;
  var data = [];
  for(var i = 0; i < len; i++) {
    const value = s.charAt(i);
    if (value === '{' || value === '[' || value === '(') {
      data.push(value);
    } else if (value === '}' || value === ']' || value === ')') {
      const opposite = data.pop();
      if (value === '}' && opposite !== '{') return false;
      if (value === ']' && opposite !== '[') return false;
      if (value === ')' && opposite !== '(') return false;
    }
  }
  if (data.length) return false;
  return true;
};

