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
        for(let i = 0; i < s1.length;i++) {
            let index = s2[i].charCodeAt(0) - 97
            s2Arr[index]++
        }
        console.log(s1Arr, s2Arr)
        let matches = 0 
        for (let i = 0; i < s1Arr.length;i++) {
            if (s1Arr[i] == s2Arr[i]) {
                matches++ 
            }
        }
        console.log(matches)
        let l = 0
        for(let r = s1.length ; r < s2.length; r++) {
            let toAdd = s2[r].charCodeAt(0) - 97
            if (s2Arr[toAdd] == s1Arr[toAdd]) {
                matches--
            }
            s2Arr[toAdd]++
            if (s2Arr[toAdd] == s1Arr[toAdd]) {
                matches++
            }

            while(r - l >= s1.length) {
                let toDrop = s2[l].charCodeAt(0) - 97
                if (s2Arr[toDrop] == s1Arr[toDrop]) {
                    matches--
                }
                s2Arr[toDrop]--
                if (s2Arr[toDrop] == s1Arr[toDrop]) {
                    matches++
                }
                l++
            }
            if(matches == 26) {
                return true
            }
            console.log(l, r, matches, s2Arr)
        }
        return false

    }
}
