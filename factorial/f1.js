//计算 n 的阶乘
function factorialCalc(n){
    if(n == 1){
        return n
    }
    
    return n * factorialCalc(--n)
}



console.log(factorialCalc(3));
console.log(factorialCalc(4));
console.log(factorialCalc(5));

// const f1000 = factorialCalc(BigInt(1000)),
//     f997 = factorialCalc(BigInt(997)),
//     f3 = factorialCalc(BigInt(3));

// console.log(f1000/f997/f3);

console.log(factorialCalc(14)/factorialCalc(10)/factorialCalc(4));
console.log(factorialCalc(9)/factorialCalc(6)/factorialCalc(3));