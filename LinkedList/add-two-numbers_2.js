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
var addTwoNumbers = function(l1, l2) {
    let v1 = 0, v2 = 0, sum = 0, carry = 0;
    let sumHead = new ListNode(-1);
    let ptr = sumHead;
    
    while(l1!=null || l2!= null){
        v1 = l1 != null ? l1.val : 0;
        l1 = l1 != null ? l1.next : null;
        v2 = l2 != null ? l2.val : 0;
        l2 = l2 != null ? l2.next : null;
        
        sum = v1 + v2 + carry;
        carry = Math.floor(sum/10);
        sum  = Math.floor(sum%10);
        
        let temp = new ListNode(sum);
        ptr.next = temp;
        ptr = ptr.next;
    }
    
    if(carry != 0){
        let temp = new ListNode(carry);
        ptr.next = temp;
    }

    return sumHead.next;
};