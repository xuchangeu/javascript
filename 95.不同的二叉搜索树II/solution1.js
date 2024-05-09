// 给你一个整数 n ，请你生成并返回所有由 n 个节点组成且节点值从 1 到 n 互不相同的不同 二叉搜索树 。可以按 任意顺序 返回答案。

 

// 示例 1：


// 输入：n = 3
// 输出：[[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]


// 示例 2：

// 输入：n = 1
// 输出：[[1]]


import TreeNode from '../utility/TreeNode.js';


/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if( n == 0) {
        return []
    }  

    var genTreeList = function(start, end){
        let list = [];
        if (start > end) {
            list.push(null);
        }
        for(let idx = start; idx <= end; idx ++) {
            let leftList = genTreeList(start, idx - 1);
            let rightList = genTreeList(idx + 1, end);
            for (const left of leftList) {
                for (const right of rightList) {
                    let root = new TreeNode(idx);
                    root.left = left;
                    root.right = right;
                    list.push(root);
                }
            }
        }
        return list;
    }

    let list =  genTreeList(1, n);
    return list;
}


generateTrees(3);


