/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
// var exclusiveTime = function(n, logs) {
    
//     let stack = [];
//     let result = [];
//     let currentTimestamp = 0;
    
//     for(let i=0; i<logs.length; i++){
//         let last,
//             current;
//         if(i > 0) {
//             last = getobj(logs[i-1]);
//         }
//         current = getobj(logs[i]);
//         if(result[current.id] == undefined) {
//             result[current.id] = 0;
//         }

//         if(current.action == "start") {
//             if(!!last && last.action == "start") {    
//                 result[last.id] += (current.timestamp - last.timestamp);
//             }else{
//                 if(stack.length > 0) {
//                     const e = stack[stack.length - 1];
//                     result[e.id] += (current.timestamp - currentTimestamp - 1);
//                 }
//             }
            
//             stack.push(current);
//         }else if(current.action == "end") {
//             stack.pop();
//             if(last.action == "end") {
//                 result[current.id] +=(current.timestamp - currentTimestamp);
//             }else {
//                 result[current.id] +=(current.timestamp - currentTimestamp + 1);
//             }
            
//         }
//         currentTimestamp = current.timestamp;
//     }

//     return result;
// };


// var getobj = function(str){
//     const split = str.split(":");
//     return {
//         id : parseInt(split[0]),
//         action : split[1],
//         timestamp : parseInt(split[2])
//     }
// }



var exclusiveTime = function(n, logs) {
    const stack = []; // {idx, 开始运行的时间}
    const res = new Array(n).fill(0);
    for (const log of logs) {
        const idx = parseInt(log.substring(0, log.indexOf(':')));
        const type = log.substring(log.indexOf(':') + 1, log.lastIndexOf(':'));
        const timestamp = parseInt(log.substring(log.lastIndexOf(':') + 1));
        if ("start" === type) {
            if (stack.length) {
                res[stack[stack.length - 1][0]] += timestamp - stack[stack.length - 1][1];
                stack[stack.length - 1][1] = timestamp;
            }
            stack.push([idx, timestamp]);
        } else {
            const t = stack.pop();
            res[t[0]] += timestamp - t[1] + 1;
            if (stack.length) {
                stack[stack.length - 1][1] = timestamp + 1;
            }
        }
    }
    return res;
};



console.log(exclusiveTime(3,["1:start:0","0:start:2","1:start:3","2:start:4","2:end:4","0:end:6","1:end:7","1:end:8"]));
