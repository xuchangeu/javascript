/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permute = function(nums) {
//     let result = [];

//     function backtrack(choices,track){
//         if(choices.length == 0){
//             result.push([...track]);
//             return;
//         }

//         for(let i=0; i<choices.length; i++){
//             //choose pricess
//             let element = choices[i]
//             track.push(element);
//             //remove i from choicelist
//             let index = choices.indexOf(element);
//             choices = [...choices.slice(0,index),...choices.slice(index+1)];
            
//             backtrack(choices,track);

//             //unchoose process,put element i back a and pop last element.
//             choices = [...choices.slice(0,index),element,...choices.slice(index)];
//             track.pop()
//         }
//     }

//     backtrack(nums, []);
//     return result;
// };




var permute = function(nums){
    let answer = [];
    let calltime = 0;

    var backtrack = function(nums, track, answer){
        calltime ++;
        console.log("track -- >", track);
        if(nums.length == 0) {
            answer.push([...track]);
            return;
        }

        for(let i=0; i<nums.length; i++) {
            
            const element = nums.splice(i,1)[0];
            const index = i;
            track.push(element);

            //backtrack
            backtrack(nums, track, answer);

            //unchoose
            nums.splice(index, 0 , element);
            track.pop();
        }
    }   

    console.log("calltime :", calltime);

    backtrack(nums, [],  answer);
    console.log("calltime :", calltime);
    return answer;
}


console.log(permute([1,2,3,4]));