// 中等

// 你将得到一个整数数组 matchsticks ，其中 matchsticks[i] 是第 i 个火柴棒的长度。你要用 所有的火柴棍 拼成一个正方形。你 不能折断 任何一根火柴棒，但你可以把它们连在一起，而且每根火柴棒必须 使用一次 。

// 如果你能使这个正方形，则返回 true ，否则返回 false 。



// 示例 1:



// 输入: matchsticks = [1,1,2,2,2]
// 输出: true
// 解释: 能拼成一个边长为2的正方形，每边两根火柴。
// 示例 2:

// 输入: matchsticks = [3,3,3,3,4]
// 输出: false
// 解释: 不能用所有火柴拼成一个正方形。


// 提示:

// 1 <= matchsticks.length <= 15
// 1 <= matchsticks[i] <= 108

/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
    
    let all = 0;
    for(let i=0; i<matchsticks.length; i++) {
        all += matchsticks[i];
    }
    const memo = new Map();
    let result = false;

    var backtrack = function(choices, length, index){
        if(length > 0 && length == all / 4 && !memo.get(length.toString())) {
            console.log("calc with choices and length :", choices, length);
            memo.set(length.toString(), true);
            if(isSquireWithLength(choices, length)) {
                result = true;
                return;
            }
        }

        for(let i=index; i<choices.length; i++) {
            if(result == true) {
                return;
            }
            const c = choices[i];
            if (c + length > all / 4) {
                return;
            }
            backtrack(choices, c + length, i + 1);
        }
    }

    backtrack(matchsticks, 0, 0);
    return result;
};


var isSquireWithLength = function(sticks, length){
    let result = false;
    let back = length;
    let count = 0;
    let path = new Map();
    var backtrack = function(choices, l, track){
        // console.log("track :", track);
        if(result) {
            return;
        }

        if(l == 0) {
            l = back;
            path.clear();
            if(choices.length == 0) {
                console.log("the answer is :", track);
                result = true;
                return;
            }
            
        }

        if(choices.length == 0) {
            return;
        }

        
        for(let i=0; i<choices.length; i++) {
            const c = choices[i];
            if(c > l) {
                return;
            }
            count ++;
            track.push(c);
            const key = track.join(".");
            if(path.get(key)) {
                track.pop();
                return;
            }
            path.set(key, true);
            choices.splice(i, 1);
            backtrack(choices, l - c, track);
            track.pop();
            choices.splice(i, 0, c);
        }      
    }
    const choices = sticks.slice().sort((a,b)=>{return a-b});
    backtrack(choices, back, [], 0);
    console.log("tracking path count :", count);
    return result;
}

// console.log(makesquare([1, 1, 2, 2, 2]))
// console.log(makesquare([3, 3, 3, 3, 4]));



let arr = [5,5,5,5,4,4,4,4,3,3,3,3];
console.log(isSquireWithLength(arr, 12));
// console.log(makesquare(arr));

// console.log(isSquireWithLength([1,1,2,2,2], 2))


// console.log(makesquare([12,13,1,15,11,17,16,3,15,11,13,4,2,16,15]));
// console.log(makesquare([5,5,5,5,16,4,4,4,4,4,3,3,3,3,4]));