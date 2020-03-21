// 递归
var preorderTraversal = function(root) {
    let result = [];
    
    function map(node) {
        if (node && node.val) {
            result.push(node.val);
            map(node.val);
            map(node.left);
            map(node.right);
        }
    }
    map(root);
    return result;
};

// 遍历 利用栈的方式
var preorderTraversal = function(root) {
    let savingArr = [], output = [];
    root && root.val ? savingArr.push(root) : [];
    while(savingArr.length > 0) {
        result = savingArr.pop();
        output.push(result.val);

        if (result.right !== null) {
            savingArr.push(result.right)
        }
        if (result.left !== null) {
            savingArr.push(result.left)
        }
    }
    return output;
};