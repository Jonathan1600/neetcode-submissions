class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let recursion = (l, r) => {
            let lNum = nums[l]
            let rNum = nums[r]
            let m = l + Math.floor((r - l)/2)
            let mNum = nums[m]
            if(l == 0 && lNum < rNum) {
                return lNum
            }
            if(l == r) {
                return lNum
            }
            if(mNum < nums[m - 1]) {
                return mNum
            }
            if(mNum >= lNum) {
                return recursion(m + 1, r)
            } else {
                return recursion(l, m - 1)
            }
        }
        return recursion(0, nums.length - 1)
    }
}
