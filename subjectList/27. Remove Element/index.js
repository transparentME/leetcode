/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let count = 0;
    nums.forEach(item => {
      if (item !== val) {
        nums[count] = item;
        count++;
      }
    })
    nums.splice(count, nums.length - count)
    return nums.length; 
};