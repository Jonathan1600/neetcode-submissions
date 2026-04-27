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
            if (i < stringArr.length / 2) {
                stack.push(char)
            } else {
                if(stack.at(-1) == keys[char]) {
                    stack.pop()
                } else {
                    return false
                }
            }
        }
        return true
    }
}
