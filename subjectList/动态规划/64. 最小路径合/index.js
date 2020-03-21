var minPathSum = function(grid) {
    for (var row = 0; row < grid.length ; row++) {
        for (var column = 0; column < grid[0].length; column++) {
            if (row === 0 && column === 0) { continue; }
            if (row === 0) {
                grid[row][column] = grid[row][column] + grid[row][column - 1];
                continue;
            }
            if (column === 0) {
                grid[row][column] = grid[row][column] + grid[row - 1][column];
                continue;
            }
            grid[row][column] = (
                (grid[row][column] + grid[row][column - 1]) >= (grid[row][column] + grid[row - 1][column])
                ?
                grid[row][column] + grid[row - 1][column]
                :
                (grid[row][column] + grid[row][column - 1])
            );
        }
    }
    return grid[row - 1][column - 1]; 
};

// 注意：
// 1，行与列要分清楚，写代码时，因为没分清楚就报错列；
// 2. 单独处理row= 0；和 列 = 0 的情况比较好；
// 3. 因为粗心，最后的row-1 和 column -1 要弄清楚，要检查；
