/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {

    let count = 0;
    let sum = 0;
    var backtracking = function(choice, sum, track, index){
        if(track.length == choice.length) {
            if(sum == target) {
                console.log(track);
                count ++;
            }
            return;
        }

        for(let i=index; i<choice.length; i++) {
            sum += choice[i];
            track.push(choice[i]);
            backtracking(choice, sum, track, i+1);
            track.pop();
            sum -= choice[i];

            sum -= choice[i];
            track.push(-choice[i])
            backtracking(choice, sum, track, i+1);
            sum += choice[i];
            track.pop();
        }
    }

    backtracking(nums, sum, [], 0);

    return count;
};

console.log(findTargetSumWays([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 1));
