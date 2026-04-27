/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        let recursion = (node) => {
            console.log("Node:",node, node.left, node.right)
            if(!node) {
                return 0
            }
            if(node.left && node.right) {
                return recursion(node.left) + recursion(node.right)
            } else if (node.left) {
                return recursion(node.left) + 1
            } else if (node.right) {
                return recursion(node.right) + 1
            } else {
                return 0
            } 
        }
        let offset = recursion(root)
        return offset > 1 ? false : true
    }
}
