class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const recursion = (l, r) => {
            let current = numbers[l] + numbers[r]
            if (l == r) {
                return false
            }
            if (current == target) {
                return [l + 1, r + 1]
            } else if (current < target) {
                return recursion(l + 1, r)
            } else {
                return recursion(l, r - 1)
            }
        }

        return recursion(0, numbers.length - 1)
    }
}
