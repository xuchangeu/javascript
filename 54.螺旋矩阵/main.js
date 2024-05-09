/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let a = getMarkMatrix(matrix)
    let mark = a[0];
    let m = a[1],
        n = a[2];
    let result = [];
    let direction = [[0,1],[1,0],[0,-1],[-1,0]];

    let i = 0,
        j = 0;
    let di = 0;
    while(result.length < m * n ) {
        result.push(matrix[i][j]);
        mark[i][j] = 1;

        let ni = i+direction[di%4][0];
        let nj = j+direction[di%4][1]; 

        //判断越界
        if (nj < 0 || nj >= n || ni < 0 || ni >= m) {
            di ++;
            i = i+direction[di%4][0];
            j = j+direction[di%4][1];
        }else if(mark[ni][nj] == 1) {
            di ++;
            i = i+direction[di%4][0];
            j = j+direction[di%4][1];
        }else {
            i = ni;
            j = nj;
        }
    }

    return result;
};

var getMarkMatrix = function(matrix) {
    let mark = []
    let m = 0,
        n = 0;
    for(let i=0; i<matrix.length; i++) {
        let arr = []
        m ++;
        n = 0;
        for(let j=0; j<matrix[i].length; j++) {
            arr.push(0);
            n ++;
        }
        mark.push(arr)
    }
    return [mark, m, n];
}






let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
console.log(spiralOrder(matrix));