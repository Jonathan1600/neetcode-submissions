class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let right = heights.length - 1
        let max = 0
        while(left < right) {
            let lh = heights[left]
            let lr = heights[right]
            let currMax = (right - left) * Math.min(lh, lr)

            max = Math.max(max, currMax)
            if(lh > lr) {
                right--
            } else {
                left++
            }
        }
        return max
        
    }
}
