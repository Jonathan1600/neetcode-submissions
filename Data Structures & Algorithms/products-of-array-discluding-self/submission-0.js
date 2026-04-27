class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let sum = 1
        let maxNonZero = 1
        let resArray = []
        for(let i = 0; i < nums.length; i++) {
            let num = nums[i]
            sum = sum * num
            maxNonZero = num == 0 ? maxNonZero * 1:maxNonZero * num
        }

        for(let i = 0; i < nums.length; i++) {
            let num = nums[i]
            let numToAdd = num == 0 ? maxNonZero : sum/num
            resArray.push(numToAdd)
        }
        return resArray
    }
}
