class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let pre = []
        let sum = 1
        for (let i = 0; i < nums.length; i++) {
            let pushingNum = i == 0 ? nums[i] : pre[i - 1] * nums[i]
            pre.push(pushingNum == -0 ? 0 : pushingNum)
        }
        for (let i = nums.length - 1; i >= 0; i--) {
            if(pre[i - 1] == 0) {
                pre[i] = 0
            } else if(!pre[i - 1]) {
                pre[i] = sum
            } else {
                pre[i] = pre[i - 1] * sum
            }
            sum = sum*[nums[i]] 
        }
        return pre
    }
}
