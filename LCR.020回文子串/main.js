var countSubstrings = function(s) {
    let answer = [];
    var trackback = function(s, track, index){
        if(isPalindrome(track.join(""))) {
            answer.push(track.join(""))       
        }

        for(let i=index; i<s.length; i++) {
            track.push(s[i])

            trackback(s,track, i+1);

            track.pop();
        }
    }

    trackback(s,[], 0)

    return answer;
};

var isPalindrome = function(s){
    if(s == "") {
        return false;
    }
    let l = 0,
        r = s.length -1;
    
    while(l<r) {
        if(s[l] != s[r]) {
            return false
        }
        l++;
        r--;
    }

    return true;
}



console.log(countSubstrings("abc"));