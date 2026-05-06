class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let set = new Set()
        let l = 0
        for (let r = 0; r < nums.length; r++) {
            while (r - l >= k) {
                l++
                set.delete(nums[l])
            }
            if (set.has(nums[r])) {
                return true
            } else {
                set.add(nums[r])
            }
        }
        return false
    }
}
