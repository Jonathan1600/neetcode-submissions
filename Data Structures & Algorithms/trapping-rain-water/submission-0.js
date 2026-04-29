class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0
        let right = 0
        let maxWater = []
        for (let i = 0; i < height.length; i++) {
            right++
            let leftVal = height[left]
            let rightVal = height[right]
            console.log(leftVal, rightVal)
            if(rightVal <= leftVal) {
                let count = 0
                let minWall = Math.min(leftVal, rightVal)
                for (let j = left + 1; j < right; j++) {
                    count += minWall - height[j]
                }
                console.log("Count --", count)
                maxWater.push(count >= 0 ? count : 0)
                
            } 

            if(rightVal >= leftVal) {
                left = right
            }
        }
        console.log(maxWater)
        return maxWater.reduce((a, b) => a + b, 0)
    }
}
