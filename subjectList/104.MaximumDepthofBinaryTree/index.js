/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
	if (!root || root.val === null) return 0;
	if (!root.left && !root.right) return 1;
	return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

/**
 * Runtime: 68 ms
 * Memory Usage: 36.8 MB	
 * 
 * 
 * methods & tips：这次写题目的事情，一开始没注意到自己写的并不是递归，重复提交两次错误答案。
 * 
 *                 在优化方面，是不是可以再写一个，当明显没有left，right就不再判断（待完成）；
 *                 思考更优的方法？
 * 
 * Harvest: return掉不对的先。 
 *          多练练吧。。。嘻嘻嘻
 */