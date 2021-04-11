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
let num_of_nodes;
var diameterOfBinaryTree = function(root) {
    num_of_nodes = 1;
    getDiameter(root)
    return num_of_nodes - 1;
};

var getDiameter = function(node){
    if(node == null){
        return 0;
    }
    let leftDiameter =  getDiameter(node.left);
    let rightDiameter =  getDiameter(node.right);
    
    num_of_nodes = Math.max(num_of_nodes, leftDiameter + rightDiameter + 1);
    
    return Math.max(leftDiameter, rightDiameter) + 1
}

//Calculate no. of nodes -  1 = edges.