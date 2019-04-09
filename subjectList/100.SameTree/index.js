/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (!p && !q) {
    return true;
  }
  if (!p || !q) {
    return false;
  }
  if (p.val !== q.val) {
    return false;
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

/**
 * Runtime: 56 ms, faster than 100.00% of JavaScript online submissions for Same Tree.
 * Memory Usage: 34 MB, less than 9.90% of JavaScript online submissions for Same Tree.
 * 
 * Question：为什么会导致Memory Usage这么高？ 怎么改善？
 * 
 * methods & tips：写测试时，出现判断不准确（！！！）的情况，而导致报错；
 *                 在写组件库的时候，也出现这样的问题，以后需要多注意；
 * 
 * Harvest： 第一次了解了下二叉树；了解了前、中、后序遍历、递归遍历、非递归遍历。
 * 
 * Follow-up：试着手写一下二叉树的实现
 */