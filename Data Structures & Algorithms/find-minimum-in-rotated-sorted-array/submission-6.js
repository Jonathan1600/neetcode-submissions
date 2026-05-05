class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let recursion = (l, r) => {
            let lNum = nums[l]
            let rNum = nums[r]
            if((l == 0 && lNum < rNum) || l == r) return lNum

            let m = l + Math.floor((r - l)/2)
            let mNum = nums[m]
            if(mNum < nums[m - 1]) return mNum
            if(mNum >= nums[0]) return recursion(m + 1, r)
            return recursion(l, m - 1)
        }
        return recursion(0, nums.length - 1)
    }
}
