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

                let x = String(Math.floor(j / 3))
                let y = String(Math.floor(i / 3))
                square[x + y] = square[x + y] || new Set()
                row[j] = row[j] || new Set()
                column[i] = column[i] || new Set()

                // Check Squares
                let currSquare = square[x + y]
                if(currSquare.has(num)) {
                    return false
                } else {
                    currSquare.add(num)
                }

                // Check Rows
                let currX = row[j]
                if(currX.has(num)) {
                    return false
                } else {
                    currX.add(num)
                }

                // Check Columns
                let currY = column[i]
                if(currY.has(num)) {
                    return false
                } else {
                    currY.add(num)
                }

                

            }
        }
    return true
    }
}
