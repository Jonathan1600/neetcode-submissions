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
                console.log(character, alphabetNumber)
                holder[alphabetNumber] = holder[alphabetNumber] + 1
            }
            let key = holder.join('')
            console.log(key)
            if (!(key in frequency)) {
                frequency[key] = []
            }
            console.log(frequency)
            frequency[key].push(strs[i])
        }
        console.log(frequency)

        for (const key in frequency) {
            res.push(frequency[key])
        }
        return res
    }
}
