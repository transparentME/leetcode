/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return checkMirrorEqual(root, root);
  };
  
var checkMirrorEqual = function(node1, node2) {
	if (!node1 && !node2) return true;
	if (node1 && node2) {
    if (node1.val !== node2.val) {
      return false;
    }
  	if (checkMirrorEqual(node1.left, node2.right) && checkMirrorEqual(node1.right, node2.left)) return true;
	}
	return false;
}

/**
 * Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Symmetric Tree.
 * Memory Usage: 35.5 MB, less than 64.67% of JavaScript online submissions for Symmetric Tree.
 * 
 * methods & tips：注意边界判断。
 * 								 递归。
 * 
 */

