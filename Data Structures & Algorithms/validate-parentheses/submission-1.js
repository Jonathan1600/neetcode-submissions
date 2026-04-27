class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const stringArr = s.slice("")
        const keys = {
            "]": "[",
            ")": "(",
            "}": "{"
        }
        for (let i = 0; i < stringArr.length; i++) {
            let char = stringArr[i]
            if (char in keys && stack.at(-1) == keys[char]) {
                stack.pop()
            } else if (char in keys) {
                return false
            }
            else {
                stack.push(char)
            }
        }
        return true
    }
}
