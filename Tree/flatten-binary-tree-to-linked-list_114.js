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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(root == null){
        return;
    }
    
    let stack = [];
    stack.push(root);
    
    while(stack.length != 0){
        let current = stack.pop();
        if(current.right != null){
            stack.push(current.right);
        }
        
        if(current.left != null){
            stack.push(current.left);
        }
        
        if(stack.length != 0){
            current.right = stack[stack.length -1];
        }
        
        current.left = null;
    }  
};
