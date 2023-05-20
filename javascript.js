diplayValue = 0;
firstNum = null;
secondNum = null;
currentOperator = ''
overwrite = 'off'

const display = document.getElementById('trueDisplay');
const allNumbers = Array.from(document.querySelectorAll('.nums'));
const allOperators = Array.from(document.querySelectorAll('.operator'));
const enterOperation = document.querySelector('#equalTo');
const clearCalculator = document.querySelector('#clearButton');


function add(a,b){
    ans = parseFloat(a) + parseFloat(b);
    return ans;
}

function subtract(a,b) {
    ans = parseFloat(a) - parseFloat(b);
    return ans;
}

function multipy(a,b) {
    ans = parseFloat(a) * parseFloat(b);
    return ans;
}

function divide(a,b) {
    ans = parseFloat(a) / parseFloat(b);;
    return ans;
}   

function operate(operator, a, b) {
    if (operator == '+') {
        operation = add(a,b);
    } else if (operator == '-') {
        operation = subtract(a,b);
    } else if (operator == '*') {
        operation = multipy(a,b);
    } else if (operator == '/') {
        operation = divide(a,b);
    }
    return operation
}


function whenClickButton() {
    if (overwrite == 'on' && firstNum != null) {
        overwrite = 'off';
        display.textContent = this.textContent;
        secondNum = display.textContent;
        return
    } else if (overwrite == 'on') {
        overwrite = 'off';
        display.textContent = this.textContent;
        return
    } else if (firstNum == null) {
        if (display.textContent == '0') {
            display.textContent = this.textContent;
        } else {
            display.textContent = display.textContent + this.textContent;
        }
    } else {
        display.textContent += this.textContent;
        secondNum = display.textContent;
    }
}

allNumbers.forEach(num => num.addEventListener('click', whenClickButton))


function operateCalculator() {
    if (secondNum == null && currentOperator == '') {
        overwrite = 'on';
        currentOperator = this.textContent;
        firstNum = display.textContent;
    } else {
        overwrite = 'on';
        secondNum = display.textContent;
        display.textContent = operate(currentOperator, firstNum, secondNum);
        currentOperator = this.textContent;
        firstNum = display.textContent;
    }
}

allOperators.forEach(operators => operators.addEventListener('click', operateCalculator))

function whenEqualToBeClicked() {
    if (currentOperator == '' || firstNum == null || secondNum == null) {
        return
    } else {
        overwrite = 'on';
        secondNum = display.textContent;
        display.textContent = operate(currentOperator, firstNum, secondNum);
        currentOperator = this.textContent;
        firstNum = display.textContent;
        secondNum = null;
        currentOperator = '';
    }
}

enterOperation.addEventListener('click', whenEqualToBeClicked)

function whenResetToBeClicked() {
    display.textContent =0;
    firstNum = null;
    secondNum = null;
    currentOperator = '';
    overwrite = 'off';
}

clearCalculator.addEventListener('click', whenResetToBeClicked)
