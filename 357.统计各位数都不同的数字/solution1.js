



/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    if(n == 0) {
        return 1;
    }
    
    let visited = Array.from({length : 10});
    let count = 0;

    var backtracking = function(track){
        if(track.length == n + 1) {
            return;
        }

        const k = parseInt(track.join(""));
        if(k >= 100 && k < 200) {
            console.log(k);
        }

        count ++;

        for(let i=0; i<=9; i++) {
            if(visited[i]) {
                continue;
            }
            if(track.length > 0 && track[0] == 0) {
                continue;
            }
            visited[i] = true;
            track.push(i);
            backtracking(track);
            visited[i] = false;
            track.pop();
        }
    }
    backtracking([])
    return count - 1;
};


console.log(countNumbersWithUniqueDigits(3));
console.log(countNumbersWithUniqueDigits(4));
// console.log(countNumbersWithUniqueDigits(5));
// console.log(countNumbersWithUniqueDigits(6));
// console.log(countNumbersWithUniqueDigits(7));
// console.log(countNumbersWithUniqueDigits(8));