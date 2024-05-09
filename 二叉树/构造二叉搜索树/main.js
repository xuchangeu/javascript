import TreeNode from '../../utility/TreeNode.js'
import isValidBST from '../ValidBST/main.js';

class BSTTree {
    constructor(arr) {
        //this._arr = arr.sort((a, b) => { return a - b });
        this._arr = arr;
        this._root = this._init()
    }

    _init() {
        if(!this._arr.length) {
            return null;
        }
        return this._genTree(this._arr);
    }

    _genTree(arr) {
        const rootIndex = Math.floor(arr.length / 2);
        const root = new TreeNode(arr[rootIndex]);
        const left = arr.slice(0, rootIndex);
        const right = arr.slice(rootIndex + 1, arr.length);
        
        if(left.length)
            root.left = this._genTree(left);

        if(right.length)
            root.right = this._genTree(right);
        return root;
    }

    insert(value) {
        this._arr.push(value);
        this._root = this._genTree(this._arr);
    }

    delete(value) {
        
    }

    search(value) {

    }
}

const arr = [];
const length = Math.pow(10, 6)

for(let i=0; i< length; i++) {
    arr.push(Math.floor(Math.random() * 1000));
}

console.time("build-bst");

let t = new BSTTree(arr);

console.timeEnd("build-bst");

console.time("valid-bst");

console.log(isValidBST(t));

console.timeEnd("valid-bst")






let count = Math.pow(10,9)

console.log(count)


const barr = [];
for(let i=0; i< Math.pow(10,9); i++) {
    barr.push(i);
}


console.time("start");

console.log(barr[3])
console.log(barr[0])
console.log(barr[9999999])

console.timeEnd("start");
