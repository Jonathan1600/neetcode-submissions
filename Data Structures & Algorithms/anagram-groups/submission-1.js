class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let knownAnagrams = {}
        for (let i = 0; i < strs.length; i++) {
            let currString = strs[i]
            let sortedString = currString.split('').sort().join('')
            if (sortedString in knownAnagrams) {
                knownAnagrams[sortedString].push(currString)
            } else {
                knownAnagrams[sortedString] = [currString]
            }
        }
        
        return Object.values(knownAnagrams)
        
    }
}
