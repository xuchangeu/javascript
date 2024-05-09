function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


var rightSideView = function(root) {
    let arr = [],
        res = [];

    arr = loop(root, -1 , arr);
    console.log(arr);
    for(let i=0; i<arr.length; i++) {
        res.push(arr[i][arr[i].length-1]);
    }

    return res;

};


var loop = function(root, depth , arr){
    depth ++;
    if(!arr[depth]) {
        arr[depth] = [];
    }

    console.log(root.val);

    arr[depth].push(root.val);
    if(!!root.left) {
       arr = loop(root.left, depth, arr);
    }

    if(!!root.right) {
        arr = loop(root.right, depth, arr);
    }

    return arr;
}


let t1 = new TreeNode(1);
let t2 = new TreeNode(2);
let t3 = new TreeNode(3);
let t4 = new TreeNode(5);
let t5 = new TreeNode(4);

t1.left = t2;
t1.right = t3;
t2.right = t4;
t3.right = t5;

rightSideView(t1);