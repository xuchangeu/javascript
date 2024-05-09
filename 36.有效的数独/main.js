/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let i=0; i<9; i++) {
        for(let j=0; j<9; j++) {
            if(board[i][j] != ".") {
                let result = uniqueInLine(board, i, j) && uniqueInCol(board, i, j) && uniqueInPalace(board, i, j);
                if (!result) {
                    return false;
                }
            }
        }
    }
    return true;
};

var uniqueInLine = function(board, i, j) {
    for(let k=0; k < 9; k++) {
        if(k != j && board[i][j] == board[i][k]) {
            console.log("return in uniqueInLine", i, j);
            return false;
        }
    }
    return true;
}

var uniqueInCol = function(board,i,j) {
    for(let k=0; k<9; k++) {
        if(k != i && board[i][j] == board[k][j]) {
            console.log("return in target", i, j);
            return false;
        }
    }
    return true;
}

var uniqueInPalace = function(board,i,j) {
    let xStrat = i - i % 3;
    let yStart = j - j % 3;
    for (let k=xStrat; k<xStrat + 3; k++) {
        for (let l=yStart; l<yStart + 3; l++) {
            if((k != i || l != j) && board[i][j] == board[k][l]) {
                console.log("return in uniqueInPalace", i, j, k, l);
                return false;
            }
        }
    }
    return true;
}


let board = [
        ["5","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
    ]
// isValidSudoku(board);
uniqueInPalace(board, 2, 7)