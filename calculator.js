let firstNumber = []
let secondNumber = []
let operator;
let postCalcFlag;
let displayValue = [];

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

/* create initial functions: add, subtract, divide, multiply */

const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const divide = (a,b) => a/b;
const multiply = (a,b) => a*b;

const operate = (a,o,b) => {
    const operations = {
        '+': add,
        '-': subtract,
        '÷': divide,
        'x': multiply
    };

    return operations[o] ? operations[o](a, b) : null;
}

// button listeners
const btnPress = buttons.forEach(element => {
    element.addEventListener('click', function(e) {
        const btnTextValue = e.target.textContent;
        
        // decimal point presses        
        if (btnTextValue==='.') {
            pressDecimal(e)
        }        
        
        // number presses
        if (/^[\d]$/.test(btnTextValue)) {
            pressNum(btnTextValue);
        }

        // if operator pressed
        if (/^[+\-x/÷]$/.test(btnTextValue)) {
            pressOperator(btnTextValue);           
        }      
        
        // if equals pressed
        if (btnTextValue==='=') {
           pressEquals();
        }        

    });  

})

function pressNum(btnTextValue) {
    console.log('num press');

    // reset if post calculation so we start again
    if(!operator && postCalcFlag) {
        firstNumber=[];
        displayValue=[];
        postCalcFlag=false;
    }
    
    // no leading zeros
    if (!operator) {
        if (!(btnTextValue==0 && !firstNumber.length)) { //no leading zeroes
            firstNumber.push((btnTextValue))
            updateDisplay(btnTextValue);
        }
    } else {
        if (!(btnTextValue==0 && !secondNumberNumber.length)) { //no leading zeroes
            secondNumber.push((btnTextValue));
            updateDisplay(btnTextValue);
        }
    }
}

function pressEquals(btnTextValue) {
    outputAll('testing multi ops');
    if(secondNumber.length) {
        firstNumber = operate(parseFloat(firstNumber.join('')),operator,parseFloat(secondNumber.join('')));
        // handle rounding or strange floats like 0.2*3 = 0.6000000000001;
        firstNumber = parseFloat(firstNumber.toFixed(14));
        // firstNumber = 
        displayValue = [];
        updateDisplay(firstNumber);    
        firstNumber = [firstNumber];
        secondNumber = [];
        postCalcFlag = true;
        
        // if another operator instead of equals, clear screen
        if (btnTextValue) {
            displayValue = [];
        }
        // reset operator if equals, or store the next operator
        operator = btnTextValue || '';
    }
}

function pressOperator(btnTextValue) {
    if(firstNumber.length) {        
        if(!operator) {
        operator = btnTextValue;
        displayValue=[]
        console.log('op press');
        } else if (operator && secondNumber.length) {
            pressEquals(btnTextValue);
        }
    }
    // updateDisplay(btnTextValue); 
}

function pressDecimal(e) {
    if (!displayValue.includes('.')) {
        pressNum('.');
        // e.target.style.backgroundColor = 'darkgray';    
    }
}
 
function updateDisplay(char) {
    // check to see if we should disable decimal button
    // checkDecimal();
    const displayElement = document.getElementById('display');
    displayValue.push(char);
    displayElement.textContent = displayValue.join('');    
}

function outputAll(label) {
    console.log('------------------------');
    console.log(label || 'unknown run');
    console.log('First Number: ' + firstNumber + ', ' + typeof firstNumber);
    console.log('Second Number: ' + secondNumber + ', ' + typeof secondNumber);
    console.log('Operator: ' + operator);
    console.log('Display Value: ' + displayValue + ', ' + typeof displayValue);
}






