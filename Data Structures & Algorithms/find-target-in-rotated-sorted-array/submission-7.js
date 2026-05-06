class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let recursion = (l, r) => {
            if(l >= r) {
                return nums[l] == target ? l : -1
            }
            let m = l + Math.floor((r-l)/2)
            if (nums[m] == target) {
                return m
            }

            if (nums[m] >= nums[0]) {
                if (target < nums[0] || target > nums[m]) {
                  return recursion(m + 1, r)  
                } else {
                    return recursion(l, m - 1)
                }
            } else {
                if (target < nums[m] || target > nums[nums.length - 1]) {
                    return recursion(l, m - 1)
                } else {
                    return recursion(m+1,r)
                }
            }
        }
        return recursion(0, nums.length -1)
    }
}
