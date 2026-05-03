/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let cur = l1
        let carry = 0
        while (cur) {
            let addition = cur.val + (l2 ? l2.val : 0) + carry
            carry = 0
            while (addition >= 10) {
                addition -= 10
                carry++
            }
            cur.val = addition 
            if (l2 && l2.next) {
                l2 = l2.next
            } else {
                l2 = null
            }
            if (!cur.next) {
                break
            }
            cur = cur.next
        }
        if (carry > 0) {
            cur.next = {val: carry, next: null}
        }
        return l1
    }
}
