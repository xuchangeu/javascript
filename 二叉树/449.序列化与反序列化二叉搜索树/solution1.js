import { byDepth } from '../restore/restore_binary_tree.js'
import TreeNode from '../../utility/TreeNode.js';

/*
* @param {TreeNode} root
* @return {string}
*/
var serialize = function (root) {
    //console.log(root)
    if (!root) {
        return null;
    }

    let str = "";
    //使用中根

    var gen = function (root) {
        //console.log(root.val, root.left, root.right)
        if (!!root.left) {
            gen(root.left);
        }

        if (!!root.right) {
            gen(root.right);
        }

        str += root.val + ","
    }

    gen(root);

    //remove last comma
    str = str.substring(0, str.length - 1);
    return str;
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function (data) {
    if (!data) {
        return null;
    }
    const arr = data.split(",");
    var genTree = function (arr) {
        const v = parseInt(arr.splice(arr.length - 1, 1)[0]);
        const root = new TreeNode(v);
        const left = new Array()
        const right = new Array()


        for (let i = 0; i < arr.length; i++) {
            arr[i] = parseInt(arr[i]);
            if (arr[i] < v) {
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }

        if (left.length)
            root.left = genTree(left);

        if (right.length)
            root.right = genTree(right);
        return root;
    }

    return genTree(arr);
};





const input = [41, 37, 44, 24, 39, 42, 48, 1, 35, 38, 40, null, 43, 46, 49, 0, 2, 30, 36, null, null, null, null, null, null, 45, 47, null, null, null, null, null, 4, 29, 32, null, null, null, null, null, null, 3, 9, 26, null, 31, 34, null, null, 7, 11, 25, 27, null, null, 33, null, 6, 8, 10, 16, null, null, null, 28, null, null, 5, null, null, null, null, null, 15, 19, null, null, null, null, 12, null, 18, 20, null, 13, 17, null, null, 22, null, 14, null, null, 21, 23]
const root = byDepth(input);

let copy = deserialize(serialize(root));