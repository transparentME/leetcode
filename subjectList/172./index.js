/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let zeroCount = 0;
    function getFive (sum) {
        if (sum >= 5) {
            zeroCount += Math.floor(sum / 5);
            getFive(sum / 5);
        }
    }
    getFive(n)
    return zeroCount;
};