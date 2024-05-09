var longestCommonPrefix = function(strs) {
    if (strs.length == 0) {
        return 0
    }else if(strs.length == 1) {
        return strs[0]
    }

    if (allEqual(strs)) {
        return strs[0]
    }


    let commonLength = find(strs, 1)
    console.log(commonLength)
    if(commonLength > 0) {
        return strs[0].substring(0, commonLength)
    }
    return ""
};


var allEqual = function(arr) {
    for (let i=0; i< arr.length -1 ;i++) {
        if (arr[i] != arr[i+1]) {
            return false
        }
    }
    return true
}

var find = function(arr, index){

    for(let i=0; i<arr.length -1 ; i++){
        if(arr[i].substring(0, index > arr[i].length ? arr[i].length : index) 
            != arr[i+1].substring(0, index > arr[i+1].length ? arr[i+1].length : index)) {
            return index -1
        }
    }
    index ++
    console.log("index :", index)
    return find(arr, index)
}


var strs =
["flower","flower","flower","flower"]

console.log(longestCommonPrefix(strs))



