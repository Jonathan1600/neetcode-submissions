class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const polishStack = []
        const operands = new Set(['+', '-', '*', '/'])
        for (let i = 0; i < tokens.length; i++) {
            let token = tokens[i]
            if (operands.has(token)) {
                let pLen = polishStack.length
                let result = eval(polishStack[pLen - 2] + token + polishStack[pLen -1])
                polishStack.push(result)
            } else {
                polishStack.push(token)
            }
        }
        return polishStack[polishStack.length - 1]
    }
}
