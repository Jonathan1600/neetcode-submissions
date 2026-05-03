class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.head = {val: 0, prev: null, next: null, key:-1}
        this.cur = this.head
        this.map = new Map()
        this.map.set(null, null)
        this.len = 0
        this.max = capacity
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let keyNode = this.map.get(key)
        if (!keyNode) {
            return -1
        } else if (keyNode.next) {
            console.log("keyNode---",keyNode)
            if(keyNode.prev) {
                console.log("PREV__",keyNode.prev)
                keyNode.prev.next = keyNode.next
            }
            if(keyNode.next) {
                console.log("NEXT__",keyNode.next)
                keyNode.next.prev = keyNode.prev
            }
            keyNode.prev = this.cur
            keyNode.next = null
            this.cur.next = keyNode
            this.cur = this.cur.next
            return keyNode.val
        }
        return keyNode.val

    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.get(key)) {
            let keyNode = this.map.get(key)
            if(keyNode.prev) {
                keyNode.prev.next = keyNode.next
            }
            if(keyNode.next) {
                keyNode.next.prev = keyNode.prev
            }
            this.map.delete(key)
        }
        let node = {val: value, next: null, prev: this.cur, key: key}
        this.cur.next = node
        this.cur = this.cur.next
        this.map.set(key, this.cur)
        if(this.map.size > this.max + 1) {
            this.map.delete(this.head.next.key)
            this.head.next = this.head.next.next
            if(this.head.next) this.head.next.prev = this.head
        }
    }
}
