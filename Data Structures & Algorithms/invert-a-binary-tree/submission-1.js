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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root) {
            return root
        }
        let recursion = (node) => {
            if (node.left) {
                recursion(node.left)
            }
            if (node.right) {
                recursion(node.right)
            }
            let l = node.left
            let r = node.right
            node.left = r 
            node.right = l
        }
        recursion(root)
        return root
    }
}
