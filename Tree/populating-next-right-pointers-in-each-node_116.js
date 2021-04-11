/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    
    if(root == null){
        return null;
    }
    
    let q = [];
    
    q.push(root);
    q.push(null);
    
    while(q.length != 0){
        let current = q.shift();
        
        if(current == null && q.length == 0){//This step says operation is completed which means there is no element from tree present in queue.
            return root;
        }else if(current == null){//When iteration reaches to null which means the all the child nodes of current level are inserted into queue and can insert null in queue now.
            q.push(null);
        }else{
            current.next = q[0]; //Current node point towards next node in queue.
            if(current.left != null){
                q.push(current.left);
            }
            
            if(current.right != null){
                q.push(current.right);
            }
        }
    }
    return root;
};