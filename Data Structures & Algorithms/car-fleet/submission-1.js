class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pxs = {}
        let stack = []
        let lastFleetEta = 0
        let res = 0
        for(let i = 0; i< position.length; i++) {
            pxs[position[i]] = speed[i]
        }
        position.sort((a,b) => a-b)
        for(let i = 0; i< position.length; i++) {
            let currP = position[i]
            let currS = pxs[position[i]]
            let eta = Math.ceil((target - currP) / currS)
            stack.push(eta)
        }
        console.log(position, stack)
        while(stack.length > 0) {
            let popped = stack.pop()
            if (popped > lastFleetEta) {
                res++
            }
            lastFleetEta = popped
        }
        return res
    }
}
