import TreeNode from '../utility/TreeNode.js'

var findMode = function(root) {
    if(!root) return [];

    let temp = new Map(),
        stack = [root],
        result = [];
    
    while(stack.length) {
        const e = stack.pop();
        if(!temp.get(e.val)) {
            temp.set(e.val, 0);
        }
        temp.set(e.val, temp.get(e.val)+1);
        
        if(e.left) {
            stack.push(e.left)
        }
        if(e.right) {
            stack.push(e.right)
        }
    }

    let max = 0;

    for(let [k, v] of temp) {
        console.log(k, "==>", v);
        // let max = 0;
        // if(result.length){
        //     max = result[0];
        // }
        if(v > max){
            max = v;
            result = [];
            result.push(parseInt(k));
        }else if(v == max){
            result.push(parseInt(k));
        }
    }

    return result;
};



let n1 = new TreeNode(2);
let n2 = new TreeNode(3);
let n3 = new TreeNode(4);
let n4 = new TreeNode(5);
let n5 = new TreeNode(6);

n1.right = n2;
n2.right = n3;
n3.right = n4;
n4.right = n5;

findMode(n1);
