// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

// 你可以按 任何顺序 返回答案。



// 示例 1：

// 输入：n = 4, k = 2
// 输出：
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]
// 示例 2：

// 输入：n = 1, k = 1
// 输出：[[1]]



// var combine = function(n, k) {
//     const ans = [];
//     const dfs = (cur, n, k, temp) => {
//         // 剪枝：temp 长度加上区间 [cur, n] 的长度小于 k，不可能构造出长度为 k 的 temp
//         if (temp.length + (n - cur + 1) < k) {
//             return;
//         }
//         // 记录合法的答案
//         if (temp.length == k) {
//             ans.push(temp);
//             return;
//         }
//         // 考虑选择当前位置
//         dfs(cur + 1, n, k, [...temp, cur]);
//         // 考虑不选择当前位置
//         //dfs(cur + 1, n, k, temp);
//     }
//     dfs(1, n, k, []);
//     return ans;
// };




// var combine = function(n,k){
//     let result = [];
//     var backtrack = function(n, k, arr, index){
//         if(arr.length == k){
//             result.push([...arr]);
//             return;
//         }

//         for(let i=index; i<= n; i++){
//             arr.push(i);
//             backtrack(n,k,arr,i+1);
//             arr.pop();
//         }
//     }

//     backtrack(n,k,[],1);
//     return result
// }


var combine = function (nums) {
    let answer = [];

    var trackback = function(choices, track, index) {
        console.log("track -- >", track);
        if (track.length == choices.length) {
            answer.push([...track]);
            return;
        }

        for (let i = index; i < choices.length; i++) {
            track.push(choices[i]);
            trackback(choices, track, i + 1);
            track.pop();
        }
    }
    trackback(nums, [], 0);
    return answer;
};

console.log("result == >", combine([1, 2, 3]));
// let arr = [1,2,3]

// console.log(...arr);