function TreeNode2(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}



/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(postorder.length == 0) {
        return null;
    }

    let rootVal = postorder.pop(),
        rootIndex = inorder.indexOf(rootVal);
    let leftPart = inorder.slice(0,rootIndex),
        rightPart = [];
    
    if(rootIndex < inorder.length - 1) {
        rightPart = inorder.slice(rootIndex + 1);
    }

    let root = new TreeNode2(rootVal);

    if(rightPart.length > 0) {
        root.right = buildTree(rightPart, postorder);
    }

    if(leftPart.length > 0) {
        root.left = buildTree(leftPart, postorder);
    }

    return root;
};

let inorder = [9,3,15,20,7],    
    postorder = [9,15,7,20,3];


buildTree(inorder, postorder);
