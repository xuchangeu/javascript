
/**给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

有效 二叉搜索树定义如下：

节点的左
子树
只包含 小于 当前节点的数。
节点的右子树只包含 大于 当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树
**/

//树中节点数目范围在[1, 10^4] 内
//-231 <= Node.val <= 231 - 1


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
import TreeNode from "../utility/TreeNode.js"

// var isValidBST = function(root){
//     let result = true;
//     if(!!root.left) {
//         result = result && isValidBST(root.left);
//     }

//     if(!!root.right) {
//         result = result && isValidBST(root.right);
//     }

//     //判断当前值与子节点
//     if(!!root.left && root.val <= root.left.val){
//         result = false;
//     }

//     if(!!root.right && root.val >= root.right.val){
//         result = false;
//     }

//     if(!!root.left && root.val <= root.left.max) {
//         result = false;
//     }

//     if(!!root.right && root.val >= root.right.min) {
//         result = false;
//     }
    

//     if(!!root.left && root.left.min){
//         root.min = root.left.min;
//     }else if(!root.left){
//         root.min = root.val;
//     }

//     if(!!root.right && root.right.max){
//         root.max = root.right.max;
//     }else if(!root.right) {
//         root.max = root.val;
//     }

//     return result;
// }



var isValidBST = function(root){
    if(root == null) {
        return true;
    }

    return isValidBST(root.left) && isValidBST(root.right) && isValidValue(root);

}


var isValidValue = function(root){

    if(root.left?.max > root.val || root.right?.min < root.val) {
        return false;
    }

     if(!!root.left && root.left.min){
        root.min = root.left.min;
    }else if(!root.left){
        root.min = root.val;
    }

    if(!!root.right && root.right.max){
        root.max = root.right.max;
    }else if(!root.right) {
        root.max = root.val;
    }

    // if(root.left && root.min >= root.val || root.right && root.max <= root.val) {
    //     return false;
    // }
    return true;
}



// let n1=new TreeNode(10);
// let n2=new TreeNode(8);
// let n3=new TreeNode(100);
// let n4=new TreeNode(6);
// let n5=new TreeNode(9);
// let n6=new TreeNode(20);
// let n7=new TreeNode(110);
// let n8=new TreeNode(5);
// let n9=new TreeNode(7);
// let n10=new TreeNode(8.5);
// let n11=new TreeNode(9.5);
// let n12=new TreeNode(5.5);
// let n13=new TreeNode(6.5);

// n1.left = n2;
// n1.right = n3;
// n2.left = n4;
// n2.right = n5;
// n3.left = n6;
// n3.right = n7;
// n4.left = n8;
// n4.right = n9;
// n5.left = n10;
// n5.right = n11;
// n8.right = n12;
// n9.left = n13;

let n1=new TreeNode(5);
let n2=new TreeNode(1);
let n3=new TreeNode(4);
let n4=new TreeNode(3);
let n5=new TreeNode(6);

n1.left = n2;
n1.right = n3;
n3.left = n4;
n3.right = n5;

// let n1 = new TreeNode(2)
// let n2 = new TreeNode(1)
// let n3 = new TreeNode(3)

// n1.left = n2;
// n1.right = n3;


isValidBST(n1);

