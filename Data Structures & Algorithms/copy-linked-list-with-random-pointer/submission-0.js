// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let dummyHead = {val: 0, next: null, random: null}
        let map = new Map()
        map.set(null, null)
        let node = head
        while (node) {
            let copyNode = {val: node.val, next: null, random: null}
            map.set(node, copyNode)
            node = node.next
        }
        node = head
        while (node) {
            let currCopy = map.get(node)
            // console.log("--", currCopy)
            if (node.next) {
                currCopy.next = map.get(node.next) || null
            }
            if (node.random) {
                currCopy.random = map.get(node.random) || null
            }
            node = node.next
        }


        console.log(map)
        return map.get(head)
    }
}
