class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = []
        for (let i = 0; i < temperatures.length; i++) {
            result.push(0)
        }
        let stack = []
        for (let i = 0; i < temperatures.length; i++) {
            let curr = temperatures[i]
            while(stack.length > 0 && stack[stack.length - 1][0] < curr) {
                let pop = stack.pop()
                result[pop[1]] = i - pop[1]
            }
            stack.push([curr, i])
        }
        return result
    }
}
