class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length == 0) return 0
        const seen = new Set()
        let l = 0
        let max = 0
        for (let r = 0; r < s.length; r++) {
            let char = s[r]
            if(seen.has(char)) {
                while(seen.has(s[r])) {
                    seen.delete(s[l])
                    l++
                }
            }
            max = Math.max(max, (r - l)+1)
            seen.add(char)
        }
        return max
    }
}
