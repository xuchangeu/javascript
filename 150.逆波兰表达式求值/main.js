var evalRPN = function(tokens) {
    let stack = [];
    for(let i=0; i<tokens.length; i++) {
        if(["+","-","*","/"].includes(tokens[i])) {
            let num1 = stack.pop();
            let num2 = stack.pop();
            switch(tokens[i]) {
                case "+" :
                    stack.push(+num1 + +num2);
                    break;
                case "-" :
                    stack.push(+num2 - +num1);
                    break;
                case "*" :
                    stack.push(+num1 * +num2);
                    break;
                case "/":
                    let result = +num2 / +num1;
                    if(result < 0) {
                        result = Math.ceil(result);
                    }else {
                        result = Math.floor(result);
                    }
                    stack.push(result);
                default :
            } 
        }else{
            stack.push(tokens[i]);
        }
    }

    return stack[0];
}


// evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]);
evalRPN(["2","1","+","3","*"]);
evalRPN(["4","13","5","/","+"]);
// evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])
// evalRPN(["4","13","5","/","+"])
// evalRPN(["3","11","+","5","-"])