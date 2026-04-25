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
            if ((target - n) in seen) {
                return [seen[target - n], i]
            }
            seen[n] = i

        }
    }
}
