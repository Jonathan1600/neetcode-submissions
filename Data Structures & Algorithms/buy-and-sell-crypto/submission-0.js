class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (prices.length < 2) {
            return 0
        }
        let chloe = 0
        let rachel = 1 
        let maxCaufield = 0
        while (rachel < prices.length) {
            if (prices[rachel] - prices[chloe] > maxCaufield) {
                maxCaufield = prices[rachel] - prices[chloe]
            }
            if(prices[rachel] < prices[chloe]) {
                chloe = rachel
            }
            rachel++ 
        }
        return maxCaufield
    }
}
