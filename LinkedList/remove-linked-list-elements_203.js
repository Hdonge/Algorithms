/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    while(head !== null && head.val == val){
        head = head.next;
    }
    
    let current = head;
    
    //To change the reomve the node always checks for value of next node and replace that node with next to next node.
    while(current !== null && current.next !== null){
        if(current.next.val == val){
            current.next = current.next.next;
        }else{
            current = current.next;    
        }
    }
    return head;
};