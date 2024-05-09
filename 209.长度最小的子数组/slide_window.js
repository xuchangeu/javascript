

var Window = function(min,max,arr,sum){
    this.min = min;
    this.max = max;
}

var minSubArrayLen = function(target, nums){
    //先定义一个窗口
    let sum = 0;
    let window = new Window(0)
    for (let i=0; i<nums.length; i++) {
        sum += nums[i];
        if(sum >= target) {
            window.max = i;
            break;
        }
    }

    if(window.max == undefined) {
        return 0;
    }

    let result = window.max - window.min + 1; 
    if(window.max == nums.length -1) {
        window.max --;
    }
    
    //循环直到右边下标等于 nums.length -1
    while (window.max < nums.length -1) {
        //右窗口往右移1
        window.max ++;
        let sum = 0;
        let findIndex = window.max
        //从右往左找，找到最大的左窗口位置
        while(sum < target && findIndex > 0) {
            sum += nums[findIndex];
            if(sum >= target) {
                break;
            }

            findIndex --;
        }
        window.min = findIndex;

        //找到的 index 是否满足条件
        if(sum >= target) {
            result = Math.min(result, window.max - window.min + 1);
        }
    }

    return result;
}


console.log(minSubArrayLen(7,[2,3,1,2,4,3]));
console.log(minSubArrayLen(11,[1,2,3,4,5]));
console.log(minSubArrayLen(10,[10,2,3]))