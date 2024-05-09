var fullJustify = function(words, maxWidth) {
    let result = []
    console.log(words.length > 0)
    while(words.length > 0) {
        let index = getWordsIndexInLine(words,maxWidth)
        result.push(words.splice(0,index))
    }

    for (var i=0; i<result.length; i++){
        //要填几个空格
        let allSpace = maxWidth - result[i].join("").length
        let extraSpace = 0
        if (result[i].length > 0) {
            extraSpace =  allSpace % (result[i].length - 1)
        }

        //单行只包含一个单词，不管是不是在最后一行，都把空格加在最后
        if (result[i].length == 1) {
            for (var k=0; k<allSpace; k++){
                result[i][0] += " "
            }
        }else {
            //单行超过一个单词，分两种情况，在最后一行或者不在
            if (i == result.length -1) {
                //最后一行
                for(j =0; j< result[i].length -1; j++){
                    result[i][j] += " "
                }
                let leftSpace = allSpace - (result.length-2)
                let spaces = getSpaces(leftSpace)
                result[i][result[i].length -1] += spaces
            }else {
                let spaceNumber = Math.floor(allSpace / (result[i].length - 1))
                let spaces =  getSpaces(spaceNumber)
                for (let j=0; j<result[i].length-1; j++) {
                    if(j < extraSpace) {
                        result[i][j] += spaces + " "
                    }else {
                        result[i][j] += spaces
                    }
                }
            }
        }
    }


    for (let i=0; i<result.length; i++){
        result[i] = result[i].join('')
    }

    console.log(result)

    return result
};


var getSpaces = function(count){
    let space = ""
    let index = 0;
    while (index < count) {
        space += " "
        index ++
    }
    return space
}

var getWordsIndexInLine = function(words,maxWidth){
    let width = 0
    let index = 0;
    while (width < maxWidth) {
        if(index > words.length -1) {
            break
        }

        if (index == 0){
            width += words[index].length
        }else if (index != 0){
            width += words[index].length + 1
        }
        if(width <= maxWidth) {
            index ++
        }
        
    }

    return index
}



// fullJustify( ["This", "is", "an", "example", "of", "text", "justification."], 16)
fullJustify(["What","must","be","acknowledgment","shall","be"], 16)
// fullJustify(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"],20)