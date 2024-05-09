/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if(intervals.length == 0) {
        return [newInterval];
    }

    let result = [];
    let newIntervalOverrride = false;

    while(intervals.length > 0) {
        let item = intervals.shift();
        let min = item[0],
            max = item[1];
        
        if(newInterval[0] <= max && newInterval[1] >= min) {
            //重合
            min = Math.min(newInterval[0], min);
            max = Math.max(newInterval[1], max);
            newIntervalOverrride = true;

            if(intervals.length == 0) {
                result.push([min,max]);
                break;
            }

            //合并剩余
            let isOverride = true;
            while (isOverride && intervals.length > 0) {
                let item = intervals[0];
                let left = item[0],
                    right = item[1];
                if (left <= max && right >= min) {
                    min = Math.min(left , min);
                    max = Math.max(right, max);
                    intervals.shift();
                    if(intervals.length == 0) {
                        result.push([min,max]);
                    }
                }else {
                    isOverride = false;
                    result.push([min, max]);
                }
            }
        }else{
            result.push(item)
        }
    }
    
    if(!newIntervalOverrride) {
        result.push(newInterval);
    }
    return result;
};


console.log(insert([[1,5]], [2,3]));