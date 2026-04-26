class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (prices.length < 2) {
            return 0;
        }
        let left = 0;
        let right = 1;
        let max = 0;
        while (right < prices.length) {
            if (prices[right] - prices[left] > max) {
                max = prices[right] - prices[left];
            }
            if (prices[right] < prices[left]) {
                left = right;
            }
            right++;
        }
        return max;
    }
}
