class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let s1Arr = new Array(26).fill(0)
        let s2Arr = new Array(26).fill(0)
        for (const char of s1) {
            let index = char.charCodeAt(0) - 97
            s1Arr[index]++
        }
        for(const char of s2) {
            let index = char.charCodeAt(0) - 97
            s2Arr[index]++
        }
        console.log(s1Arr, s2Arr)
        let matches = 0 
        for (let i = 0; i < s1Arr.length;i++) {
            if (s1Arr[i] == s2Arr[i]) {
                matches 
            }
        }

    }
}
