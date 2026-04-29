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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        let isSubTree = false
        let recursiveCheck = (main, sub) => {
            if(!main && !sub) {
                return true
            }
            if(!main || !sub) {
                return false
            }
            if (main.val == sub.val) {
                return recursiveCheck(main.left, sub.left) && recursiveCheck(main.right, sub.right)
            } else {
                return false
            }
        }
        let recursion = (node) => {
            if(!node) {
                return
            }
            if (node.val == subRoot.val) {
                isSubTree =  isSubTree ? isSubTree : recursiveCheck(node, subRoot)
            }
            recursion(node.left)
            recursion(node.right)
        }
        recursion(root)
        return isSubTree
    }
}
