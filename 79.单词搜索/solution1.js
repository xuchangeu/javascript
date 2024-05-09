/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    //考虑用回溯
    let m = board.length,
        n = board[0].length;
    let result = false;
    var backtrack = function(x, y, track){
        if(x < 0 || x > m - 1) {
            return false;
        }
        if(y < 0 || y > n - 1 ) {
            return false;
        }

        
        track.push(board[x][y]);
        let str = track.join("");
        // if(word.indexOf(str) == -1) {
        //     return false;
        // }

        if(track.length == word.length){
            if(str == word) {
                return true
            }
            return false;
        }

        
        
        
        result = backtrack(x-1, y, [...track]);
        if(!result){
            result = backtrack(x+1, y, [...track]);
        }

        if(!result){
            result = backtrack(x, y-1, [...track]);
        }
        
        if(!result) {
            result = backtrack(x, y+1, [...track]);
        }
        
        
        return result;
    }

    backtrack(0,0, []);

    return result;
};


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