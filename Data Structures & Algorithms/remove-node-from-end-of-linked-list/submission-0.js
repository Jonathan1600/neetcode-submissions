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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = {val: 0, next: null}
        let length = 0
        let travel = 0
        let prev = dummy
        dummy.next = head
        let recursion = (head) => {
            if(!head) {
                return
            }
            length++
            recursion(head.next)
        }
        let recursion2 = (head) => {
            if(!head) {
                return
            }
            console.log(travel, length, n, travel == (length - n))
            if (travel == (length - n)) {
                prev.next = head.next
                return
            } else {
                prev = head
            }
            travel++
            recursion2(head.next)
        }

        recursion(head)
        recursion2(head)
        console.log(length, travel)
        return dummy.next
    }
}
