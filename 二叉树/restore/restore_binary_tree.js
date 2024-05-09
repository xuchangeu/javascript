import TreeNode from "../../utility/TreeNode.js"
import Queue from "../../utility/Queue.js"


var byDepth = function (arr) {
    if (!arr.length) {
        return null;
    }

    const q = new Queue()
    let root = new TreeNode(arr.shift());

    q.offer(root)

    while(arr.length) {
        let node = q.poll()
        let children = arr.splice(0,2);
        
        let left = null,
            right = null 
        if(children[0] !== null) {
            left = new TreeNode(children[0])
        }

        if(children[1] !== null) {
            right = new TreeNode(children[1])
        }

        node.left = left
        node.right = right
        
        if(left != null) {
            q.offer(left)
        }
        
        if(right != null) {
            q.offer(right);
        }
        
    }

    return root;
}



export {
    byDepth
}