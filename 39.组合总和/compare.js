import correct from "./s2_result_main.js";
import result  from "./s2_result.js";
import pkg from "lodash";

const { isEqual } = pkg; 


correct.map(function(arr){
    // console.log("arr ->", arr);
    arr.sort(function(a,b){
        return a-b;
    })
    // console.log("arr after ->", arr)
})



for(let c of correct) {
    let find = false;
    for(let r of result) {
        if(isEqual(r,c)) {
            find = true;
            console.log("find solution : ", c);
            break;
        }
    }
    if(!find) {
        console.log("not find solution : ", c);
    }
}