

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if(preorder.length == 0) {
        return null;
    }

    let rootVal = preorder.splice(0,1)[0],
        rootIndex = inorder.indexOf(rootVal);
    let leftPart = inorder.slice(0,rootIndex),
        rightPart = [];

    
    if(rootIndex < inorder.length - 1) {
        rightPart = inorder.slice(rootIndex + 1)
    }

    let root = new TreeNode(rootVal);
    if(leftPart.length > 0) {
        root.left = buildTree(preorder, leftPart);
    }

    if(rightPart.length > 0) {
        root.right = buildTree(preorder, rightPart);
    }
    
    return root;
};


let a = new TreeNode();

let preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
buildTree(preorder, inorder);


// let t1 = new TreeNode(3)
// let t2 = new TreeNode(9)
// let t3 = new TreeNode(20)
// let t4 = new TreeNode(15)
// let t5 = new TreeNode(7)


// t1.left = t2;
// t1.right = t3;
// t3.left = t4;
// t3.right = t5;