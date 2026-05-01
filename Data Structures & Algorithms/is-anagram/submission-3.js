class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let obj = {}
        if (s.length != t.length) {
            return false
        }
        for (const char of s) {
            obj[char] = (obj[char] || 0) + 1
        }
        for (const char of t) {
            if(!(char in obj) || obj[char] <= 0) {
                return false
            } else {
                obj[char] = obj[char] - 1
            }
        }
        return true

    }
}
