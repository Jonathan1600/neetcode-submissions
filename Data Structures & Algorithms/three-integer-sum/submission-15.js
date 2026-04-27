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
        let lastI
        const recursion = (l, r, start, arr) => {
            let result = arr[start] + arr[l] + arr[r]
            if ( r <= l) {
                return
            }
            if (result == 0) {
                returnArr.push([arr[start], arr[l], arr[r]])
                recursion(l + 1, r - 1, start, arr)
            } else if (result < 0) {
                recursion(l+1, r, start, arr)
            } else {
                recursion(l, r - 1, start, arr)
            }
        }
        while(i < numsArr.length - 2) {  
            if (!(lastI == numsArr[i])) {
                returnArr = []
                let j = i + 1
                let k = numsArr.length - 1

                recursion(j, k, i, numsArr)
                if (returnArr.length > 0) {
                    for (let i = 0; i < returnArr.length; i++) {    
                        // if (!(returnArr[i].toString() in seen)) {
                        //     seen[returnArr[i].toString()] = 0
                        // }
                        response.push(returnArr[i])
                    }
                }
            } 
            lastI = numsArr[i]
            i++
        }
        return response
    }
}
