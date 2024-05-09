//给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。


// 示例 1：

// 输入：nums = [1,1,2]
// 输出：
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
// 示例 2：

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    nums.sort(function(a,b){
        return a-b;
    })

    let result = [];
    let visited = Array.from({length:nums.length}).fill(false);

    function backtrack(idx, track) {   
        if(idx == nums.length) {
            result.push(track.slice());
            return;
        }

        for(let i=0;i<nums.length;i++){
            if(visited[i] || (i >0 && nums[i] == nums[i-1] && !visited[i-1])){
                continue;
            }

            track.push(nums[i]);
            visited[i] = true;

            backtrack(idx+1, track);
            visited[i] = false;
            

        }
    }

    backtrack(0, [])
    return result;
};

console.log(permuteUnique([1, 1, 2]));
