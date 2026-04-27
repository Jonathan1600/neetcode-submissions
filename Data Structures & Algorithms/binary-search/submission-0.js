class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let recursion = (l, r) => {
            if(l >= r) {
                return -1
            }
            let middle = l + (Math.round((r - l) / 2))
            console.log(l, r, middle, nums[middle])
            if (nums[middle] == target) {
                return middle
            } else if (nums[middle] < target) {
                return recursion(middle + 1, r)
            } else {
                return recursion(l, middle - 1)
            }
        }
        return recursion(0, nums.length - 1)
    }
}
