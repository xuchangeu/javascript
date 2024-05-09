function Node(val,neighbors){
    this.val = (val === undefined) ? 0 : val;
    this.neighbors = (neighbors === undefined) ? [] : neighbors;
}


export {
    Node,
}