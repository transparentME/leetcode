var lengthOfLIS = function(nums) {
    if (nums.length === 0) return [];
    let tempResult = [];
    tempResult.length = nums.length;
    tempResult[0] = 1;
    for(let i = 1; i < nums.length; i++) {
       for (let j = 0; j < i; j ++) {
           if (nums[i] > nums[j]) {
               tempResult[i] = Math.max((tempResult[i] || 0), tempResult[j] + 1);
           } else {
               tempResult[i] = Math.max((tempResult[i] || 0), 1);
           }
       }
    }
    return Math.max(...tempResult);
};