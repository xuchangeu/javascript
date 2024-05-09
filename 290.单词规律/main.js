/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let ruleObj = {}
    let arr = s.split(" ")
    if(!(arr.length == pattern.length)) {
        return false
    }

    for(let i=0; i<arr.length; i++) {
        if(!ruleObj[pattern[i]]) {
            ruleObj[pattern[i]] = arr[i]
        }else {
            if (ruleObj[pattern[i]] != arr[i]) {
                return false
            }
        }
    }

    ruleObj = {}
    for(let i=0; i<arr.length; i++) {
        console.log("key is :", arr[i])
        console.log("value is :",ruleObj[arr[i]])
        if(!ruleObj.hasOwnProperty(arr[i])) {
            ruleObj[arr[i]] = pattern[i]
        }else {
            if (ruleObj[arr[i]] != pattern[i]) {
                return false
            }
        }
    }

    return true
};


console.log(wordPattern("abba","dog constructor constructor dog"))