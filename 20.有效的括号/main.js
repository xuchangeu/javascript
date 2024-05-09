/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let obj = {
        "{" : "}",
        "(" : ")",
        "[" : "]"
    };

    let arr = s.split("");
    let arr2 = [];
    while (arr.length > 0) {
        let v = arr[0];
        //匹配到左括号
        if(!!obj[v]) {
            arr2.push(obj[v]);
            arr.splice(0,1);
        }else {
            let popItem = arr2.pop()
            if (popItem == v) {
                arr.splice(0,1)
                continue;
            }else{
                return false
            }
        }
    }

    return true
};


isValid("()")
isValid("()[]{}")
isValid("{[]}")