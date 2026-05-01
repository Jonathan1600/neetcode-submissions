class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let arr = []
        let max = 0
        for(let i = 0; i < height.length; i++) {
            arr.push([max])
            max = Math.max(max, height[i])
        }
        max = 0
        for(let i = height.length - 1; i >= 0; i--) {
            console.log(i)
            arr[i].push(max)
            arr[i].push(Math.min(arr[i][1], arr[i][0]))
            max = Math.max(max, height[i])
        }
        max = 0
        for(let i = 0; i < height.length; i++) {
            let water = arr[i][2]- height[i]
            max += water > 0 ? water : 0
        }
        return max
    }
}
