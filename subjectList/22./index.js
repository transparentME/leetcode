/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n === 1) return ["()"];
    if (n === 0) return [];

    let saving = [];
    function output(str, left, right) {
        if(left === n && right === n) {
            saving.push(str);
            return;
        }
        if (left < n) {
            output(str + '(', left + 1, right);
        }
        if (right < left) {
            output(str + ')', left, right + 1);
        }
    }
    output('', 0, 0);
    return saving;
};

// 和17题是同类项的；
// 在思考的时候，因为第20题的缘故，总是想着还是用数字的方式解决。
// 后面考虑到递归；
// 递归的思路，把递归想成“累加”, 如果是一个值，就想爬楼梯的题目一样；
// 如果是多个值，就考虑在符合“外型”要求的时候，再推到数组里面去，否则，把答案“手动的传递”；