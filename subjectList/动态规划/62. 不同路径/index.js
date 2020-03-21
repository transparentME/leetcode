var uniquePaths = function(m, n) {
    let result = [];
    result.length = m;
    for(let row = 0; row < m; row ++) {
        result[row] = [];
        result[row].length = n;
        for (let column = 0; column < n; column++) {
            if (row === 0) {
                result[0][column] = 1;
                continue;
            }
            if (column === 0) {
                result[row][0] = 1;
                continue;
            }

            result[row][column] = result[row - 1][column] + result[row][column - 1];
        }
    }
    return result[m - 1][n - 1]
};