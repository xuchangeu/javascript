


var addBinary = function(a, b) {
    let carry = 0,
        ml = Math.max(a.length, b.length);
    let arr = [];
    for(let i=0; i< ml; i++) {
        let ia = a.length - i -1;
        let ib = b.length -i -1;
        let va = "",
            vb = "";
        
        if(ia > -1) {
            va = a[ia];
        }

        if(ib > -1) {
            vb = b[ib]
        }
        
        let sum = +va + +vb + carry,
            remainder = sum % 2;

        carry = Math.floor(sum / 2);
        arr.unshift(remainder);
    }

    if(carry > 0) {
        arr.unshift("1");
    } 

    return arr.join("");
};



addBinary("11","1");