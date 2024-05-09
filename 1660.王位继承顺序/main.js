/**
 * @param {string} kingName
 */
var ThroneInheritance = function(kingName) {
    this.kingName = kingName
    this.tree = new Map();
    this.deathList = [];
    this.tree.set(kingName, []);
};

/** 
 * @param {string} parentName 
 * @param {string} childName
 * @return {void}
 */
ThroneInheritance.prototype.birth = function(parentName, childName) {
    if(!this.tree.get(parentName)){
        this.tree.set(parentName, [])
    }
    this.tree.get(parentName).push(childName);
};

/** 
 * @param {string} name
 * @return {void}
 */
ThroneInheritance.prototype.death = function(name) {
    this.deathList.push(name);
};

/**
 * @return {string[]}
 */
ThroneInheritance.prototype.getInheritanceOrder = function() {
    
    let self = this;
    let result = [];
    var preorder = function(parent){
        if(!self.tree.get(parent)) {
            if(self.deathList.indexOf(parent) == -1) {
                result.push(parent);
            }
            
            return;
        }

        //先根
        if(self.deathList.indexOf(parent) == -1) {
            result.push(parent);
        }
        let children = self.tree.get(parent);
        for(let c of children) {
            preorder(c);
        }

    }

    preorder("king", [])
    return result;
};



let throne = new ThroneInheritance("king");
throne.birth("king", "clyde")
throne.birth("clyde", "shannon")
throne.birth("shannon", "scott")
throne.birth("king", "keith")
throne.birth("clyde", "joseph")
throne.death("clyde");

console.log(throne.getInheritanceOrder());