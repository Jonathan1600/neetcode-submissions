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
     * @return {void}
     */
    reorderList(head) {
        let len = 0
        let node = head
        while(node) {
            len++
            node = node.next
        }
        if (len == 1) {
            return
        }
        let half = Math.floor(len / 2)
        let counter = 0
        node = head
        let dummyHead2 = {val:0,next: null}
        while(node) {
            counter++
            if(counter >= half) {
                dummyHead2.next = node.next
                node.next = null
            }
            node = node.next
        }
        let node2 = dummyHead2.next
        let prev = null
        while(node2) {
            let next = node2.next
            node2.next = prev
            prev = node2
            node2 = next
        }
        node = head
        while(node) {
            let next = node.next
            let prevNext = prev.next
            node.next = prev
            if(!next) {
                prev.next = prevNext
            } else {
                prev.next = next
            }
            prev = prevNext
            node = next
        }
    }
}
