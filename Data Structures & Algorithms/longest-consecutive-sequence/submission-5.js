class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let hashNums = new Set(nums)
        let max = 0
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i]
            if(!hashNums.has(num - 1)) {
                let counter = 0
                while(hashNums.has(num)) {
                    counter++
                    max = Math.max(counter, max)
                    num++
                }
            }
        }
        return max

    }
}
