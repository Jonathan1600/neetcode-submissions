class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLen = 0
        const seen = {}
        let left = 0
        for (let i = 0; i < s.length; i++) {
            if(!(s[i] in seen)) {
                seen[s[i]] = 0
            }
            if(seen[s[i]] == 0 && maxLen < i - left) {
                maxLen = i - left
            }
            while (seen[s[i]] > 0) {
                seen[s[left]] = seen[s[left]] - 1
                left++
            }
            seen[s[i]] = seen[s[i]] + 1
        }
        return maxLen + 1
    }
}
