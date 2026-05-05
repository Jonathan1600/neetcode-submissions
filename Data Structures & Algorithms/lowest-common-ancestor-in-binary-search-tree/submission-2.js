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
            let val = node.val
            let pv = p.val
            let qv = q.val
            if (pv == val || qv == val) return node
            
            if ((pv < val && qv > val) || (qv < val && pv > val)) return node

            if (pv > val && qv > val) return recursion(node.right)
            
            return recursion(node.left)

        }
        return recursion(root)
    }
}
