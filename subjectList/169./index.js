var majorityElement = function(nums) {
    if(nums.length === 0) return 0;
    let tempValue = null;
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        if (count === 0) {
            tempValue = nums[i];
        }
        count += (nums[i] == tempValue) ? 1 : -1;
    }
    return tempValue;
};

// 想得到哈希
// 还有一个先排序，后取二分之一的位置上的值的方法；