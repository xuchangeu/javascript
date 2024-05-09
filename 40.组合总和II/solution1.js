// 给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

// candidates 中的每个数字在每个组合中只能使用 一次 。

// 注意：解集不能包含重复的组合。 

 

// 示例 1:

// 输入: candidates = [10,1,2,7,6,1,5], target = 8,
// 输出:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
// 示例 2:

// 输入: candidates = [2,5,2,1,2], target = 5,
// 输出:
// [
// [1,2,2],
// [5]
// ]

var combinationSum2 = function(candidates, target){
    candidates.sort((a,b)=>{
        return a-b;
    })

    let answer = [];
    let map = new Map();

    var backtrack = function(choices, track, target, index){
        if(target == 0){
            answer.push(track.slice());
            return;
        }

        for(let i=index; i<choices.length; i++) {
            const choice = choices[i];
            if(choice > target) {
                return;
            }
            track.push(choice);
            let key = track.join(".");
            if(!map.get(key)) {   
                map.set(key, true);
            }else{
                track.pop();
                continue;
            }
            
            backtrack(choices, track, target - choice, i + 1);
            track.pop();
        }
    }

    backtrack(candidates, [], target, 0);
    return answer
}



console.log(combinationSum2([10,1,2,7,6,1,5], 8));
console.log(combinationSum2([2,5,2,1,2], 5));

console.log(combinationSum2([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 30))
