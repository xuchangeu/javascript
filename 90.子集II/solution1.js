// 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的 
// 子集
// （幂集）。

// 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。



// 示例 1：

// 输入：nums = [1,2,2]
// 输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
// 示例 2：

// 输入：nums = [0]
// 输出：[[],[0]]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let memo = new Map();
    let answer = [];
    var trackback = function (choices, track, index) {
        let key = track.toSorted().join("").toString();
        if (!memo.get(key)) {
            answer.push([...track]);
            memo.set(key, 1);
        }
        // console.log(track);
        if (track.length == choices.length) {
            return;
        }

        for (let i = index; i < choices.length; i++) {
            track.push(choices[i]);
            trackback(choices, track, i + 1);
            track.pop()
        }
    }

    trackback(nums, [], 0)
    return answer;
};


console.log(subsetsWithDup([1,2,2]));
// console.log(subsetsWithDup([4,4,4,1,4]))
// console.log(subsetsWithDup([1,2,3]));
// console.log(subsetsWithDup([4,1,0]));