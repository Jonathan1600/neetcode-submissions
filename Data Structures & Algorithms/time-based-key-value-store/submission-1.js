class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        let keyStore = this.keyStore
        let node = {val: value, timestamp: timestamp, next: null}
        if (keyStore.has(key)) {
            let head = keyStore.get(key)
            while(head.next) {
                head = head.next
            }
            head.next = node
        } else {
            keyStore.set(key, node)
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let keyStore = this.keyStore
        if (!keyStore.has(key)) return ''
        let head = keyStore.get(key)
        while (head) {
            console.log(head, timestamp)
            if(head.timestamp <= timestamp && !(head.next && head.next.timestamp <= timestamp)) {
                return head.val
            }
            head = head.next
        }
        return ''
    }
}
