// 给你无向 连通 图中一个节点的引用，请你返回该图的 深拷贝（克隆）。

// 图中的每个节点都包含它的值 val（int） 和其邻居的列表（list[Node]）。

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }
 

// 测试用例格式：

// 简单起见，每个节点的值都和它的索引相同。例如，第一个节点值为 1（val = 1），第二个节点值为 2（val = 2），以此类推。该图在测试用例中使用邻接列表表示。

// 邻接列表 是用于表示有限图的无序列表的集合。每个列表都描述了图中节点的邻居集。

// 给定节点将始终是图中的第一个节点（值为 1）。你必须将 给定节点的拷贝 作为对克隆图的引用返回。


import { Node } from "../utility/graph/Node.js";

var cloneGraph = function(node) {
    let visited = new Map();
    let result = dfs(node, visited);
    return result;
};

var dfs = function(node,visited){
    let key = node.val;
    let cloneNode = visited.get(key);
    if(!cloneNode){
        cloneNode = new Node(key);
        visited.set(key, cloneNode);

        let neighbors = [];
        for(let i=0; i<node.neighbors.length; i++){
            let nb = dfs(node.neighbors[i], visited);
            neighbors.push(nb);
        }

        cloneNode.neighbors = neighbors;
    }

    return cloneNode;

}


var n1 = new Node(1);
var n2 = new Node(2);
var n3 = new Node(3);
var n4 = new Node(4);

n1.neighbors = [n2,n4]
n2.neighbors = [n1,n3]
n3.neighbors = [n2,n4]
n4.neighbors = [n1,n3]

cloneGraph(n1);


