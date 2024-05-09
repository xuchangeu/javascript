// 给定一个由表示变量之间关系的字符串方程组成的数组，每个字符串方程 equations[i] 的长度为 4，并采用两种不同的形式之一："a==b" 或 "a!=b"。在这里，a 和 b 是小写字母（不一定不同），表示单字母变量名。

// 只有当可以将整数分配给变量名，以便满足所有给定的方程时才返回 true，否则返回 false。 



// 示例 1：

// 输入：["a==b","b!=a"]
// 输出：false
// 解释：如果我们指定，a = 1 且 b = 1，那么可以满足第一个方程，但无法满足第二个方程。没有办法分配变量同时满足这两个方程。
// 示例 2：

// 输入：["b==a","a==b"]
// 输出：true
// 解释：我们可以指定 a = 1 且 b = 1 以满足满足这两个方程。
// 示例 3：

// 输入：["a==b","b==c","a==c"]
// 输出：true
// 示例 4：

// 输入：["a==b","b!=c","c==a"]
// 输出：false
// 示例 5：

// 输入：["c==c","b==d","x!=z"]
// 输出：true

var equationsPossible = function (equations) {
    //差并集初始化

    let u = new Union();

    //检查不等式，
    for (let i = 0; i < equations.length; i++) {
        if (equations[i].substring(1, 3) == "==") {
            let a = equations[i][0];
            let b = equations[i][3];
            
            u.union(a,b);
        }
    }

    for (let i = 0; i < equations.length; i++) {
        if (equations[i].substring(1, 3) == "!=") {
            let a = equations[i][0];
            let b = equations[i][3];
            
            if(u.isConnected(a,b)){
                return false;
            }
        }
    }

    return true;
};

function Union(n) {
    this.parent = {}
    for (let i = 97; i < 97 + 26; i++) {
        this.parent[String.fromCharCode(i)] = String.fromCharCode(i);
    }
}

Union.prototype.find = function (x) {
    while (x != this.parent[x]) {
        this.parent[x] = this.parent[this.parent[x]];
        x = this.parent[x];
    }

    return x
}

Union.prototype.union = function (x, y) {
    const rootX = this.find(x),
        rootY = this.find(y);
    this.parent[rootX] = rootY;
}

Union.prototype.isConnected = function (x , y) {
    return this.find(x) == this.find(y);
}

let equations = ["a==d","d==a","c!=c","c==d","f==f","f==a"]
equationsPossible(equations);