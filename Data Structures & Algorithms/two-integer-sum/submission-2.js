class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = {}
        for (let i = 0; i < nums.length; i++) {
            let n = nums[i]
            let targetNum = target - n
            if (targetNum in seen) {
                return [seen[targetNum], i]
            }
            seen[n] = i
        }
    }
}
