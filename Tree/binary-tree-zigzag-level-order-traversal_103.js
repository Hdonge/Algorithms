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
var zigzagLevelOrder = function(root) {
    let result = [];
    
    if(root == null){
        return result;
    }
    
    
    let queue = [];
    let reverse = false;
    
    queue.push(root); // only allows FIFO operations. i.e. push and shifts
    
    while(queue.length != 0){
        let queueSize = queue.length;
        let currentLevel =[];
        for(let i = 0; i < queueSize; i++){
            let current = queue.shift()
            currentLevel.push(current.val);
            
            if(current.left != null){
                queue.push(current.left);
            }
            
            if(current.right != null){
                queue.push(current.right);
            }
        }
        
         if(reverse){
               currentLevel = currentLevel.reverse();
         }
        
        result.push(currentLevel);
        reverse = !reverse;
    }
    return result;
};