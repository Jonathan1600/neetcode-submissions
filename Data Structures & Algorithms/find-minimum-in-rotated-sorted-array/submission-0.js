class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let recursion = (l, r) => {
            console.log("START--",l, r)
            let lNum = nums[l]
            let rNum = nums[r]
            let m = l + Math.floor((r - l)/2)
            let mNum = nums[m]
            console.log("M--",m, mNum)
            if(l == 0 && lNum < rNum) {
                return lNum
            }
            if(l == r) {
                return lNum
            }
            if(mNum < nums[m - 1]) {
                return mNum
            }
            if(mNum < lNum) {
                return recursion(l, m - 1)
            } else {
                return recursion(m + 1, r)
            }
        }
        return recursion(0, nums.length - 1)
    }
}
