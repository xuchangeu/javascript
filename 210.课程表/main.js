var findOrder = function(numCourses, prerequisites) {
    
    const edge = Array.from({length:numCourses}, ()=>{return []});
    const indeg = Array.from({length:numCourses}).fill(0);


    for(let i in prerequisites) {
        edge[prerequisites[i][1]].push(prerequisites[i][0]);
        ++indeg[prerequisites[i][0]];
    }

    const queue = [],
          result = [];
    for(let i in indeg) {
        if(indeg[i] == 0){
            queue.push(parseInt(i));
        }
    }

    while(!!queue.length) {
        const u = queue.shift();
        result.push(u)
        for(let i=0; i<edge[u].length; i++){
            --indeg[edge[u][i]];
            if(indeg[edge[u][i]] == 0) {
                queue.push(edge[u][i]);
            }
        }
    }

    if(result.length == numCourses) {
        return result;
    }else{
        return [];
    }
};

console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]));