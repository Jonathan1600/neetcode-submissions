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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let max = 0 
        let recursion = (node) => {
            console.log(node)
            if (node && node.left && node.right) {
                let left = recursion(node.left)
                let right = recursion(node.right)
                if (left + right > max) {
                    max = left + right
                }
                console.log(node.val, left+right)
            } else if (node && node.left) {
                return recursion(node.left) + 1
            } else if (node && node.right) {
                return recursion(node.right) + 1
            } else if (node) {
                return 1
            } else {
                return 0
            }
        
        }
        recursion(root)
        return max
    }
}
