/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//1. Iterative approach
/*var reverseList = function(head) {
    let current = head;
    let prev = null;
    let next = null;
    
    while(current !== null){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    head = prev;
    return head;
};*/


//2. Recursive approch
//1st step here is to reach last element in the list
var reverseList = function(head) {
    if(head == null || head.next == null){
        return head;
    }
    
    let reverseListHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    
    return reverseListHead;
};