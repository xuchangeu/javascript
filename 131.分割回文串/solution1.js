var partition = function(s) {
    let answer = [];   

    var backtrack = function(choice, track, index){
        if(index == s.length) {
            answer.push(track.slice());
            return;
        }

        for(let i=index; i<s.length; i++) {
            const start = index;
            const end = i + 1;
            const str = s.substring(start, end);
            if(isPlindrome(str)) {
                track.push(str);
                backtrack(choice, track, end);
                track.pop();
            }else{
                continue;
            }
        }
    }

    backtrack([], [], 0);
    return answer;
};


var isPlindrome = function(s){
    if(s == ""){
        return false;
    }

    let left = 0,
        right = s.length - 1;
    while(left < right) {
        if(s[left] != s[right]) {
            return false;
        }
        left ++;
        right --;
    }
    return true;
}


console.log(partition("aab"))
console.log(partition("a"));

// console.log(isPlindrome("a"));
// console.log(isPlindrome("aa"));