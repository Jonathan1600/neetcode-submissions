class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let mn = 0
        let mx = 0
        let minTime = Infinity
        let minNumber = 0
        for (let i = 0; i<piles.length;i++) {
            let num = piles[i]
            mn = Math.min(num, mn)
            mx = Math.max(num, mx)
        }

        let recursion = (left,right) => {
            if(left > right) {
                return
            }
            let mid = left + Math.floor((right-left) / 2)
            let totalTime = 0
            for (let i = 0; i<piles.length;i++) {
                if(totalTime > h) {
                    break
                }
                let num = piles[i]
                let timeToEat = Math.ceil(num / mid)
                totalTime += timeToEat
            }
            if(totalTime < minTime) {
                minTime = totalTime
                minNumber = mid
            }
            minTime = Math.min(minTime, totalTime)
            if(totalTime > h) {
                recursion(mid + 1, right)
            } else {
                recursion(mid, right - 1)
            }
        }
        recursion(mn, mx)
        return minNumber
    }
}
