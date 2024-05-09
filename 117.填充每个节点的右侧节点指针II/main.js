



// Definition for a Node.
 function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
};


/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(root == null) {
        return null;
    }

    let arr = new Array()
    arr = loop(root, 0, arr)
    for(let i=0; i < arr.length; i++) {
        let arrb = arr[i];
        for(let j=0; j<arrb.length; j++) {
            if(j < arrb.length - 1) {
                arrb[j].next = arrb[j+1]
            }else{
                arrb[j].next = null;
            }
        }
    }

    return arr[0][0]
};


var loop = function(root, depth, arr){
    depth ++;
    if(!arr[depth-1]) {
        arr[depth-1] = new Array()
    }

    arr[depth-1].push(root);
    if(!!root.left) {
        arr = loop(root.left, depth, arr);
    }

    if(!!root.right) {
        arr = loop(root.right, depth, arr);
    }

    return arr;
}

let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
let n5 = new Node(5);
let n6 = new Node(6);
let n7 = new Node(7);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.right = n7;

connect(n1);
