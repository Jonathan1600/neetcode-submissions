class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) {
            return false
        }
        let counter = {}
        for (let i = 0; i < s.length; i++) {
            if(s[i] in counter) {
                counter[s[i]] += 1
            } else {
                counter[s[i]] = 1
            }
        }

        for (let i = 0; i < s.length; i++) {
            if(t[i] in counter) {
                counter[t[i]] -= 1
            } else {
               return false
            }
        }
        return true
    }
}
