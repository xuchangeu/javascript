
var grayCode = function(n) {
    let result = [];
    let max = Math.pow(n,2);
    for(let i=0; i<max; i++) {
        result.push(i^Math.floor(n/2));
    }
    return result;
};


grayCode(2)