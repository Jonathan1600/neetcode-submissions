class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = {}
        for (let i = 0; i < nums.length; i++) {
            let targetNum = target - n
            let n = nums[i]
            if (targetNum in seen) {
                return [seen[targetNum], i]
            }
            seen[n] = i
        }
    }
}
