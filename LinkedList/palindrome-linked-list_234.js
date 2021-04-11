/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

//1. Two pointer appraoch
var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    let mid = null;
    //When fast reaches to the end of the list by the time slow reaches to mid of the list
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    
    if(fast != null){
        mid = slow.next;
    }else{
        mid = slow;
    }
    
    //reverse the linkedlist and store the reversed head into mid. 
    mid = reversed(mid);
    //Set fast pointer back to head to start traversing of first half
    fast = head;
    
    while(mid !== null){
        if(fast.val != mid.val){
            return false;
        }
        
        fast = fast.next;
        mid = mid.next;
    }
    return true;
};


function reversed(head){
    if(head == null){return head;}
    
    let prev = null, next = null, current = head;
    
    while(current !== null){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    head = prev;
    return head;
} 