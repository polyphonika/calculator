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
        
        // if negate button pressed
        if (btnTextValue==='+/-') {
            if (displayValue.length) {
                pressNum('-');
            }
        }
        
        // if backspace pressed
        if (btnTextValue==='⌫') {
            pressBackspace();
         }

         // if AC(Clear) pressed
        if (btnTextValue==='AC') {
            pressClear();
         }

    });  

})

function pressNum(btnTextValue) {

    // reset if post calculation so we start again
    if(!operator && postCalcFlag) {
        firstNumber=[];
        displayValue=[];
        postCalcFlag=false;
    }
    
    // no leading zeros
    if (!operator) {
        if (!(btnTextValue==0 && !firstNumber.length)) { //no leading zeroes
            if(btnTextValue!='-') {
                firstNumber.push((btnTextValue))
                updateDisplay(btnTextValue);
            } else {
                if (firstNumber[0]==='-') {
                    updateDisplay('-');
                    firstNumber.shift();
                    console.log('firsta: ' + firstNumber)
                } else {
                    updateDisplay('-');
                    firstNumber.unshift('-');
                    console.log('firstb: ' + firstNumber)
                }
            }
        }
    } else {
        if (!(btnTextValue==0 && !secondNumberNumber.length)) { //no leading zeroes
            if(btnTextValue!='-') {
                secondNumber.push((btnTextValue))
                updateDisplay(btnTextValue);
            } else {
                if (secondNumber[0]==='-') {
                    updateDisplay('-');
                    secondNumber.shift();
                } else {
                    updateDisplay('-');
                    secondNumber.unshift('-');
                }
            }
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

function pressBackspace() {
    // update display
    
    if (displayValue.length>1) {
        displayValue.pop();
        display.textContent = displayValue.join('');  
    } else {
        display.textContent = 0; 
    }

    // update number values
    if (!secondNumber.length) {
        firstNumber.pop();
    } else {
        secondNumber.pop();
    }
    
}

function pressClear() {
    firstNumber = []
    secondNumber = []
    operator;
    postCalcFlag;
    displayValue = [];

    display.textContent = 0;

}

function updateDisplay(char) {
    if (char==='-') {
        if (displayValue[0]==='-') {
            displayValue.shift();
            console.log('1: ' + displayValue);
        } else {
            displayValue.unshift('-');
            console.log('2: ' + displayValue);
        }
    } else {    
    displayValue.push(char);    
    }  

    display.textContent = displayValue.join('');  
}

function outputAll(label) {
    console.log('------------------------');
    console.log(label || 'unknown run');
    console.log('First Number: ' + firstNumber + ', ' + typeof firstNumber);
    console.log('Second Number: ' + secondNumber + ', ' + typeof secondNumber);
    console.log('Operator: ' + operator);
    console.log('Display Value: ' + displayValue + ', ' + typeof displayValue);
}






