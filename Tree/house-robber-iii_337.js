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
 * @return {number}
 */

/*
basically Math.max(child+grandparents,parents)
in layman terms!
*/

let map = new Map();
var rob = function(root) {
    if (root == null){
        return 0;
    }
    
    if(map.has(root)){
        return map.get(root)
    }
    
    let total = 0;
    
    if(root.left != null){
        total += rob(root.left.left) + rob(root.left.right);
    }
    
    if(root.right != null){
        total += rob(root.right.left) + rob(root.right.right)
    }
    
    map.set(root, Math.max(root.val + total, rob(root.left) + rob(root.right)));
    return map.get(root);
        
};
