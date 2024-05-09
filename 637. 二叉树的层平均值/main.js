import Queue from "../utility/Queen.js"

//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


let n1 = new TreeNode(3)
let n2 = new TreeNode(9)
let n3 = new TreeNode(20)
let n4 = new TreeNode(15)
let n5 = new TreeNode(7)

n1.left = n2;
n1.right = n3;
n3.left = n4;
n3.right = n5;


var averageOfLevels = function (root) {
    //define arr
    let arr = []
    //广度遍历
    let queen = new Queue()
    queen.offer(root)

    while(!!queen.size()) {
        let res = []
        let size = queen.size()

        for(let i=0; i<size; i++){
            let node = queen.poll();
            res.push(node.val)

            if(!!node.left) {
                queen.offer(node.left);
            }

            if(!!node.right) {
                queen.offer(node.right);
            }
        }

        
        arr.push(res)
    }

    for (let i=0; i<arr.length; i++) {
        let sum = 0;
        for(let j=0; j<arr[i].length; j++) {
            sum += arr[i][j]
        }
        arr[i] = sum / arr[i].length
    }

    return arr
}


averageOfLevels(n1)