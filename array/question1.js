

function init(n){
    let arr = Array.from({length : n}, function(v, i){
        return Array.from({length : n}).fill(0)
    })

    console.time("array");
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr[i].length; j++) {
            // console.log(i, j , arr[i][j]);
        }
    }
    console.timeEnd("array");

    let m = new Map();
    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
            console.log(i, j)
            m.set(i.toString()+j.toString(), 1)
        }
    }

    console.time("map");
    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
            // console.log(i, j, m.get(i.toString() + j.toString));
        }
    }
    console.timeEnd("map");

}


init(10000)