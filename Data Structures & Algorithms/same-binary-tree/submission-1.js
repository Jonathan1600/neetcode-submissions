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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        let recursion = (a, b) => {
            if (!a && !b) {
                return false
            } else if (!a || !b) {
                return true
            }
            
            

            let leftA = recursion(a.left, b.left)
            let rightA = recursion(a.right, b.right)
            return (leftA || rightA) || !(a.val == b.val)
        }
        return !recursion(p, q)
    }
}
