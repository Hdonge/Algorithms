/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(head == null || head.next == null) return null;
    let slow = head, fast = head;
    
    while(fast.next != null && fast.next.next != null){
        slow = slow.next;
        fast = fast.next.next;
        
        if(slow == fast){
            let start = head;
             while(start != slow){
                 slow = slow.next;
                 start = start.next;
             }
             return slow;
        }
    }
    return null;
};