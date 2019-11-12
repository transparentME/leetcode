/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if ((s.length) % 2 !== 0) return false;
    var a = /\{/g;
    var b = /\}/g;
    var c = /\(/g;
    var d = /\)/g;
    var e = /\[/g;
    var f = /\]/g;

    var stringValue = s;
    for(var i = 0; i < stringValue.length; i++) {
      function count(str, str1, reg1, str2, reg2) {
        let result1 = str.match(reg1);
        let result2 = str.match(reg2);
        // 判断数量一致
        if (result1.length !== result2.length) {
          return false;
        } else {
          return [str.indexOf(str1, result1.length), str.indexOf(str2, result2.length)]
        }
      }
      var resulta = count(stringValue, '{', a , '}', b);
      var resultb = count(stringValue, '(', c, ')', d);
      var resultc = count(stringValue, '[', e, ']', f);
      if(typeOf(resulta) === Array && typeOf(resultb) === Array && typeOf(resultc) === Array) {
        if (resulta === [0, 0] && resultb === [0, 0] && resultc === [0, 0]) return true;
        if (resulta[0] + 1 !== resulta[1] && resultb[0] + 1 !== resultb[1] && resultc[0] + 1 !== resultc[1] ) {
          return false;
        } else if (resulta[0] + 1 === resulta[1]) {
          let char1 = str.substring(resulta[0], 0);
          let char2 = str.substring(resulta[1]);
          if (char1 !== '' && char2 !== '') {
            all(stringValue, '{', a , '}', b);
            all(stringValue, '(', c, ')', d);
            all(stringValue, '[', e, ']', f);
          } else {
            return true;
          }
        }
      } else {
        return resulta && resultb && resultc;
      }
    }
};
