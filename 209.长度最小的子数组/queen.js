//  import Queen from '../utility/Queen.js'



// var minSubArrayLen = function(target, nums){
//     let queen = new Queen()
//     let numberIndex = 0,
//         sum = 0,
//         result = Infinity;
//     while(numberIndex <= nums.length) {
//         if (sum < target) {
//             if(numberIndex < nums.length) {
//                 queen.offer(nums[numberIndex]);
//                 sum += nums[numberIndex];
//             }
            
//             numberIndex ++;
//         }else{
//             while(sum >= target) {
//                 result = Math.min(result, queen.size());
//                 sum -= queen.poll();
//             }
//         }
//     }

//     if(result == Infinity) {
//         return 0;
//     }
//     return result;
// }




// var minSubArrayLen = function(target, nums){
//     let leftIndex = 0,
//         rightIndex = 0,
//         sum = 0,
//         result = Infinity;
//     while(rightIndex <= nums.length) {
//         if (sum < target) {
//             if(rightIndex < nums.length) {
//                 sum += nums[rightIndex];
//             }
//             rightIndex ++;
//         }else{
//             while(sum >= target) {
//                 result = Math.min(result, rightIndex - leftIndex);
//                 sum -= nums[leftIndex];
//                 leftIndex ++;
//             }
//         }
//     }

//     if(result == Infinity) {
//         result = 0;
//     }
//     return result;
// }

var minSubArrayLen = function(target, nums) {
    // 长度计算一次
    const len = nums.length;
    let l = 0,
        count = 0,
        r =0 , 
        sum = 0,
        res = len + 1; // 子数组最大不会超过自身
    while(r < len) {
        sum += nums[r++];
        console.log(r)
        // 窗口滑动
        while(sum >= target) {
            count ++;
            // r始终为开区间 [l, r)
            res = res < r - l ? res : r - l;
            sum-=nums[l++];
        }
    }
    return res > len ? 0 : res;
};



console.log(minSubArrayLen(7,[2,3,1,2,4,3]));
console.log(minSubArrayLen(11,[1,2,3,4,5]));
console.log(minSubArrayLen(10,[10,2,3]))