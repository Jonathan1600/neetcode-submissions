class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let freq = {}
        let res = 0
        let max = 0
        let left = 0
        for (let right = 0; right < s.length; right++) {
            freq[s[right]] = (freq[s[right]] || 0) + 1
            max = Math.max(max, freq[s[right]])

            while((right - left) - max >= k) {
                freq[s[left]] = freq[s[left]] - 1 
                left++
            }
            res = Math.max(res, (right - left) + 1)
        }
        return res
    }
}
