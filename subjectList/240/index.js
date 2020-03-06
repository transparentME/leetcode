var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) return 0;
    let row = 0;
    let column = 0;
    let result = false;
    for( let i = 0; i < matrix[0].length; i++) {
        if(matrix[0][i] < target) {
            column ++;
        } else if(matrix[0][i] === target) {
            result = true;
        } else {
            break;
        }
    }
    for (let j = 0; j < matrix.length; j++) {
        if(matrix[j][0] === target) {
            result = true;
        } else if (matrix[j][0] < target) {
            row ++;
        } else {
            break;
        }
    }
    for (let c = 1; c < column; c ++) {
        for (let r = 1; r < row; r ++) {
            if (matrix[r][c] === target) {
                result = true;
            } else if (matrix[r][c] > target) {
                break;
            }
        }
    }
    return result;
};

// 我这应该是最不智能的解题方法了吧；