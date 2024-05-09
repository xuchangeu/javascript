
//广度优先，遍历所有图中顶点, 打印出广度优先遍历的顺序
let BFS = function(){
    let stack = [5],
        visited = {5:5};
    let result = [];


    while(!!stack.length) {
        const c = stack.pop();
        result.push(c);
        for(let i=0; i<maze[c-1].length; i++){
            if(!visited[i+1] && maze[c-1][i] == 1){
                stack.push(i+1);
                visited[i+1] = i+1;
            }
        }
    }

    console.log("result ->", result);
}


let maze = [
    [0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
]

