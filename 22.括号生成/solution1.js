var generateParenthesis = function(n){
    // console.time("solution1");
    let answer = [];

    var backtrack = function(left, right , track, answer){
        if(left == 0 && right == 0) {
            answer.push(track);
            return
        }

        if(left > 0) {
            track += "(";
            backtrack(left - 1, right, track, answer);
            track = track.substring(0, track.length - 1);
        }

        if(right > left) {
            track += ")";
            backtrack(left, right -1 , track, answer);
        }
    }

    backtrack(n , n, "", answer);
    // console.timeEnd("solution1");

    return answer;
}




console.log(generateParenthesis(8));