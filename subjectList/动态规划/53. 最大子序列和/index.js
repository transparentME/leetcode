var maxSubArray = function(nums) {
    if(nums.length === 0) return 0;
    let max = nums[0];
    let sum = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if (sum > 0) {
            sum = sum + nums[i];
        } else {
            sum = nums[i];
        }
        max = Math.max(max, sum);
    } 
    return max;
};