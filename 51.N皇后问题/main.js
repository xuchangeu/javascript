/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let board = Array.from({length:n},()=>{return Array(n+1).join(".")});
    let ans = [];


    function backtrack(row, board, ans){
        if(row == board.length) {
            ans.push(copyArr(board));
        }else{
            for(let col=0; col<n; col++) {
                if(!isValid(board, row, col)) continue;

                //choose 
                // board[row][col] = 'Q';
                board[row] = board[row].substring(0,col) + "Q" + board[row].substring(col+1);
                backtrack(row+1, board, ans);

                //unchoose
                // board[row][col] = '.';
                board[row] = board[row].substring(0,col) + "." + board[row].substring(col+1);
            }
        }
    }

    function copyArr(arr){
        let copy = [];
        for(let i=0; i<arr.length; i++){
            copy.push(arr[i].slice())
        }
        return copy;
    }

    function isValid(board, row, col) {
        for(let i=0; i<n; i++)
            if (board[i][col] == 'Q') return false;

        for(let i=row-1, j=col+1; i>=0 && j<n; i--, j++)
            if (board[i][j] == 'Q') return false;

        for(let i=row-1, j=col-1; i>=0 && j>=0; i--, j--)
            if(board[i][j] == 'Q') return false;
        
        return true;
    }

    backtrack(0, board, ans);
    console.log(ans);
    return ans;
};


solveNQueens(4);