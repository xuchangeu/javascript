

let arr = [1,1];

function fibonacci(n) {
    if(!!arr[n-1]){
        return arr[n-1];
    }
    let temp1 = fibonacci(n-2);
    let temp2 = fibonacci(n-1);
    let result = temp1 + temp2;
    arr[n-1] = result;
    return temp1 + temp2;
}


for(let i=1 ;i <= 43; i++) {
    console.time("fibcall");
    let result = fibonacci(i);
    console.log(i,"===>", result);
    console.timeEnd("fibcall")
}


// fibonacci(5);

