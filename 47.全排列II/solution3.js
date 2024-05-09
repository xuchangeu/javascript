/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort()
    let res = []
    let path = []
    let used = new Array(nums.length).fill(false)
    function fn(path, used){
        if(path.length === nums.length){
            res.push(path.slice())
            return
        }
        for(let i=0; i<nums.length; i++){
            if(used[i]){
                continue
            }
            if( i>0 && nums[i]===nums[i-1] && !used[i-1]){
                continue
            }
            used[i] = true
            path.push(nums[i])
            fn(path, used)
            path.pop()
            used[i] = false
        }
    }
    fn(path, used)
    return res
};

console.log(permuteUnique([1,1,2]));