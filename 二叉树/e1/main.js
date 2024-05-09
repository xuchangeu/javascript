//遍历这个二叉树

function MyNode(val, left, right) {
    this.val = val;
    this.left = !!left ? left : null;
    this.right  = !!right ? right : null;
    return this;
}

//构建node
let node1 = new MyNode(1)
let node1_1 = new MyNode(3)
let node1_2 = new MyNode(5)
let node1_1_1 = new MyNode(7)
let node1_1_2 = new MyNode(9)
let node1_1_1_1 = new MyNode(11)

node1.left = node1_1;
node1.right = node1_2;
node1_1.left = node1_1_1;
node1_1.right = node1_1_2;
node1_1_1.left = node1_1_1_1;


var maxDepth = function(root) {
    let maxDepthValue = 0;
    return loop(root, 0, maxDepthValue)
};


function loop(current, currentDepth){
    currentDepth ++;
    let left = current.left;
    let right = current.right;
    let max = currentDepth;
    if(!!left) {
        max = Math.max(max,loop(left, currentDepth));
    }

    if(!!right){
        max =  Math.max(max,loop(right, currentDepth));
    }
    return max;
}

console.log("max depth :", maxDepth(node1));