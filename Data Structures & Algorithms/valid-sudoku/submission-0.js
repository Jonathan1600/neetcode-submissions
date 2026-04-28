class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // Coordinates x = Math.floor(x / 3), y = Math.floor(y / 3)
        let square = {}
        let column = {}
        let row = {}
        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board.length; j++) {
                let num = board[i][j]

                if (num == '.') {
                    continue
                }
                if (num > 9 || num < 0) {
                    return false
                }

                let x = Math.floor(j / 3)
                let y = Math.floor(i / 3)
                square[x + '.' + y] = square[x + '.' + y] || {}
                row[j] = row[j] || {}
                column[i] = column[i] || {}

                let currSquare = square[x + '.' + y]
                let currX = row[j]
                let currY = column[i]

                currSquare[num] = currSquare[num] || 0
                currX[num] = currX[num] || 0
                currY[num] = currY[num] || 0

                if(currSquare[num] > 0) {
                    return false
                }
                currSquare[num]++
                
                if(currX[num] > 0) {
                    return false
                }
                currX[num]++

                if(currY[num] > 0) {
                    return false
                }
                currY[num]++
            }
        }
    return true
    }
}
