var tribonacci = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 1;
    let result = 0;
    function count(n) {
        let former = 0;
        let middle = 1;
        let latter = 1;
        for (let i = 3; i <= n; i ++) {
            result = (former + latter + middle);
            former = middle;
            middle = latter;
            latter = result;
        }
    }
    count(n);
    return result;
};