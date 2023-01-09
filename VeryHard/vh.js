function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

let x = parseInt(prompt("Enter a number"))
let operator = prompt("Enter an operator (+ , - , * , / )")
let y = parseInt(prompt("Enter a number"))

let answer;

if (operator === "+") {
    answer = add(x, y);
}
else if (operator === "-") {
    answer = subtract(x, y);
}
else if (operator === "*") {
    answer = multiply(x, y);
} else if (operator === "/") {
    answer = divide(x, y);
}

console.log(`${x} ${operator} ${y} = ${answer}`);
let answerPrompt = alert(`Final Answer: ${answer}`)