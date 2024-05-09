var readBinaryWatch = function(turnedOn) {
    let answer = [];
    var trackback = function(){
        for(let i=0; i<=11; i++) {
            const hour = i.toString(2);
            let hourMatch = hour.match(/[1]/g)?.length;
            if(hourMatch == undefined) {
                hourMatch = 0;
            }
            if(hourMatch > turnedOn) {
                continue;
            }
            for(let j=0; j<=59; j++) {
                const minute = j.toString(2);
                let minuteMatch = minute.match(/[1]/g)?.length;
                if(minuteMatch == undefined) {
                    minuteMatch = 0
                }
                if(hourMatch + minuteMatch == turnedOn) {
                    let m = j;
                    if(j.toString().length < 2) {
                        m = "0" + m;
                    }
                    answer.push(i + ":" + m);
                }
            }
        }
    }
    trackback();
    return answer;
};


console.log(readBinaryWatch(1));
