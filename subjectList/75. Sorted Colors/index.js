/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let zeroPointer = -1;
    let twoPointer = nums.length;
    
    for (let i = 0; i < twoPointer; i ++) {
        if(nums[i] === 0) {
            zeroPointer ++;
            [nums[zeroPointer], nums[i]] = [nums[i], nums[zeroPointer]];
        } else if (nums[i] === 2) {
            [nums[twoPointer - 1], nums[i]] = [nums[i], nums[twoPointer - 1]];
            twoPointer --;
            i --;
        } else {
            [nums[zeroPointer + 1], nums[i]] = [nums[i], nums[zeroPointer + 1]];
        }
    }
};

// 这个叫双指针还是叫三指针？
// 一开始把问题想复杂了。只要解决三种颜色就好，不要想太多。
