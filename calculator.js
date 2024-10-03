/* create initial functions: add, subtract, divide, multiply */

const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const divide = (a,b) => a/b;
const multiply = (a,b) => a*b;

// TODO: add scientific functions later or at least extras such as exponents
// TODO: Handle negatives, NaN values, errors

// console.log(add(-5,3));
// console.log(subtract(5,-3));
// console.log(divide(6,4));
// console.log(multiply(5,3))

let firstNumber;
let secondNumber;
let operator;

const operate = (a,o,b) => {
    const operations = {
        '+': add,
        '-': subtract,
        '/': divide,
        '*': multiply
    };

    return operations[o] ? operations[o](a, b) : null;
}

// console.log(operate(5,'*',3));
// console.log(1/6);