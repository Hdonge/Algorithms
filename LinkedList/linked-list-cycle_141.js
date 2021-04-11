/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head == null){
        return false;
    }
    
    let slow = head;
    let fast = head.next;
    
    while(slow != fast){
        
        //In between if fast reaches to end means list do not have looping.
        if(fast == null || fast.next == null){
            return false;
        }
        
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return true;
};