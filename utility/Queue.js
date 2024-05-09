//一个无上限队列的实现
var Queue = function(){
    this.queue = new Array()
}

Queue.prototype.offer = function(item){
    this.queue.push(item)
}

Queue.prototype.poll = function(){
    if(this.queue.length > 0) {
        return this.queue.shift()
    }
}

Queue.prototype.size = function(){
    return this.queue.length
}


export default Queue
