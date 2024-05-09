//选择游戏是这样的，有三扇门，三扇门中有一扇后面放着宝藏，其他两扇是陷阱。
//你先选择其中一扇门，接着管理员会帮助你从其余的两扇门中排除一个是陷进的选项
//然后请问你是否会重新选择另外一扇门

//3扇门中随机选择一个
function solution1(){
    //init three doors;
    let arr = Array.from({length : 3}).fill(0);
    let random =  Math.floor(Math.random() * 3)
    arr[random] = 1;

    //choose

    let choose = Math.floor(Math.random() * 3);
    return arr[choose] == 1
}


//根据规格，第二次选择被排除后剩下的另外一扇
function solution2(){
    //init three doors;
    let doors = Array.from({length : 3}).fill(0);
    let random =  Math.floor(Math.random() * 3)
    doors[random] = 1;


    //先选择一次
    let choice1 = Math.floor(Math.random() * 3);
    
    for(let i=0; i<doors.length; i++) {
        if(doors[i] == 0 && i != choice1) {
            doors[i] = 2;
            break;
        }
    }

    //剩下非2 的选项，有两个, 要选 !choice1 的选项
    let choice2 = 0;
    for(let i=0; i<doors.length; i++) {
        if(doors[i] != 2 && i != choice1) {
            choice2 = i;
            break;
        }
    }

    return doors[choice2] == 1;
}




//根据规则，排除一个选项后，仍旧选择原来的那个选项
function solution3() {
    
    //init three doors;
    let doors = Array.from({length : 3}).fill(0);
    let random =  Math.floor(Math.random() * 3)
    doors[random] = 1;


    //先选择一次
    let choice1 = Math.floor(Math.random() * 3);
    
    for(let i=0; i<doors.length; i++) {
        if(doors[i] == 0 && i != choice1) {
            doors[i] = 2;
            break;
        }
    }

    // //剩下非2 的选项，有两个, 要选 !choice1 的选项
    // let choice2 = 0;
    // for(let i=0; i<doors.length; i++) {
    //     if(doors[i] != 2 && i != choice1) {
    //         choice2 = i;
    //         break;
    //     }
    // }

    return doors[choice1] == 1;
}






function solution4() {
    
    //init three doors;
    let doors = Array.from({length : 3}).fill(0);
    let random =  Math.floor(Math.random() * 3)
    doors[random] = 1;


    //先选择一次
    let choice1 = Math.floor(Math.random() * 3);
    
    for(let i=0; i<doors.length; i++) {
        if(doors[i] == 0 && i != choice1) {
            doors[i] = 2;
            break;
        }
    }

    // //剩下非2 的选项，有两个, 要选 !choice1 的选项
    // let choice2 = 0;
    // for(let i=0; i<doors.length; i++) {
    //     if(doors[i] != 2 && i != choice1) {
    //         choice2 = i;
    //         break;
    //     }
    // }

    return doors[choice1] == 1;
}




let win = 0,
    all = Math.pow(10, 6);

for(let i=0; i<all; i++) {
    let result = solution1()
    if(result == 1) {
        win ++;
    }
}

console.log("solution1 ->", win / all);

win = 0;
for(let i=0; i < all; i ++) {
    let result = solution2();
    if(result == 1) {
        win ++;
    }
}

console.log("solution2 ->", win / all);

win = 0;
for(let i=0; i < all; i ++) {
    let result = solution3();
    if(result == 1) {
        win ++;
    }
}

console.log("solution3 ->", win / all);
