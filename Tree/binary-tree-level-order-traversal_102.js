/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];
    
    if(root == null){
        return result;
    }
    
    let queue = []; // only allows FIFO operations. i.e. push and shifts
    
    queue.push(root);
    
    while(queue.length != 0){
        let queueSize = queue.length;
        let currentLevel = [];
        for(i = 0; i < queueSize; i++){
            let current = queue.shift();
            currentLevel.push(current.val);
            
            if(current.left != null){
               queue.push(current.left); 
            }
            
            if(current.right != null){
               queue.push(current.right); 
            }
        }
        
        result.push(currentLevel);
    }
    
    return result;
};