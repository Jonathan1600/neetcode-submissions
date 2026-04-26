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
                return left > right ? left + 1 : right + 1
            } else if (node && node.left) {
                let left = recursion(node.left)
                if (left > max) {
                    max = left 
                }
                return left + 1
            } else if (node && node.right) {
               let right = recursion(node.right)
                if (right > max) {
                    max = right 
                }
                return right + 1
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
