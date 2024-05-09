/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

    let result = [];
    while(intervals.length > 0) {
        let item = intervals.shift();
        if(intervals.length == 0) {
            result.push(item);
            break;
        };

        let min = item[0],
            max = item[1];
        
        let isCoincide = true;
        while(isCoincide) {
            let item2 = intervals[0];
            let left = item2[0],
                right = item2[1];
            if(left <= max && right >= min) {
                max = Math.max(right, max);
                min = Math.min(left, min);
                intervals.shift();
                if(intervals.length == 0){
                    result.push([min, max])
                    break;
                }
            }else{
                result.push([min, max]);
                isCoincide = false
            }
        }
    }

    return result;
};


// let intervals = [[1,3],[2,6],[8,10],[15,18]];

// console.log(merge(intervals));
// console.log(merge([[1,4],[4,5]]));
// console.log(merge([[1,4],[0,4]]));
// console.log(merge([[1,4],[0,0]]));



let numbers = [[2,3],[4,5],[6,7],[8,9],[1,10]];
numbers.sort(function(a,b) {
    let l1 = a[0];
    let l2 = b[0];
    console.log("l1-->", l1, "l2-->", l2);
    return l1 - l2;
})

console.log(numbers);


let numbers2 = [2,3,1,5,9];
numbers2.sort(function(a,b){
    return a-b
}) 

