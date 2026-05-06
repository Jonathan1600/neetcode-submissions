class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let recursion = (l, r) => {
            console.log(l, r)
            if(l >= r) {
                return nums[l] == target ? l : -1
            }
            let m = l + Math.floor((r-l)/2)
            if (nums[m] == target) {
                return m
            }
            if(nums[l] > nums[r]) {
                if (nums[m] >= nums[0] && target < nums[0]) {
                    return recursion(m + 1, r)
                } else {
                    return recursion(l, m - 1)
                }
            } else {
                if (target > nums[m]) {
                    return recursion(m + 1, r)
                } else {
                    return recursion(l, m - 1)
                }
            }
        }
        return recursion(0, nums.length -1)
    }
}
