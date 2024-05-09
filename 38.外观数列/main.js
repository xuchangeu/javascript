/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    
    var recursive = function(i, last){
        if(i > n) {
            return last;
        }
        let current = desc(i, last);
        ++i;
        return recursive(i, current);
    }

    var desc = function(i, last){
        if(!last.length){
            return i.toString();
        }
        let desc = "",
            base = last[0],
            count = 0;
        
        for(let i=0; i<last.length; i++){
            const cur  = last[i];
            if(cur == base) {
                count ++;
            }else{
                desc += count + base;
                count = 1;
                base = cur;
            }

            if(i == last.length -1){
                desc += count + base;
            }
        } 
        return desc;
    }

    return recursive(1, "")
};



console.log(countAndSay(4));
console.log(countAndSay(5));
