/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.queen = [];
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let index = this.queen.indexOf(key);
    if(index > -1) {
        let element = this.queen.splice(index,1)[0];
        this.queen.push(element);
        return this.map.get(key);
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(!!this.map.get(key)) {
        let index = this.queen.indexOf(key);
        this.queen.splice(index,1)[0];
    }else if(this.map.size >= this.capacity) {
        let key = this.queen.shift();
        this.map.delete(key);
    }
    this.queen.push(key);
    this.map.set(key,value)

};


let l = new LRUCache(2);
l.put(2,1);
l.put(2,2);
l.get(2);
l.put(1,1);
l.put(4,1);
console.log(l.get(2))


