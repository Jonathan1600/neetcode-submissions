class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.head = {val: 0, prev: null, next: null, key:-1}
        this.cur = this.head
        this.map = new Map()
        this.map.set(null, null)
        this.max = capacity
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let keyNode = this.map.get(key)
        if (!keyNode) return -1

        if (!keyNode.next) return keyNode.val

        if(keyNode.next) keyNode.next.prev = keyNode.prev
        keyNode.prev.next = keyNode.next

        keyNode.prev = this.cur
        keyNode.next = null

        this.cur.next = keyNode
        this.cur = this.cur.next

        return keyNode.val

    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let map = this.map
        let keyNode = map.get(key)
        if(keyNode) {
            let next = keyNode.next
            let prev = keyNode.prev
            if(next) {
                next.prev = prev
            } else {
                this.cur = prev
            }        
            prev.next = next
            map.delete(key)
        }
        let node = {val: value, next: null, prev: this.cur, key: key}
        this.cur.next = node
        this.cur = this.cur.next
        map.set(key, this.cur)
        if(map.size > this.max + 1) {
            map.delete(this.head.next.key)
            this.head.next = this.head.next.next
            if(this.head.next) this.head.next.prev = this.head
        }
    }
}
