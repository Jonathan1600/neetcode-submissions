class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let stringArr = s.toLowerCase().replace(/\W/g, '')
        console.log(stringArr)
        for (let i = 0; i < stringArr.length / 2; i++) {
            if (stringArr[i] != stringArr[stringArr.length - i - 1]) {
                return false
            }
        }
        return true
    }
}
