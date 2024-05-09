var lengthOfLongestSubstring = function(s) {
    let l = 0,
        r = 0,
        result = 0,
        len = s.length;
    
    while(r < len) {
        let v = s[r];
        //遇到了重复字符
        if(s.substring(l,r).indexOf(v) != -1) {
            //左指针开始往右
            l = r - 1;
            while (s[l] != v) {
                l --;
            }
            l++;
        } else {
            //没有遇到重复字符，右指针一直往前，并将字符存入obj
            result = Math.max(result, r-l+1)
        }
        r++;
    }
 
    return result;
};


lengthOfLongestSubstring("abcabcbb")
lengthOfLongestSubstring("tmmzuxt")