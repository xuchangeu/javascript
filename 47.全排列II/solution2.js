var permuteUnique = function (nums) {
    

    let visited = new Map();

    function backtrack(nums, track, answer) {   
        if(nums.length == 0) {
            answer.push([...track]);
            return;
        }

        for(let i=0;i<nums.length;i++){
            const num = nums.splice(i, 1)[0];
            track.push(num);
            if(visited.get(track.join(""))){
                track.pop();
                nums.splice(i, 0, num);
                continue;
            }

            visited.set(track.join(""), true);

            backtrack(nums, track, answer);
            
            track.pop();
            nums.splice(i, 0, num);
        }
    }

    let answer = [];
    backtrack(nums, [], answer);
    return answer;
};

console.log(permuteUnique([1,1,2]));
console.log(permuteUnique([1,2,3]));