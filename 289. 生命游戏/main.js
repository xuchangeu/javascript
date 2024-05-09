/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let result = []
    for (let i=0; i<board.length; i++) {
        result[i] = [];
        for(let j=0; j<board[i].length; j++) {
            let count = getNeighbourCell(board, i, j);
            console.log(i,j, count);
            if(count < 2) {
                result[i][j] = 0
            }else if((count == 2 || count == 3) && board[i][j] == 1) {
                result[i][j] = 1;
            }else if(count > 3) {
                result[i][j] = 0;
            }else if(count == 3 && board[i][j] == 0) {
                result[i][j] = 1;
            }else {
                result[i][j] = board[i][j];
            }

        } 
    }

    return result;
};


var getNeighbourCell = function(board, i, j){
    let si = i-1,
        ei = i+1,
        sj = j-1,
        ej = j+1;
    
    let count = 0;
    for(let k=si; k<=ei; k++) {
        for(let l=sj; l<=ej; l++) {
            if((k>=0 && k<board.length) && (l>=0 && l<board[k].length)){
                if(!(k==i && l==j) && board[k][l] == 1) {
                    count ++;
                }
            }        
        }
    }

    return count;
}

let board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
gameOfLife(board)



let arr = [1,2,3,4,5,6];
for(let i=0;i < arr.length; i++) {
    console.log(arr[i]);
    if(i == 2 || i == 4) {
        arr.splice(i,1);
    }

}