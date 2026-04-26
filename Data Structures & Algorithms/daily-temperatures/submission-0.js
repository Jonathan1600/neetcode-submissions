class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = []
        for (let i = 0; i < temperatures.length; i++) {
            let start = temperatures[i]
            for (let j = i; j < temperatures.length; j++) {
                let end = temperatures[j]
                if(start < end) {
                    result.push(j - i)
                    break
                }
                if(j == temperatures.length - 1) {
                    result.push(0)
                    break
                }
            }
        }
        return result
    }
}
