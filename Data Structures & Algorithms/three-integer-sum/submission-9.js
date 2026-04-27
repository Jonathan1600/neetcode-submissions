class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const numsArr = nums.sort((a,b) => a - b)
        const response = []
        let i = 0 
        const recursion = (l, r, start, arr) => {
            // console.log(start, arr[start])
            let result = arr[start] + arr[l] + arr[r]
            if ( r <= l) {
                return []
            }
            if (result == 0) {
                return [arr[start], arr[l], arr[r]]
            } else if (result < 0) {
                return recursion(l+1, r, start, arr)
            } else {
                return recursion(l, r - 1, start, arr)
            }
        }
        while(i < numsArr.length - 2) {  
            let j = i + 1
            let k = numsArr.length - 1

            let recursedArr = recursion(j, k, i, numsArr)
            console.log(numsArr, i, j ,k, recursedArr)
            if (recursedArr.length > 0) {
                // console.log(recursedArr.toString(), recursedArr.toString() in seen, seen)
                // if (!(recursedArr.toString() in seen)) {
                //     seen[recursedArr.toString()] = 0
                // }
                    response.push(recursedArr)
            }

            i++
        }
        return response
    }
}
