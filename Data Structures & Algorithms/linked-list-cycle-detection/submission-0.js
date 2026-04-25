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
        const secretNode = {val: "secret", next: null}
        while (head && (head != secretNode)) {
            let temp = head.next
            head.next = secretNode
            head = temp
        }
        return head == secretNode ? true : false
    }
}
