class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let frequency = {}
        let res = []
        for (let i = 0; i < strs.length;i++) {
            let holder = new Array(27).fill(0)
            for(const char in strs[i]) {
                let character = strs[i][char]
                let alphabetNumber = character.charCodeAt(0) - 96
                holder[alphabetNumber] = holder[alphabetNumber] + 1

            }
            let key = holder.join(',')
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
