class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const polishStack = []
        for (let i = 0; i < tokens.length; i++) {
            let token = tokens[i]
            if (token == '+') {
                let pLen = polishStack.length
                let result = Math.trunc(Number(polishStack[pLen - 2]) + Number(polishStack[pLen -1]))
                polishStack.pop()
                polishStack.pop()
                polishStack.push(Number(result))
            } else if (token == '-') {
                let pLen = polishStack.length
                let result = Math.trunc(Number(polishStack[pLen - 2]) - Number(polishStack[pLen -1]))
                polishStack.pop()
                polishStack.pop()
                polishStack.push(Number(result))
            } else if (token == '/') {
                let pLen = polishStack.length
                let result = Math.trunc(Number(polishStack[pLen - 2]) / Number(polishStack[pLen -1]))
                polishStack.pop()
                polishStack.pop()
                polishStack.push(Number(result))
            } else if (token == '*') {
                let pLen = polishStack.length
                let result = Math.trunc(Number(polishStack[pLen - 2]) * Number(polishStack[pLen -1]))
                polishStack.pop()
                polishStack.pop()
                polishStack.push(Number(result))
            } else{
                polishStack.push(Number(token))
            }
            console.log(polishStack)
        }
        return polishStack[polishStack.length - 1]
    }
}
