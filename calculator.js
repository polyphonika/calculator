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

const display = document.getElementById('display');
// const buttons = document.getElementsByClassName('button');
const buttons = document.querySelectorAll('.button');

const btnPress = buttons.forEach(element => {
    element.addEventListener('click', function(e) {
        const btnTextValue = e.target.textContent;
        if (/^\d+$/.test(btnTextValue)) { 
        console.log('clicked');
        //add number to displayValue, update display
        updateDisplay(btnNumValue);
        };
    });
  

})
        

let displayValue = [];

// update display
function updateDisplay(num) {
    const displayElement = document.getElementById('display');
    displayValue.push(parseInt(num));
    displayElement.textContent = displayValue.join('');    
}

//TODO: thoughts on handling leading zero, test with real calculators
//TODO: max screen width, scrolling

