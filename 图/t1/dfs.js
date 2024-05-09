

let visited = {}
function DFS(start,path) {
    visited[start] = start;
    path.push(start);
    for(let i=0;i<maze[start-1].length;i++){
        if(maze[start-1][i] == 1 && !visited[i+1]) {
            path = DFS(i+1,path);
        }
    }

    return path;
}




let maze = [
	[ 0, 1, 1, 0, 0 ],
	[ 0, 0, 1, 0, 1 ],
	[ 0, 0, 1, 0, 0 ],
	[ 1, 1, 0, 0, 1 ],
	[ 0, 0, 1, 0, 0 ]
];

for (let i = 0; i < 5; i++) {
    console.log(DFS(i+1,[]));
}