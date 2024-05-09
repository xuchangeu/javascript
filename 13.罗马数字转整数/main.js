var romanToInt = function(s) {
    let result = new Array()
    for (let i=0; i < s.length; i++) {
        let currentLetter = s[i]
        let nextLetter = ""
        let demical = 0
        if (i <= s.length - 2) {
            nextLetter = s[i + 1]
        }
        switch (currentLetter) {
            case "I" :
                if (nextLetter == "V" || nextLetter == "X") {
                    demical = -1
                } else {
                    demical = 1
                }
                break;
            case "V" : 
                demical = 5
                break
            case "X" :
                if (nextLetter == "L" || nextLetter == "C") {
                    demical = -10
                } else {
                    demical = 10
                }
                break 
            case "L" :
                demical = 50
                break
            case "C" :
                if (nextLetter == "D" || nextLetter == "M") {
                    demical = -100
                }else {
                    demical = 100
                }
                
                break
            case "D" :
                demical = 500
                break
            case "M" :
                demical = 1000
                break
            default :
                break
        }

        console.log(demical)

        result.push(demical)
    }

    console.log(result)
    let resultDemical = 0;
    for (let i=0 ;i < result.length; i++) {
        resultDemical += result[i]
    }

    return resultDemical
};



romanToInt('LVIII')