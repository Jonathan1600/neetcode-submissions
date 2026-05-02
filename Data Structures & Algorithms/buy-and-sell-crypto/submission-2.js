class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (prices.length < 2) return 0
        let max = 0
        let l = 0
        for (let r = 1; r < prices.length; r++) {
            let curL = prices[l]
            let curR = prices[r]
            max = Math.max(max, (curR - curL))
            if (curL > curR) {
                l = r
            }
        }
        return max
    }
}
