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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummy = {val: 0, next: null}
        let node = dummy
        let l1 = list1
        let l2 = list2
        while(l1 && l2) {
            if(l1.val > l2.val) {
                node.next = l2
                node = node.next
                l2 = l2.next
            } else {
                node.next = l1
                node = node.next
                l1 = l1.next
            }
        }
        if (l2) {
            node.next = l2
        } else if (l1) {
            node.next = l1
        }
        return dummy.next
        
    }
}
