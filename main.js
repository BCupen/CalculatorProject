let string = "";

const numberButtons = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const allClearButton = document.querySelector('.all-clear');
const deleteButton = document.querySelector('.delete');
const equalsButton = document.querySelector('#equals');

const screen = document.querySelector('.screen');

numberButtons.forEach(btn => btn.addEventListener('click', (e) => {
    string += e.target.textContent;
    screen.textContent = string;
}));

operators.forEach(btn => btn.addEventListener('click', (e) =>{

}));

allClearButton.addEventListener('click',clearScreen);

function clearScreen(){
    screen.textContent = "";
    string = "";
}
