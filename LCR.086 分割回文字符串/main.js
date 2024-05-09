/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let answer = [];
    var backtrack = function(s, track, answer){
        if(s.length == 0) {
            answer.push([...track]);
        }

        for(let i=0; i<s.length; i++) {
            let str = s.substring(0,i+1);
            if(isPalindrome(str)) {
                track.push(str);
                backtrack(s.substring(i+1), track, answer);
                track.pop();
            }
        }
    }

    backtrack(s, [], answer);
    return answer;
    
};


var isPalindrome = function(s){
    let l = 0,
        r = s.length - 1;

    while(l < r) {
        if(s[l] != s[r]) {
            return false
        }else{
            ++l,
            r--;
        }
    }
    return true;
}


partition("aab");