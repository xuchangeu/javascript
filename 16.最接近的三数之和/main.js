/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort(function(a,b){
        return a-b;
    })

    let result = Infinity;

    for(let i=0;i<nums.length; i++){
        for(let j=i+1; j<nums.length-1; j++){
            const current = nums[i]+nums[j]+nums[j+1];
            if(Math.abs(current-target) < Math.abs(result-target)) {
                result = current;
            }
            
        }
    }

    return result;
};



threeSumClosest([0,3,97,102,200],300);