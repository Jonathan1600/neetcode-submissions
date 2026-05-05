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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        let recursion = (node) => {
            console.log(node, p, q)
            if (p.val == node.val || q.val == node.val) {
                return node
            }
            if (p.val < node.val && q.val > node.val) {
                return node
            } 
            if (p.val > node.val && q.val > node.val) {
                return recursion(node.right)
            } 
            else {
                return recursion(node.left)
            }

        }
        return recursion(root)
    }
}
