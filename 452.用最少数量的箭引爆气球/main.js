/**
 * @param {number[][]} points
 * @return {number}
 */
// var findMinArrowShots = function(points) {
//     let count = 0;
//     points.sort(function(a,b){
//         return a[0] - b[0];
//     })

//     while(points.length > 0) {
//         count ++;
//         let item = points.shift();
//         let l1 = item[0],
//             r1 = item[1],
//             isOverride = true;
        
//         while(isOverride && points.length > 0) {
//             let item2 = points[0];
//             let l2 = item2[0],
//                 r2 = item2[1];
            
//             if(l2 <= r1 && r2 >= l1) {
//                 //有重合部分，取重合部分，合用一只箭
//                 l1 = Math.max(l1, l2);
//                 r1 = Math.min(r1, r2);

//                 //确保 r1 > l1
//                 if(l1 > r1) {
//                     let temp = l1;
//                     l1 = r1;
//                     r1 = temp;
//                 }

//                 points.shift();
//             }else{
//                 break;
//             }
//         }
    
//     }

//     return count;
// };

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if (!points.length) {
        return 0;
    }
    points.sort((a, b) => a[1] - b[1]);
    let res = 1;
    let pos = points[0][1];
    for (const b of points) {
        if (b[0] > pos) {
            pos = b[1];
            res++;
        }
    }
    return res;
};


findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]);
// findMinArrowShots([[1,2],[2,3],[3,4],[4,5]]);