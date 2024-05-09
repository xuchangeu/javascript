/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


import TreeNode from '../utility/TreeNode.js'

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if(nums.length == 0) {
        return
    }
    
    let max = -Infinity,
        index = -1;
    for(let i=0; i<nums.length; i++){
        if(nums[i] > max) {
            max = nums[i];
            index = i;
        }
    }

    let left = nums.slice(0, index),
        right = nums.slice(index+1);

    var n = new TreeNode(max);

    if(!!left.length) {
         n.left = constructMaximumBinaryTree(left);
    }

    if(!!right.length) {
        n.right = constructMaximumBinaryTree(right);
    }

    return n;

};


constructMaximumBinaryTree([3,2,1,6,0,5])