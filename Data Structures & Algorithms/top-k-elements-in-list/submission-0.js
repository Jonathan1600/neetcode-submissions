class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequency = {}
        for (let i = 0; i < nums.length; i++) {
           let num = nums[i]
           if (!(num in frequency)) {
            frequency[num] = 0
           } 
           frequency[num] += 1
        }
        let r = Object.entries(frequency)
        r.sort((a, b) => b[1] - a[1])
        r = r.slice(0, k).map((x) => x[0])
        return r
    }
}
