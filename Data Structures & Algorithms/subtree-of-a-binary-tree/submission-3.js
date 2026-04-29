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
            console.log(main, sub)
            if(!main && !sub) {
                console.log('&&')
                return true
            }
            if(!main || !sub) {
                console.log('||')
                return false
            }
            if (main.val == sub.val) {
                console.log('--', main.val, sub.val)
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
                console.log(node, subRoot, !!isSubTree)
                isSubTree =  !!isSubTree ? isSubTree : recursiveCheck(node, subRoot)
                return
            }
            recursion(node.left)
            recursion(node.right)
        }
        recursion(root)
        console.log(isSubTree)
        return isSubTree
    }
}
