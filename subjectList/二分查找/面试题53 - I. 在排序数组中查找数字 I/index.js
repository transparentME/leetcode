/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let saving = Math.floor(nums.length / 2);
    let result = 0;
    if (nums[saving] < target) {
        for(let i = saving; i < nums.length; i ++) {
            if (nums[i] === target) {
                result ++;
            }
            if (nums[i] > target) {
                break;
            }
        }
    } else if (nums[saving] > target){
        for(let i = saving; i >= 0; i --) {
            if (nums[i] === target) {
                result ++;
            }
            if (nums[i] < target) {
                break;
            }
        }
    } else if (nums[saving] === target) {
        for(let i = 0; i < nums.length; i ++) {
            if (nums[i] === target) {
                result ++;
            }
            if (nums[i] > target) {
                break;
            }
        }
    }
    return result;
};

// 现在写的还不够好，是当等于的时候，应该是两边查找？？？

// 嗯，双指针查找确实快很多

var search = function(nums, target) {
    let saving = Math.floor(nums.length / 2);
    let result = 0;
    if (nums[saving] < target) {
        for(let i = saving; i < nums.length; i ++) {
            if (nums[i] === target) {
                result ++;
            }
            if (nums[i] > target) {
                break;
            }
        }
    } else if (nums[saving] > target){
        for(let i = saving; i >= 0; i --) {
            if (nums[i] === target) {
                result ++;
            }
            if (nums[i] < target) {
                break;
            }
        }
    } else if (nums[saving] === target) {
        result ++;
        for(let i = 1; (i < nums.length) && (i >= 0);) {
            if (nums[saving + i] === target) {
                result ++;
            }
            if (nums[saving - i] === target) {
                result ++;
            }
            if (nums[saving + i] !== target && nums[saving - 1] !== target) {
                break;
            }
            i++;
        }
    }
    return result;
};