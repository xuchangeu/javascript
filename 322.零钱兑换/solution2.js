/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

//贪心方案

var coinChange = function (coins, amount) {

    if(amount == 0) {
        return 0;
    }

    //desc order
    coins.sort((a, b) => { return b - a });
    //count
    let count = 0;

    var recursion = function (coins, amount) {

        if(coins.length == 0){
            return -1;
        }

        while(!!coins.length) {
            if(coins[0] > amount ) {
                coins.shift();
            }else{
                break;
            }
        }

        if(!coins.length ) {
            return -1;
        }

        amount -= coins[0];
        ++count;
        if(amount == 0) {
            return count;
        }
        return recursion(coins, amount);
    }

    return recursion(coins, amount);
}


console.log(coinChange([1,2,5],11) == 3);
console.log(coinChange([2],3) == -1);
console.log(coinChange([1],0) == 0);

coinChange([1,2147483647], 2);

coinChange([186,419,83,408], 6249);