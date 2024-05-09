

let arr = [1,2,3,4,5]
arr.forEach(function(item,index,arr){
    setTimeout(function(){
        console.log(item)
    }, index * 1000)
})

console.log("success")