var numWays = function(n) {
    if (n === 0) return 1;
    if (n === 1) return 1;
    if (n === 2) return 2;
    let result = 0;
    function count(n) {
        let former = 1;
        let latter = 2;
        for (let i = 3; i <= n; i ++) {
            result = (former + latter) % 1000000007;
            former = latter;
            latter = result;
        }
    }
    count(n);
    return result;
};