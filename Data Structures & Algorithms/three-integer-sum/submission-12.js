class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const numsArr = nums.sort((a,b) => a - b)
        const response = []
        const seen = {}
        let returnArr = []
        let i = 0 
        const recursion = (l, r, start, arr) => {
            let result = arr[start] + arr[l] + arr[r]
            if ( r <= l) {
                return
            }
            if (result == 0) {
                returnArr.push([arr[start], arr[l], arr[r]])
            } else if (result < 0) {
                recursion(l+1, r, start, arr)
            } else {
                recursion(l, r - 1, start, arr)
            }
        }
        while(i < numsArr.length - 2) {  
            returnArr = []
            let j = i + 1
            let k = numsArr.length - 1

            recursion(j, k, i, numsArr)
            console.log(numsArr, i, j ,k, returnArr)
            if (returnArr.length > 0) {
                // console.log(recursedArr.toString(), recursedArr.toString() in seen, seen)
                if (!(returnArr.toString() in seen)) {
                    seen[returnArr.toString()] = 0
                    response.push(returnArr)
                }
            }

            i++
        }
        return response
    }
}
