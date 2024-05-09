



var partition = function(nums) {
    
    let n = nums.length;
    var trackback = function(choice, track, answer, index){
        if(choice.length == track.length) {
            answer.push([...track]);
            return;
        }

        for(let i=index; i<choice.length; i++) {
            //choose
            let element = choice[i],
                index = i;
            track.push(element);

            trackback(choice, track, answer, index+1);

            //unchoose
            //put element back;
            // choice.unshift(element);
            //choice.splice(index, 0 , element);
            // choice = [...choice.slice(0,index), element, ...choice.slice(index+1) ]; 
            // choice.push(element);
            track.pop();
            
        }
    }
    let result = [];

    trackback(nums, [], result, 0);

    console.log(result);
};


partition([1,2,3])