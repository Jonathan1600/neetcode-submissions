class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const stringArr = s.slice("")
        if (stringArr.length % 2 != 0) {
            return false
        }
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
        return stack.length == 0
    }
}
