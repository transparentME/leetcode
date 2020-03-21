// 遍历
var inorderTraversal = function(root) {
    if(!root) return [];
    let result = [];
    function mapNode(node) {
        if(node.left) {
            mapNode(node.left);
        }
        if (node && node.val) {
            result.push(node.val);
        }
        if (node.right) {
            mapNode(node.right);
        }
    }
    mapNode(root);
    return result;
};

// 迭代
var inorderTraversal = function(root) {
    if(!root) return [];
    let stacks = [];
    let output = [];
    while(root || stacks.length > 0 ) {
        while(root) {
            stacks.push(root);
            root = root.left;
        }
        root = stacks.pop();
        output.push(root.val);
        root = root.right;
    }
    return output;
};