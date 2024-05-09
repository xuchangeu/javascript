var isIsomorphic = function(s, t) {
    let obj = {}
    for (let i=0; i<s.length; i++) {
        if(!obj[s[i]]) {
            //不同字符不能映射到同一个字符
            console.log(Object.values(obj).indexOf(t[i]))
            if(Object.values(obj).indexOf(t[i]) != -1) {
                return false
            }
            obj[s[i]] = t[i]
        }else if(!!obj[s[i]] && obj[s[i]] != t[i]) {
            return false
        }
    }
    return true
};

console.log(isIsomorphic("egg","add"))
