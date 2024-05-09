
let m = new Map();
console.time('use-map')
for(let i=0; i< Math.pow(10,7); i++) {
    m.set(i, i);
}

console.timeEnd('use-map')