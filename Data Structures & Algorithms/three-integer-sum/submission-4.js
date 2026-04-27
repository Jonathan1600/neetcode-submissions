class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const numsArr = nums.sort()
        const seen = {}
        const response = []
        const recursion = (l, r, m, arr) => {
            let result = arr[m] + arr[l] + arr[r]
            if (l >= m || r <= m) {
                return []
            }
            if (result == 0) {
                return [numsArr[m], numsArr[l], numsArr[r]]
            } else if (result < 0) {
                return recursion(l+1, r, m, arr)
            } else {
                return recursion(l, r - 1, m, arr)
            }
        }
        while(numsArr.length >= 3) {
            let i = 0   
            let j = Math.trunc(numsArr.length / 2)
            let k = numsArr.length - 1

            console.log(numsArr)
            let recursedArr = recursion(i, k, j, numsArr)
            if (recursedArr.length > 0) {
                console.log(recursedArr.toString(), recursedArr.toString() in seen, seen)
                if (!(recursedArr.toString() in seen)) {
                    response.push(recursedArr)
                    seen[recursedArr.toString()] = 0
                }
            }

            numsArr.splice(j,1)
        }
        return response
    }
}
