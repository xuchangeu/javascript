/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let answer = [];

    var backtrack = function (choices, track, index) {
        console.log("track -->", track)

        answer.push([...track]);

        if (track.length == choices.length) {
            
            return;
        }

        for (let i = index; i < choices.length; i++) {
            track.push(choices[i]);
            backtrack(choices, track, i + 1);
            track.pop();
        }
    }

    backtrack(nums, [], 0);
    return answer;
};


console.log(subsets([1, 2, 3]));