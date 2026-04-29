class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let horizontalSum = 0
        let height = 0
        let max = 0
        let res = 0
        for (let i = 0; i < heights.length; i++) {
            max = Math.max(max, heights[i]) 
        }
        while(height < max) {
            height++
            horizontalSum = 0
            // console.log("START ---", res, horizontalSum ,height, heights)
            for (let i = 0; i < heights.length; i++) {
                horizontalSum++
                if(heights[i] <= 0) {
                    horizontalSum--
                    // console.log("h ---",horizontalSum, height,)
                    let box = horizontalSum * height
                    res = Math.max(box, res)
                    horizontalSum = 0
                }else if(i == heights.length - 1) {
                    // console.log("h ---",horizontalSum, height,)
                    let box = horizontalSum * height
                    res = Math.max(box, res)
                    horizontalSum = 0
                }
                heights[i]--
            }
            // console.log("END ---", res,horizontalSum, height,heights)
        }
        return res
    }
}
