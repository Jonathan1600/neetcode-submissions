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
    maxDepth(root) {
        let max = 0
        let recursion = (node, count) => {
            count++
            if (count > max) {
                max = count
            }
            if(node && node.left) {
                recursion(node.left, count)
            }
            if(node && node.right) {
                recursion(node.right, count)
            }
        }
        recursion(root, 0)
        return root ? max : 0
    }
}
