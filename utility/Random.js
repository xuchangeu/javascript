
function Random(from, to) {
    let add = Math.floor(Math.random() * (to + 1 - from));
    return add + from 
}


export default Random;