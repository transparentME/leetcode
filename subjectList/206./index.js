var reverseList = function(head) {
    if (!head) return head;
    let resultNode = {};
    let count = 0;
    function mapHead(node) {
       if(count === 0) {
           resultNode.val = node.val;
           resultNode.next = null;
       } else {
           let tempNode = {};
           tempNode.val = node.val;
           tempNode.next = resultNode;
           resultNode = tempNode;
       }
       count++;
       if (node.next === null) {
           return;
       }
       mapHead(node.next);
    }
    mapHead(head);
    return resultNode;
};