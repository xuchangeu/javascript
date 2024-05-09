


var object = {
    "a" : "a",
    "b" : {
        "c" : "c",
        "d" : "d",
        "e" : function() {console.log("this is e")}
    }
}

function flattenObj(obj){
    for (var k in obj) {
        v = obj[k]
        if (isObject(v)) {
            flattenObj(v)
            delete obj[k]
        } else {
            object[k] = v
        }
    }
}

function isObject(obj) {
    return Object.prototype.toString.call(obj).slice(8,-1) == "Object"
}


flattenObj(object)
console.log(object.e())