class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let pre = []
        let pos = []
        let res = []
        for (let i = 0; i < nums.length; i++) {
            let pushingNum = i == 0 ? 1 : pre[i - 1] * nums[i - 1]
            pos.push(1)
            pre.push(pushingNum)
        }
        for (let i = nums.length - 2; i >= 0; i--) {
            pos[i] = pos[i + 1] * nums[i + 1]
        }
        for (let i = 0; i < nums.length; i++) {
            res.push(pos[i] * pre[i])
        }
        return res
    }
}
