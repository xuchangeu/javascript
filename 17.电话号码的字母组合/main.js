/**
 * @param {string} digits
 * @return {string[]}
 */
// var letterCombinations = function (digits) {
//     let map = {
//         '2': ['a', 'b', 'c'],
//         '3': ['d', 'e', 'f'],
//         '4': ['g', 'h', 'i'],
//         '5': ['j', 'k', 'l'],
//         '6': ['m', 'n', 'o'],
//         '7': ['p', 'q', 'r', 's'],
//         '8': ['t', 'u', 'v'],
//         '9': ['w', 'x', 'y', 'z']
//     }

//     let result = [],
//         k = digits.length;
//     var combine = function (arr, k, temp, index) {
//         if (temp.length == k) {
//             result.push(temp.join(""));
//             return;
//         }

//         for (const v of map[arr[index]]) {
//             temp.push(v);
//             combine(arr, k, temp, index+1);
//             temp.pop();
//         }
//     }
//     combine(digits, k, [], 0)

//     return result;
// };


// var letterCombinations = function (digits) {
//     let map = {
//         '2': ['a', 'b', 'c'],
//         '3': ['d', 'e', 'f'],
//         '4': ['g', 'h', 'i'],
//         '5': ['j', 'k', 'l'],
//         '6': ['m', 'n', 'o'],
//         '7': ['p', 'q', 'r', 's'],
//         '8': ['t', 'u', 'v'],
//         '9': ['w', 'x', 'y', 'z']
//     }
    
//     if(digits.length == 0) {
//         return [];
//     }else if(digits.length == 1) {
//         return map[digits[0]]; 
//     }

//     let answer = [];

//     var backtrack = function(choice, track, answer, index){
//         if(track.length == choice.length) {
//             answer.push(track.join(""));
//             return;
//         }

//         for(let i=0; i<map[choice[index]].length; i++){
//             //choose
//             const element = map[choice[index]][i];
//             track.push(element)

//             backtrack(choice, track, answer, index+1);

//             //unchoose;
//             track.pop();
//         }
//     }

//     backtrack(digits, [], answer, 0);
//     return answer;
// };


var letterCombinations = function (digits) {
    let map = {
        "2" : "abc",
        "3" : "def",
        "4" : "ghi",
        "5" : "jkl",
        "6" : "mno",
        "7" : "pqrs",
        "8" : "tuv",
        "9" : "wxyz"
    }

    if(digits.length == 0) {
        return [];
    }else if(digits.length == 1) {
        return map[digits[0]];
    }

    var backtrack = function(choice, track, answer, index){
        if(track.length == choice.length) {
            answer.push(track.join(""))
            return;
        }

        for(let i=0; i<map[choice[index]].length; i++) {
            track.push(map[choice[index]][i]);
            backtrack(choice, track, answer, index+1);
            track.pop();
        }
    }

    let answer = [];
    backtrack(digits, [], answer, 0)
    return answer
};

console.log(letterCombinations("2"));