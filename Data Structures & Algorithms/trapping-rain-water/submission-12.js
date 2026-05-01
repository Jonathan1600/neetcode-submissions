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
            if(lh > rh) {
                let water = Math.min(maxR, maxL) - rh 
                maxWater += water > 0 ? water : 0
                r--
            } else {
                let water = Math.min(maxR, maxL) - lh
                maxWater += water > 0 ? water : 0
                l++
            }
            maxL = Math.max(maxL, lh)
            maxR = Math.max(maxR, rh)
        }
        return maxWater
    }
}
