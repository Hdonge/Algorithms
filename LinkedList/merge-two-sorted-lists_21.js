/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let node = new ListNode(-1);
    let head = node;
    
    while(l1 !== null && l2 !== null){
        if(l2.val < l1.val){
            node.next = l2;
            l2 = l2.next;
        }else{
            node.next = l1;
            l1 = l1.next; 
        }
        node = node.next;
    }
    
    //for remainders
    if(l1 !== null){
        node.next = l1;
    }else{
        node.next = l2;
    }
    
    return head.next;
};