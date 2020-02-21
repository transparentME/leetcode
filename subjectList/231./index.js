/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n <= 0) return false;
    if ((n & n-1) === 0 ){
        return true;
    } else {
        return false;
    }
};

// 想2相关的都会想到位操作；
// 但是，想完就一直想跟218（例子）怎么能看出来；