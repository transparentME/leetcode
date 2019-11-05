/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var node = {};
	var results = node; // ！！
    var forward = 0;
    if (!l1 && !l2) return false;
    if (!l1) return l2;
    if (!l2) return l1;
    function cacular(val1, val2) {
        var sum1 = val1 ? val1.val : 0;
        var sum2 = val2 ? val2.val : 0;
        var result = sum1 + sum2 + forward;
        forward = 0;
		if (node.val !== undefined) { //！！
			node.next = {};
			node = node.next;
		}
        node.val = result % 10;
        forward = Math.floor(result / 10); 
        if ((val1 && val1.next) || (val2 && val2.next) || forward) {
            cacular(val1 && val1.next, val2 && val2.next);
        }
    }
	cacular(l1, l2);
    return results;
};

// 两个地方没有处理好：
// 1. 递归的指针，总是没转过弯来
// 2. 处理极端情况，val1 && val1.next；没有考虑周全