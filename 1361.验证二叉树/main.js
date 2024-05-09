/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function (n, leftChild, rightChild) {
    //该问题可以抽象为判断一个有向图是否有环的问题
    //构造一个 n*n 的矩阵，用来表示 x->y 的边, 如 [1,-1,3,-1] [2,-1,-1,-1] 可以构造为
    //[[0,1,1,0],[0,0,0,0],[0,0,0,1],[0,0,0,0]], [0,1],[2,3],[0,2] 为有向边;

    let maze = initGraph(n, leftChild, rightChild);
    let top = findTop(maze, 0 , n, new Map());
    return bfs(maze, top, n);
};

var findTop = function(maze, top, n, visited){
    visited.set(top, top);
    for(let i=0; i<n; i++){
        if(maze[i][top] == 1 && !visited.get(top)){
            top = findTop(maze, i, n, visited);
        }
    }
    return top;
}

var bfs = function (maze, start, n) {
    let visited = new Map,
        queue = [start];
    // visited[start] = start;
    visited.set(start, start);

    while (!!queue.length) {
        let c = queue.pop();
        for (let i = 0; i < maze[c].length; i++) {
            if (maze[c][i] == 1) {
                if (visited.get(i) != undefined) {
                    return false;
                } else {
                    queue.push(i);
                    visited.set(i, i);
                }
            }
        }
    }



    return visited.size == n;
}


var initGraph = function (n, leftChild, rightChild) {
    let arr = Array.from({ length: n }, () => { return [] });
    for (let i = 0; i < n; i++) {
        arr[i] = Array.from({ length: n }).fill(0);
    }

    for (let i = 0; i < leftChild.length; i++) {
        leftChild[i] >= 0 && (arr[i][leftChild[i]] = 1);
    }

    for (let i = 0; i < rightChild.length; i++) {
        rightChild[i] >= 0 && (arr[i][rightChild[i]] = 1);
    }

    return arr;
}


// validateBinaryTreeNodes(4,[1,-1,3,-1],[2,3,-1,-1]);

// validateBinaryTreeNodes(2, [1, 0], [-1, -1]);
validateBinaryTreeNodes(4,[3,-1,1,-1], [-1,-1,0,-1]);