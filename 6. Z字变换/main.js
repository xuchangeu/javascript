


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let arr = new Array()
    for(let i=0; i < numRows; i++) {
        arr[i] = new Array()
    }
    //Z 字能容纳的字符数量, 包含 Z 的最左列和中间 N 列
    let zContain = numRows + (numRows - 2)
    let zColumn = numRows - 1
    if (zContain <= 0) {
        zContain = 1
    }

    if (zColumn <= 0) {
        zColumn = 1
    }
    for(let i=0; i < s.length ;i ++) {
        //计算 y 坐标,  y 坐标分两种情况，在Z左列，在Z中间 N 列
        //console.log(s[i], left, zContain)
        //在第几个 Z 中
        let zIndex = Math.floor((i)/zContain)
        
        //计算x
        let x = 0
        let y = 0
        if (i%zContain < numRows) {
            x = zIndex * zColumn
            y = i%zContain    
        }else {
            x = zIndex * zColumn + ((i+(numRows -1)) % zContain)
            y = numRows - x%(zColumn) -1
        }
        console.log(s[i], "-->" , x,  "," , y)
        arr[y][x] = s[i]
    }


    let result = ""
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(!!arr[i][j]) {
                result += arr[i][j]
            }
        }
    }
    return result
};





// convert("PAYPALISHIRING", 3)
// console.log("-----------------------------------")
// convert("PAYPALISHIRING", 4)
console.log(convert("A",1))