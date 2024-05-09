/// 手写一个 Promise

var Promise = function(fn){
    if (fn.length != 2) {
        return new Error("arguments of fn not equal 2");
    }
    this.status = "pending"
    return this;
}

Promise.prototype.then = function(fnsuccess , fnerror){
    
}




var p = new Promise(function(resolve, reject){

})