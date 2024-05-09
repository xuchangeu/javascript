
//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}



let n1 = new TreeNode(1)
let n2 = new TreeNode(2)
let n3 = new TreeNode(2)
let n4 = new TreeNode(3)
let n5 = new TreeNode(4)
let n6 = new TreeNode(4)
let n7 = new TreeNode(3)

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7


/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    let leftTree = new TreeNode();
    leftTree.val = root.val;
    leftTree.left = root.left;
    leftTree.right = null;


    let rightTree = new TreeNode();
    rightTree.val = root.val;
    rightTree.right = root.right
    rightTree.left = null;
    rightTree = invertTree(rightTree);


    return isSameTree(leftTree, rightTree);

};


var invertTree = function (root) {
    if (!root) {
        return root
    }
    if (!!root.left) {
        invertTree(root.left);
    }

    if (!!root.right) {
        invertTree(root.right);
    }

    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    return root;
};


var isSameTree = function (p, q) {
    if (!p && !q) {
        return true;
    }

    if ((!p && !!q) || (!!p && !q)) {
        return false;
    }

    let leftEqual = (!!p.left == !!q.left);
    if (!leftEqual) {
        return false;
    }

    let rightEqual = (!!p.right == !!q.right);
    if (!rightEqual) {
        return false
    }

    if (p.val !== q.val) {
        return false
    }

    //left exist
    if (!!p.left) {
        let same = isSameTree(p.left, q.left)
        if (!same) {
            return false
        }
    }

    if (!!p.right) {
        let same = isSameTree(p.right, q.right);
        if (!same) {
            return false
        }
    }

    return true
};


isSymmetric(n1)