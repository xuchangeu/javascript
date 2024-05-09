// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

// 你可以认为每种硬币的数量是无限的。

 

// 示例 1：

// 输入：coins = [1, 2, 5], amount = 11
// 输出：3 
// 解释：11 = 5 + 5 + 1
// 示例 2：

// 输入：coins = [2], amount = 3
// 输出：-1
// 示例 3：

// 输入：coins = [1], amount = 0
// 输出：0
 

// 提示：

// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104



/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    console.time("answer time");
    coins.sort(function(a,b){
        return b-a;
    })
    let min = Infinity;

    var backtrack = function(coins, track){
        if(track.length >= min) {
            return;
        }
        let plus = arrayPlus(track);
        if(plus == amount) {
            min = Math.min(track.length, min);
            return;
        }else if(plus > amount) {
            return;
        }

        for(let i=0; i< coins.length; i++){
            //choose;
            track.push(coins[i]);

            backtrack(coins, track);

            //unchoose;
            track.pop();
        }
    }
    backtrack(coins, []);
    console.timeEnd("answer time");
    return min;
};


var arrayPlus = function(arr){
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

console.log(coinChange([1,2,5],100));