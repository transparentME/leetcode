/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n === 1) return 1;
    if(n === 2) return 2;
    var data = [1, 2];
    for(let i = 2; i< n; i++) {
		data[i] = data[i - 1] + data[i -2];
    }
	return data[n - 1];
};