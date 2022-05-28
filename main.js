let string = "";
let currOperand = "";
let firstOperand ="";
let secondOperand = "";
let currOperator = "";

const numberButtons = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const allClearButton = document.querySelector('.all-clear');
const deleteButton = document.querySelector('.delete');
const equalsButton = document.querySelector('#equals');

const screen = document.querySelector('.screen');

numberButtons.forEach(btn => btn.addEventListener('click', (e) => {
    if(currOperand === "" && e.target.textContent === "."){
        currOperand = "0";
        string += "0";
    }
    currOperand += e.target.textContent;
    string += e.target.textContent;
    screen.textContent = string;
}));

operators.forEach(btn => btn.addEventListener('click', (e) =>{
    if(firstOperand!="" && currOperator===""){
        currOperator = e.target.textContent;
        string +=e.target.textContent;
        screen.textContent = string;
    }else if(firstOperand === ""){
        firstOperand = currOperand;
        currOperand = "";
        currOperator = e.target.textContent;
        string += e.target.textContent;
        screen.textContent = string;
    }else{
        secondOperand = currOperand;
        currOperand = "";
        firstOperand = operate(currOperator, firstOperand, secondOperand);
        currOperator = e.target.textContent;
        string = firstOperand + currOperator;
        screen.textContent = string;
    }
}));

allClearButton.addEventListener('click',clearScreen);

deleteButton.addEventListener('click', (e) =>{
    if(isOperator(string.charAt(string.length-1))){
        currOperator = "";
    }else{
        currOperand = currOperand.slice(0,-1);
    }
    string = string.slice(0, string.length - 1);
    screen.textContent = string;
})

equalsButton.addEventListener('click', (e)=>{
    secondOperand = currOperand;
    string = operate(currOperator, firstOperand, secondOperand);
    currOperand = string;
    screen.textContent = string;
    firstOperand = "";
    secondOperand = "";
})

function clearScreen(){
    screen.textContent = "";
    string = "";
    firstOperand = "";
    secondOperand = "";
    currOperand = "";
    currOperator = "";
}

function operate(operator, operand1, operand2){
    operand1 = parseFloat(operand1);
    operand2 = parseFloat(operand2);
    if(operator == "+"){
        return sum(operand1, operand2);
    }else if(operator == "-"){
        return subtract(operand1, operand2);
    }else if(operator == "*"){
        return multiply(operand1, operand2);
    }else{
        return divide(operand1, operand2);
    }
}

function sum(a, b){
    return a + b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function isOperator(char){
    if(char === "+" || char==="-" || char==="*" || char==="/")
        return true;

    return false;
}
