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
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        if (!head || !head.next || !head.next.next) {
            return false
        }
        let l1 = head
        let l2 = head.next
        while (l2 != l1) {
            if(!l2.next || l1.next == null) {
                return false
            }
            l1 = l1.next
            l2 = l2.next.next
        }
        return true
    }
}
