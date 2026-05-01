class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const nHashmap = {} 
        for (let i=0; i<nums.length;i++) {
            nHashmap[nums[i]] = i
        }

        for (let i=0; i<nums.length;i++) {
            if ((target - nums[i]) in nHashmap) {
                return [i, nHashmap[target-nums[i]]]
            }
        }
        return []
    }
}
