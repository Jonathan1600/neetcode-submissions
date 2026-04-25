class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numSet = new Set()
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i]
            if (numSet.has(num)) {
                return true
            } else {
                numSet.add(num)
            }
        }
        return false
    }
}
