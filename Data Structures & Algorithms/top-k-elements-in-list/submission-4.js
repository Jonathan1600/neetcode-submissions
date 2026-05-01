class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let frequency = {}
        let res = []
        for (const num of nums) {
            frequency[num] = (frequency[num] || 0) + 1
        }
        let arr = new Array(nums.length + 1)
        for (const key in frequency) {
            arr[frequency[key]] = arr[frequency[key]] || []
            arr[frequency[key]].push(key)
        }

        for (let i = arr.length - 1; i >= 0; i--) {
            if(arr[i]){
                for (const n of arr[i]) {
                    res.push(n)
                    if (res.length == k) {
                        return res
                    }
                }
            }
        }
    }
}
