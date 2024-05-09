/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const s1 = Date.now()
    if(nums.length < 3) {
        return []
    }

    nums.sort(function(a,b){
        return a-b
    })

    let result = {}
    while (nums.length >= 3) {
        if(nums[0] == nums[1]) {
            nums.splice(0,1)
            continue
        }
        let first = nums[0]
        let target = 0 - first
        nums.splice(0,1)
        let twoSumResult = twoSum(nums, target)
        for(let i=0; i< twoSumResult.length ; i++) {
            twoSumResult[i].push(first)
            // let isUnique = true
            // for(let j=0; j< result.length; j++) {
            //     if(arrayEqual(result[j], twoSumResult[i])) {
            //         isUnique = false
            //         break
            //     }
            // }
            //if (isUnique) {
                result[twoSumResult[i]] = twoSumResult[i]
            //}
            
        }
    } 

    const s2 = Date.now()
    console.log("consume -->", s2 - s1)
    return Object.values(result)
    
};


var arrayEqual = function(arr1, arr2) {
    if(arr1.length != arr2.length ){
        return false
    }
    for (let i=0; i<arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            return false
        }
    }
    return true
}

var twoSum = function(nums, target) {
    let leftIndex = 0,
        rightIndex = nums.length - 1;
    let result = []
    
    while(leftIndex < rightIndex) {
        let leftValue = nums[leftIndex],
            rightValue = nums[rightIndex]

        if(leftValue + rightValue == target) {
            result.push([leftValue, rightValue])
        }

        //数字过小，左指针 ++
        if(leftValue + rightValue < target) {
            leftIndex ++
        }else {
            //指针过大，右指针 --
            rightIndex --
        }
    }
    return result
}

let numbers = [-1,0,1,2,-1,-4]
console.log(threeSum(numbers))