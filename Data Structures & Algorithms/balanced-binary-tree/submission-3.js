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
        let isBalanced = true
        let recursion = (node) => {
            if(!node) {
                return 0
            }
            console.log("---Node:",node.val,'\n', "---Left:",node.left,'\n', "---Right:",node.right,'\n',)
            if(node.left && node.right) {
                let left = recursion(node.left) 
                let right = recursion(node.right)
                if(Math.abs(left - right) > 1) {
                    isBalanced = false
                }
                return left + right + 1
            } else if (node.left) {
                return recursion(node.left) + 1
            } else if (node.right) {
                return recursion(node.right) + 1
            } else {
                return 1
            } 
        }
        recursion(root)
        return isBalanced
    }
}
