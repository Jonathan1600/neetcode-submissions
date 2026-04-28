class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let response = []
        let product = 1
        for (let i = 0; i < nums.length; i++) {
            response[i] = product
            product *= nums[i]
        }
        product = 1
        for (let i = nums.length - 1; i >= 0; i--) {
            response[i] *= product
            product *= nums[i]
        }
        return response
    }
}
