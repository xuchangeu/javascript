
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
    return true;
}


export default isValidBST