var subsetsWithDup = function (nums) {
    nums.sort((a,b)=>{
        return a-b;
    })
    const visited = Array.from({length : nums.length}).fill(false);
    var backtrack = function(choices, track, index) {
        answer.push(track.slice());

        for(let i=index; i<choices.length; i++) {
            if(i > 0 && choices[i] == choices[i-1] && !visited[i-1]) {
                continue;
            }

            track.push(choices[i]);

            visited[i] = true;

            // let key = track.join(".");
            // if(!memo.get(key)) {
            //     memo.set(key, true);
            // }else{
            //     track.pop();
            //     continue;
            // }
            backtrack(choices, track, i + 1);
            visited[i] = false
            track.pop();
        }
    }

    let answer = [];
    backtrack(nums, [], 0)
    return answer;
}


console.log(subsetsWithDup([1,2,2]));