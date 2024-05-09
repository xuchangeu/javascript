/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let canBreak = false
    while(!canBreak) {
        let result = ppp(n)
        if (result == 1) {
            canBreak = true
        }
        n = result
    }
    return true
};


var ppp = function(n) {
    let str = n.toString();
    let result = 0;
    for (let i=0; i< str.length; i++){
        let decimal = parseInt(str[i])
        result += Math.pow(decimal , 2)
    }
    return result
}


console.log(isHappy(19))
