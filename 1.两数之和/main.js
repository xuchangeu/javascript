var twoSum = function(nums, target) {
    let obj = {}
    for(let i=0;i<nums.length;i++){
        console.log(obj)
        if(obj.hasOwnProperty(target-nums[i])) {
            return [obj[target - nums[i]], i]
        }
        obj[nums[i]] = i
    }

    return []
};


console.log(twoSum([2,7,11,15], 9))