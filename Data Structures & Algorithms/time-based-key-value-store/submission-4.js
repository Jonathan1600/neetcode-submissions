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
        if(!keyStore.has(key)) {
            keyStore.set(key, [])
        } 
        keyStore.get(key).push({timestamp, value})
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let keyArr = this.keyStore.get(key)
        if(!keyArr) return ''
        let recursion = (l, r) => {
            if(l>= r) {
                return keyArr[l].timestamp <= timestamp ? keyArr[l].value : ''
            }
            let m = l + Math.floor((r-l)/2)
            let mPlus = Math.min(m + 1, keyArr.length -1)
            if ((mPlus == m && keyArr[m].timestamp <= timestamp) || (keyArr[m].timestamp <= timestamp && keyArr[mPlus].timestamp > timestamp)) {
                return keyArr[m].value
            }
            if (keyArr[m].timestamp <= timestamp) {
                return recursion(m + 1, r)
            } else {
                return recursion(l, m -1)
            }
        }
        return recursion(0,keyArr.length - 1)
    }
}
