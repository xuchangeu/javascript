/**Definition for a binary tree node.
**/
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
/**
 */
var lowestCommonAncestor = function (root, p, q) {
    let r = loop(root, p, q);
    return r[2];
};

var loop = function (root, p, q) {
    let e = [];
    if (!!root.left) {
        let el = loop(root.left, p, q);
            e = el;
        if (!!e[0] && !!e[1]) {
            return e.concat(root);
        }
    }

    if (!!root.right) {
        let er = loop(root.right, p, q);
        if (!!e.length) {
            // e = [er[0] || e[0], er[1] || e[1]];
            e[0] = er[0] || e[0];
            e[1] = er[1] || e[1];
            e = e.concat(er.splice(2));
        } else {
            e = er;
        }
        if (!!e[0] && !!e[1]) {
            return e.concat(root);
        }
    }


    let containP = (root.val == p.val);
    let containQ = (root.val == q.val);

    if (!!e.length) {
        e = [e[0] || containP, e[1] || containQ];
        containP = e[0];
        containQ = e[1];
        if (!!e[0] && !!e[1]) {
            return e.concat(root);
        }
    }

    return [containP, containQ]
}


let n1 = new TreeNode(3);
let n2 = new TreeNode(5);
let n3 = new TreeNode(1);
let n4 = new TreeNode(6);
let n5 = new TreeNode(2);
let n6 = new TreeNode(0);
let n7 = new TreeNode(8);
let n8= new TreeNode(7);
let n9 = new TreeNode(4);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;
n5.left = n8;
n5.right = n9;


console.log(lowestCommonAncestor(n1,n6,n7).val)
