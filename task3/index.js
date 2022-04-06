function isValidParentheses(input) {
    if (input.length >= 0 && input.length <= 100) {
        let counter = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i] === "(") {
                counter++;
            } else if (input[i] === ")") {
                counter--;
            }
            if (counter < 0) {
                return false;
            }
        }
        return counter === 0;
    }
    return false;
}


console.log(isValidParentheses("()"));
console.log(isValidParentheses(")(()))"));
console.log(isValidParentheses("("));
console.log(isValidParentheses("(())((()())())"));
