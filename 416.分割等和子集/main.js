var canPartition = function(nums) {

    var trackback = function(choice, track, answer){
        // if(track.length > 0 && sumArray(track) == sumArray(choice)) {
        //     return true;
        // }
        if(choice.length == 0) {
            answer.push([...track]);
        }

        for(let i=0; i<choice.length; i++) {
            const e = choice.splice(0,1)[0];
            track.push(e);

            trackback(choice, track, answer);

            choice.splice(0,0, e);
            track.pop();
        }
    }

    let answer = [];
    trackback(nums, [], []);
    console.log(answer);
}


var sumArray = function(arr){
    let r = 0;
    for(let i=0; i<arr.length; i++){
        r += arr[i];
    }
    return r;
}


canPartition([1,5,11,5]);