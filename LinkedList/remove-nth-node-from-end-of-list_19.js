/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

//We just need to go to the node before the one to be removed  and to maintain the distance n from last we can take two-pointers and maintain the same distance between them, when one reaches null other reaches the required position and gets the job done

var removeNthFromEnd = function(head, n) {
    let dummy_head = new ListNode(0);
    dummy_head.next = head;
    
    let slow = dummy_head;
    let fast = dummy_head;
    
    for(let i = 1; i <= n+1; i++){
        fast = fast.next;
    }
    
    while(fast != null){
        slow = slow.next;
        fast = fast.next;
    }
    
    slow.next = slow.next.next;
    
    return dummy_head.next;  
};