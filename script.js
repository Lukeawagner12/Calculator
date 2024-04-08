let oporators = document.querySelectorAll(".oporator");
let equals = document.querySelector("#equals")
let numberButtons = document.querySelectorAll(".number-button");
let result = document.querySelector('.result');
let clear = document.querySelector('.clear');
let posNev = document.querySelector('.pos-nev');
let decimal = document.querySelector('.decimal');
let backSpace = document.querySelector('.backspace');
let historyWrapper = document.querySelector('.history');
let historyBtn = document.querySelector('.history-btn');

let currentOporator = "";
let selectedNumbers = [];
let currentNumberArray = [];
let currentNumber = 0;
let history = [];

oporators.forEach(function(oporator) {
    oporator.addEventListener('click', function() {
        currentNumberArray = [];
        selectedNumbers.push(result.textContent);
        console.log(selectedNumbers);
        if(selectedNumbers.length > 1){
        calculation();
        }
        selectedNumbers.push(result.textContent);
        currentOporator = this.value;
    });
});

numberButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        if(currentNumberArray.length < 10) {
            currentNumberArray.push(this.value);
            currentNumber = currentNumberArray.join('');
            result.textContent = currentNumber;
            console.log(selectedNumbers);
        } else {
            console.log("Reached max number length.");
        }
    });
});

decimal.addEventListener('click', function() {
    // Check if decimal already exists
    let decimalCheck = result.textContent.split('');
    if(! decimalCheck.includes('.')) {
        currentNumberArray.push(this.value);
        currentNumber = currentNumberArray.join('');
        result.textContent = currentNumber;
    }
    console.log(decimalCheck);
});

backSpace.addEventListener('click', function() {
    console.log(currentNumberArray);
    currentNumberArray.pop();
    console.log(currentNumberArray);
    currentNumber = currentNumberArray.join('');
    result.textContent = currentNumber;
    if(currentNumberArray.length === 0) {
        result.textContent = 0;
    }

});

equals.addEventListener('click', function() {
    console.log(selectedNumbers);
    selectedNumbers.push(currentNumber);
    calculation();
    currentNumberArray = [];
    selectedNumbers = [];
});

clear.addEventListener('click', function() {
    currentNumberArray = [];
    selectedNumbers = [];
    result.textContent = "0";
});

posNev.addEventListener('click', function() {
    currentNumber = result.textContent * -1;
    result.textContent = currentNumber;
});

function calculation() {
    let numbers = selectedNumbers.slice(-2);
    if(currentOporator == "+") {
        let answer = Number(numbers[0]) + Number(numbers[1]);
        result.textContent = answer;
        history.push(numbers[0] + ' + ' + numbers[1] + ' = ' + answer);
        displayHistroy(answer);
    }
    if(currentOporator == "-") {
        let answer = Number(numbers[0]) - Number(numbers[1]);
        result.textContent = answer;
        history.push(numbers[0] + ' - ' + numbers[1] + ' = ' + answer);
        displayHistroy(answer);
    }
    if(currentOporator == "/") {
        let answer = Number(numbers[0]) / Number(numbers[1]);
        result.textContent = answer;
        history.push(numbers[0] + ' / ' + numbers[1] + ' = ' + answer);
        displayHistroy(answer);
    }
    if(currentOporator == "*") {
        let answer = Number(numbers[0]) * Number(numbers[1]);
        result.textContent = answer;
        history.push(numbers[0] + ' * ' + numbers[1] + ' = ' + answer);
        displayHistroy(answer);
    }
}

// History
function displayHistroy(answer) {
    let historyList = document.createElement('p');
    historyList.setAttribute('class', 'history-item');
    historyList.addEventListener('click', function() {
        result.textContent = answer;
    });
    historyWrapper.appendChild(historyList);
    historyList.textContent = history[history.length -1];
}

let isActive = false;
historyBtn.addEventListener('click', function() {
    if (!isActive){
        historyWrapper.classList.add('history-active');
        isActive = true;
        console.log(isActive);
    } else {
        historyWrapper.classList.remove('history-active');
        isActive = false;
        console.log(isActive);
    }
});