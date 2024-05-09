/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let m = board.length,
        n = board[0].length;

    let result = false;
    let memo = new Map();
    /**
     * 
     * @param {int} x   
     * @param {int} y 
     * @param {int} index 
     */
    var trackback = function (x, y, track, index) {
        if(word.length == 1 && board[0][0] == word) {
            return true;
        }
        //寻找第一个元素，找不到就可以滚蛋了
        if (index == 1) {
            for (let i = 0; i < board.length; i++) {
                for (let j = 0; j < board[i].length; j++) {
                    memo.clear();
                    if (result) {
                        return result;
                    }
                    if (board[i][j] == word.substring(0, 1)) {
                        track = board[i][j];
                        if(word.length == 1 && track == word) {
                            return true;
                        }
                        memo.set(i.toString() + j.toString(), 1);
                        result = trackback(i-1, j, track, index + 1)
                        !result && (result = trackback(i+1, j, track, index + 1));
                        !result && (result = trackback(i, j-1, track, index + 1));
                        !result && (result = trackback(i, j+1, track, index + 1));
                    }
                }
            }
            return result;
        } else {
            if (x < 0 || x > m - 1) {
                return false;
            }
    
            if (y < 0 || y > n - 1) {
                return false;
            }

            if(memo.get(x.toString()+y.toString())){
                return;
            }

            

            track += board[x][y];

            if(track.length == word.length) {
                if(track == word) {
                    return true;
                }
                return false;
            }

            //没找对方向，滚蛋;
            if (word.indexOf(track) == -1) {
                return false;
            }

            memo.set(x.toString() + y.toString(), 1);
        
            result = trackback(x-1, y, track, index + 1);
            !result && (result = trackback(x+1, y, track, index + 1));
            !result && (result = trackback(x, y - 1, track, index + 1));
            !result && (result = trackback(x, y + 1, track, index + 1));
            
            //回溯
            memo.delete(x.toString() + y.toString());

            return result;
        }
    }

    return trackback(0, 0, "", 1)

}
// let board = [["b","b"],["a","b"],["b","a"]]



// console.log(exist(board, "ABCESEEEFS"));

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