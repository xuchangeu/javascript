/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    //??? 没有修课前置条件，那么就无论多少门课程都可以修完???
    if(prerequisites.length == 0) {
        return true;
    }

    //存放边和入度数量
    const edgs = Array.from({length: numCourses}, ()=>{return []}),
        indeg = Array(numCourses).fill(0);

    for(let i in prerequisites) {
        edgs[prerequisites[i][1]].push(prerequisites[i][0]);
        ++indeg[prerequisites[i][0]];
    }

    const queue = [];
    for(let i in indeg) {
        indeg[i] === 0 && queue.push(i);
    }

    let visited = 0;
    while(!!queue.length) {
        ++visited;
        const u = queue.shift();
        for(let i in edgs[u]) {
            --indeg[edgs[u][i]];
            if(indeg[edgs[u][i]] === 0){
                queue.push(edgs[u][i]);
            }
        }
    }

    return visited == numCourses;
  
};




canFinish(20, [[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]])