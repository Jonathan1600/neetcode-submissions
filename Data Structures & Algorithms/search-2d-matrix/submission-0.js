class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let recursion1 = (l, r) => {
            if (l>r) {
                return -1
            }
            let middle = l + Math.floor((r - l) / 2)
            let currArray = matrix[middle]
            let innerLeft = currArray[0]
            let innerRight = currArray[currArray.length - 1]
            if(innerLeft <= target && target <= innerRight) {
                return middle
            } else if (target > innerRight) {
                return recursion1(middle + 1, r)
            } else {
                return recursion1(l, middle)
            }

        }
        let indexOfArray = recursion1(0, matrix.length - 1)
        if(indexOfArray == -1) {
            return false
        }
        let chosenArray = matrix[indexOfArray]

        let recursion2 = (l, r, arr) => {
            if (l>r) {
                return -1
            }
            let middle = l + Math.floor((r - l) / 2)
            let curr = arr[middle]
            if(curr == target) {
                return middle
            } else if (target > curr) {
                return recursion2(middle + 1, r, arr)
            } else {
                return recursion2(l + 1, middle, arr)
            }
        }
        let targetIndex = recursion2(0, chosenArray.length - 1, chosenArray)
        return targetIndex == -1 ? false : true
    }
}
