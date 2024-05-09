
var generateParenthesis = function(n){
    // console.time("generateParenthesis");
    let choices = Array.from({length : 2*n}, function(v,i){
            if(i % 2 == 0) {
                return "(";
            }else{
                return  ")";
            }
        })

        let memo = new Map();


    var backtrack = function(choices, track, answer, index){
        memo.set(track.join(""), 1);

        if(track.length == choices.length && valid(track.join(""))) {
            answer.push(track.join(""));
            return;
        }

        for(let i=index; i<choices.length; i++) {
            track.push(choices[i]);
            if(memo.get(track.join(""))) {
                track.pop();
                continue;
            }

            //track.push(choices[i]);
            backtrack(choices, track, answer, index+1);
            track.pop();
        }
    }

    let answer = [];
    backtrack(choices, [], answer, 0);
    // console.timeEnd("generateParenthesis");
    return answer;
}




var valid = function(str){
    if(!str.length || !str == null) {
        return false;
    } 

    let stack = [];
    while(str.length){
        if(str[0] == "(") {
            stack.push(str[0]);
        }else{
            if(!stack.pop()) {
                return false;
            }
        }
        str = str.substring(1);
    }

    return stack.length == 0;
} 


console.log(valid("(())"));
console.log(valid("()()"));
console.log(valid("((()))"));
console.log(valid("()(())"));
console.log(valid(")()))"));
console.log(valid("()(()"));
console.log(generateParenthesis(8));


