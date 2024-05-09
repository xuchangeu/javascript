/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let m = board.length,
        n = board[0].length;

    let result = false;
    //let memo = new Map();
    let memo = Array.from({length : m}, ()=>{
        return Array.from({length : n}).fill(0);
    })
    /**
     * 
     * @param {int} x   
     * @param {int} y 
     * @param {int} index 
     */
    var trackback = function (x, y, index) {
        if(index == word.length) {
            return true;
        }
        
        if (x < 0 || x > m - 1 || y < 0 || y >  n - 1) {
            return false;
        }

        if(memo[x][y]){
            return false;
        }

        if (word[index] != board[x][y]) {
            return false;
        }

        memo[x][y] = 1;
    
        result = trackback(x-1, y, index + 1);
        !result && (result = trackback(x+1, y, index + 1));
        !result && (result = trackback(x, y - 1,index + 1));
        !result && (result = trackback(x, y + 1, index + 1));
        
        //回溯
        memo[x][y] = 0;

        return result;
        
    }


    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let result = trackback(i, j, 0)
            if(result) {
                return true;
            }
        }
    }

    return false;
}



let board = [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]
];

console.log(exist(board, "ABCCED"));



let board2 = [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]
]

console.log(exist(board2, "SEE"));


let board3 = [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]
]

console.log(exist(board3, "ABCB"));


let board4 = [
    ["A","A","A","A","A","A"],
    ["A","A","A","A","A","A"],
    ["A","A","A","A","A","A"],
    ["A","A","A","A","A","A"],
    ["A","A","A","A","A","A"],
    ["A","A","A","A","A","A"]
]


console.log(exist(board4, "BAAAAAAAAAAAAAA"));


let board5 = [
    ["a"]
]

console.log(exist(board5, "a"));

