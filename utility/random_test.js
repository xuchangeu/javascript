import Random from "./Random.js";

let count = new Map()

for (let i = 0; i < 1000000000; i++) {
    let r = Random(50, 59);
    let v = count.get(r);
    if (v) {
        count.set(r, v + 1)
    } else {
        count.set(r, 1);
    }
}

console.log(count);

