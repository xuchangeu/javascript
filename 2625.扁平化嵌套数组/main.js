var flat = function (arr, n) {
    
    let recursive = function(arr, result, depth, n){
        for(const val of arr) {
            if(Array.isArray(val)) {
                if(depth == n) {
                    result.push(val);
                }else{
                    recursive(val, result, depth+1, n);
                }
                
            }else{
                result.push(val)
            }
        }

        return result;
    }

    return recursive(arr, [], 0, n);
};


console.log(flat([1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]] , 1));