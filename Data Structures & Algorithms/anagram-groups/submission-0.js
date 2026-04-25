class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let knownAnagrams = {}
        let result = []
        for (let i = 0; i < strs.length; i++) {
            let currString = strs[i]
            let sortedString = currString.split('').sort().join('')
            if (sortedString in knownAnagrams) {
                knownAnagrams[sortedString].push(currString)
            } else {
                knownAnagrams[sortedString] = [currString]
            }
        }
        for (let key in knownAnagrams) {
            result.push(knownAnagrams[key])
        }
        return result
        
    }
}
