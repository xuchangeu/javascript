

let result = []
//左闭右开
var MergeSort = function (arr, l, r) {
    if (r - l <= 1) {
        return
    }

    let m = Math.ceil((l + r) / 2);
    MergeSort(arr, l, m);
    MergeSort(arr, m, r);
    merge(arr, l, m, r)
}



var merge = function (arr, l, m, r) {
    let arr1 = arr.slice(l, m),
        arr2 = arr.slice(m, r);
    let result = [],
        e1,
        e2;
    // while (!!arr1.length || !!arr2.length) {
    //     e1 = arr1[0];
    //     e2 = arr2[0];
    //     //e1 存在 e2 不存在
    //     if (!!e1 && !e2) {
    //         result.push(arr1.shift());
    //     } else if (!!e2 && !e1) {
    //         result.push(arr2.shift());
    //     } else if (!!e1 && !!e2) {
    //         if (e1 < e2) {
    //             result.push(arr1.shift());
    //         } else {
    //             result.push(arr2.shift());
    //         }
    //     }
    // }
    for (let i = l; i < r; i++) {
        arr[i] = result[i - l];
    }
}

let unsort = [8, 1, 7, 4, 5, 2, 3, 6];
MergeSort(unsort, 0, unsort.length);
console.log(unsort)


let unsort2 = [1, 7, 4, 5, 2, 3, 6];
MergeSort(unsort2, 0, unsort2.length);
console.log(unsort2)


let unsort3 = [1, 3, 19, 10, 8, 2, 6, 4, 4];
MergeSort(unsort3, 0, unsort3.length);
console.log(unsort3)