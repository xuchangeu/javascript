var updateBoard = function(board, click) {
    //递归终止

    if(board[click[0]][click[1]] == "M") {
        board[click[0]][click[1]] == "X";
        return board;
    }
    
    let memo = Array.from({length : board.length}, ()=>{return []})
    for(let i=0; i<memo.length; i++) {
        memo[i] = Array.from({length: board[0].length}).fill(0);
    }

    var recursive = function(board, x, y) {
        //递归终止
        //超出边界
        if(x < 0 || y < 0 || x > board.length - 1 || y > board[0].length - 1){
            return;
        }
        console.log(x, y);
        if(memo[x][y] == 1) {
            return;
        }
        memo[x][y] = 1;

        if(board[x][y] == "M") {
            return;
        }

        
        let mc = mineCount(board, x, y);
        if(mc == 0) {
            board[x][y] = "B";
        }else {
            board[x][y] = mc.toString();
            return;
        }

        //不相邻地雷
        
        recursive(board, x-1, y-1);
        recursive(board, x-1, y);
        recursive(board, x-1, y+1);
        recursive(board, x, y-1);
        recursive(board, x, y+1);
        recursive(board, x+1, y-1);
        recursive(board, x+1, y);
        recursive(board, x+1, y+1);
    }

    var mineCount = function(board, x, y){
        let count = 0;
        for(let i = x-1; i <= x+1; i++) {
            for(let j= y-1; j <= y+1; j++) {
                if(i == x && j == y) {
                    continue;
                }

                if(board[i] && board[i][j] && board[i][j] == "M") {
                    count ++;
                }

            }
        }
        return count;
    }

    recursive(board, click[0], click[1]);
    return board;
};


let board = [["B","1","E","1","B"],["B","1","M","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]],
    click = [1,2];

console.log(updateBoard(board, click));