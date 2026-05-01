class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let frequency = {}
        let res = []
        for (let i = 0; i < strs.length;i++) {
            let holder = new Array(26).fill(0)
            for(const char in strs[i]) {
                holder[strs[i][char].charCodeAt(0) - 96] += 1
            }
            let key = holder.join('')
            if (!(key in frequency)) {
                frequency[key] = []
            }
            frequency[key].push(strs[i])
        }

        for (const key in frequency) {
            res.push(frequency[key])
        }
        return res
    }
}
