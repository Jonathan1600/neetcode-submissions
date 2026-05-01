class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxL = 0
        let maxR = 0
        let l = 0
        let r = height.length - 1 
        let maxWater = 0
        while(l < r) {
            let lh = height[l]
            let rh = height[r]
            let water
            if(lh > rh) {
                water = Math.min(maxR, maxL) - rh 
                r--
            } else {
                water = Math.min(maxR, maxL) - lh
                l++
            }
            maxWater += water > 0 ? water : 0
            maxL = Math.max(maxL, lh)
            maxR = Math.max(maxR, rh)
        }
        return maxWater
    }
}
