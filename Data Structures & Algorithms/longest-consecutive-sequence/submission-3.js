class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let allNums = new Set()
        let seenNums = new Set()
        let max = 0
        for(let i = 0; i < nums.length; i++) {
            let num = nums[i]
            if(allNums.has(num)) {
                continue
            }
            allNums.add(num)
        }
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i]
            if(seenNums.has(num)) {
                continue
            }
            seenNums.add(num)
            if(allNums.has(num + 1) || allNums.has(num - 1)) {
                max++
            }
        }
        return nums.length == 0 ? 0 : Math.max(max, 1)
    }
}
