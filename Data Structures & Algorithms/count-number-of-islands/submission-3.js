class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let numOfIslands = 0
        let maxY = grid.length
        let maxX = grid[0].length
        let dfs = (x,y) => {
            let currVal = grid[y][x]
            if(currVal == 1) {
                grid[y][x] = 0
                if(x + 1 < maxX) {
                    dfs(x + 1,y)
                }
                if(y + 1 < maxY) {
                    dfs(x,y + 1)
                }
                if(x - 1 >= 0 ) {
                    dfs(x - 1,y)
                }
                if(y - 1 >= 0) {
                    dfs(x,y - 1)
                }
            }
        }
        for(let i = 0; i < grid.length; i++) {
            let currentArray = grid[i]
            for(let j = 0; j < currentArray.length; j++) {
                let currVal = currentArray[j]
                if(currVal == 1) {
                    numOfIslands++
                    dfs(j,i)
                }
            }
        }

        return numOfIslands
    }
}

