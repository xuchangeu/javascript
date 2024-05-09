
import TreeNode from '../utility/TreeNode.js';

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {

    const answer = [];
    var backtrack = function(root, track, target){
        if(!root) {
            return;
        }

        track.push(root.val);
        target = target - root.val;

        if(!root.left && !root.right) {
            if(target == 0) {
                answer.push(track.slice());
            }
            track.pop();
            return;
        }
        
        const choices = [root.left, root.right];
        for(const c of choices) {
            if(!c) {
                continue;
            }
            if(c) {
                backtrack(c, track, target);
            }
        }

        track.pop();
    }

    backtrack(root, [], targetSum);
    return answer;
};


// let n1 = new TreeNode(5);
// let n2 = new TreeNode(4);
// let n3 = new TreeNode(8);
// let n4 = new TreeNode(11);
// let n5 = new TreeNode(13);
// let n6 = new TreeNode(4);
// let n7 = new TreeNode(7);
// let n8 = new TreeNode(2);
// let n9 = new TreeNode(5);
// let n10 = new TreeNode(1);

// n1.left = n2;
// n1.right = n3;
// n2.left = n4;
// n4.left = n7;
// n4.right = n8;
// n3.left = n5;
// n3.right = n6;
// n6.left = n9;
// n6.right = n10;

// console.log(pathSum(n1, 22));

// let root2 = new TreeNode(1);
// root2.left = new TreeNode(2);
// root2.right = new TreeNode(3);

// console.log(pathSum(root2, 5));

// let root3 = new TreeNode(1);
// root3.left = new TreeNode(2);

// console.log(pathSum(root3, 1));


let n1 = new TreeNode(1);
let n2 = new TreeNode(-2);
let n3 = new TreeNode(-3);
let n4 = new TreeNode(1);
let n5 = new TreeNode(3);
let n6 = new TreeNode(-2);
let n7 = new TreeNode(-1);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n4.left = n7;
n3.left = n6;

console.log(pathSum(n1, -1))

