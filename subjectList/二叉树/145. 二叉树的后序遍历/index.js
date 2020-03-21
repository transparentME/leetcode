// 递归
var postorderTraversal = function(root) {
    if (!root) return [];
    let result = [];
    function map(node) {
        if (node.left) {
            map(node.left);
        }
        if (node.right) {
            map(node.right);
        }
        result.push(node.val);
    }
    map(root);
    return result;
};

// 循环

var postorderTraversal = function(root) {
    if(!root) return [];
    let stacksRoot = [root];
    let res = [];
    while(root && stacksRoot.length > 0) {
        res.unshift(root.val);
        if (root.left) stacksRoot.push(root.left);
        if (root.right) stacksRoot.push(root.right);
        root = stacksRoot.pop();
    }
    return res;
};

//哎。。。