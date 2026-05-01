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
        while(l <= r) {
            let lh = height[l]
            let rh = height[r]
            console.log("---", lh, maxL, rh, maxR)
            if(lh > rh) {
                let water = Math.min(maxR, maxL) - rh 
                maxWater += water > 0 ? water : 0
                maxL = Math.max(maxL, lh)
                maxR = Math.max(maxR, rh)
                r--
            } else {
                let water = Math.min(maxR, maxL) - lh
                maxWater += water > 0 ? water : 0
                maxR = Math.max(maxR, rh)
                maxL = Math.max(maxL, lh)
                l++
            }
            console.log(maxWater)
        }
        return maxWater

    }
}
