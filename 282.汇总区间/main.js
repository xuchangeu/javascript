/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let leftIndex = 0;
    let rightIndex = 0;
    let result = []
    while (rightIndex <= nums.length -1) {
        if(nums[rightIndex] - nums[leftIndex] == rightIndex - leftIndex) {
            if (rightIndex == nums.length -1){
                addRange(nums,leftIndex,rightIndex,result);
            }
            rightIndex ++
        }else {
            addRange(nums,leftIndex,rightIndex-1,result);
            leftIndex = rightIndex;
            rightIndex = leftIndex;
        }
    }
    return result;
};


var addRange = function(nums,leftIndex, rightIndex, result) {
    if(rightIndex == leftIndex){
        result.push(nums[leftIndex].toString())
    }else {
        result.push(nums[leftIndex].toString()+"->"+nums[rightIndex].toString())
    }
}


summaryRanges([0,1,2,4,5,7])