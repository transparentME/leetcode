var maxArea = function(height) {
    let result = 0;
    let length = height.length;
    for(let i = 0; i < length; i++) {
        let tempResult = 0;
        let minResult = Math.min(height[i], height[length - 1]);
        
        tempResult = minResult * (length - i - 1);
        if (result < tempResult) {
            result = tempResult;
        }
        if (minResult === height[length - 1]) {
            length --;
            i --;
        }
    }
    return result;
};