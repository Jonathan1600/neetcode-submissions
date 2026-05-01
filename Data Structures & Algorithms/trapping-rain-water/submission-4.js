class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let arr = []
        let max = 0
        let maxWater = 0
        for(let i = 0; i < height.length; i++) {
            arr.push(max)
            max = Math.max(max, height[i])
        }
        max = 0
        for(let i = height.length - 1; i >= 0; i--) {
            let water = Math.min(max, arr[i]) - height[i]
            maxWater += water > 0 ? water : 0
            max = Math.max(max, height[i])
        }
        return maxWater
    }
}
