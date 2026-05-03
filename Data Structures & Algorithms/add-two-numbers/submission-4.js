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
        let dummyHead = {val: 0, next: null}
        let cur = dummyHead
        let carry = 0
        while (l1 || l2) {
            let addition = (l1? l1.val: 0) + (l2 ? l2.val : 0) + carry
            carry = 0
            while (addition >= 10) {
                addition -= 10
                carry++
            }
            cur.next = {val: addition, next:null}
            if (l2 && l2.next) {
                l2 = l2.next
            } else {
                l2 = null
            }
            if (l1 && l1.next) {
                l1 = l1.next
            } else {
                l1 = null
            }
            cur = cur.next
        }
        if (carry > 0) {
            cur.next = {val: carry, next: null}
        }
        return dummyHead.next
    }
}
