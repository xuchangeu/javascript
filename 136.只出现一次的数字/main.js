var singleNumber = function(nums) {
    let m = new Map();
    for(let i=0;i<nums.length; i++){
        let k = nums[i],
            v = m.get(k);
        !!v ? m.set(k,++v) : m.set(k,1);
    }

    for (let [k, v] of m) {
        if(v == 1) {
            return k;
        }
    }

    return -1
};



console.log(singleNumber([2,2,1]));

