
//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

let n1 = new TreeNode(543)
let n2 = new TreeNode(384)
let n3 = new TreeNode(652)
let n4 = new TreeNode(445)
let n5 = new TreeNode(699)

n1.left = n2;
n1.right = n3;
n2.right = n4;
n3.right = n5;
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
    let arr = getMiniumNumbers(root, []);
    
    arr.sort(function(a,b){
        return a-b;
    })
    console.log("the arr is:", arr)
    let min = Infinity;
    for(let i=0; i<arr.length -1; i++) {
        min = Math.min(min, arr[i+1] - arr[i])
    }
    return min;
};


var getMiniumNumbers = function (root, arr) {

    let val = root.val

    console.log(val)

    if (!!root.left) {
        arr = getMiniumNumbers(root.left, arr);
    }

    if (!!root.right) {
        arr = getMiniumNumbers(root.right, arr);
    }

    arr.push(val)

    // if (arr.length < 2) {
    //     arr.push(val)
    //     // console.log(val, "--->" , arr)
    // } else {
    //     let abs1 = Math.abs(arr[0] - val),
    //         abs2 = Math.abs(arr[1] - val);
    //     // if(abs1 > abs2) {
    //     //     console.log(val, "--->" , arr)
    //     //     return [val,arr[1]]
    //     // }else if(abs1 <= abs){
    //     //     console.log(val, "--->" , arr)
    //     //     return [arr[0], val]
    //     // }
    //     let big = Math.max(arr[0], arr[1])
    //     let small = Math.min(arr[0], arr[1])
    //     // console.log(val, "---->" , big, small)
    //     if (val > big) {
    //         if ((val - big) > (big - small)) {
    //             return [big, small];
    //         } else {
    //             return [val, big]
    //         }
    //     } else {
    //         if (Math.abs(big - val) > Math.abs(small - val)) {
    //             return [small, val];
    //         } else {
    //             return [big, val];
    //         }
    //     }
    // }

    

    return arr
}


console.log(getMinimumDifference(n1));