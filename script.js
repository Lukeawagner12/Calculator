let oporators = document.querySelectorAll(".oporator");
let equals = document.querySelector("#equals")
let numberButtons = document.querySelectorAll(".number-button");
let result = document.querySelector('.result');
let clear = document.querySelector('.clear');
let posNev = document.querySelector('.pos-nev');

let currentOporator = "";
let selectedNumbers = [];
let currentNumberArray = [];
let currentNumber = 0;

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
        currentNumberArray.push(this.value);
        currentNumber = currentNumberArray.join('');
        result.textContent = currentNumber;
        console.log(selectedNumbers);
    });
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
    }
    if(currentOporator == "-") {
        let answer = Number(numbers[0]) - Number(numbers[1]);
        result.textContent = answer;
    }
    if(currentOporator == "/") {
        let answer = Number(numbers[0]) / Number(numbers[1]);
        result.textContent = answer;
    }
    if(currentOporator == "*") {
        let answer = Number(numbers[0]) * Number(numbers[1]);
        result.textContent = answer;
    }
}

function calculation2() {
    let numbers = selectedNumbers.slice(-3);
    if(currentOporator == "+") {
        let answer = Number(numbers[1]) + Number(numbers[2]);
        result.textContent = answer;
    }
    if(currentOporator == "-") {
        let answer = Number(numbers[1]) - Number(numbers[2]);
        result.textContent = answer;
    }
    if(currentOporator == "/") {
        let answer = Number(numbers[1]) / Number(numbers[2]);
        result.textContent = answer;
    }
    if(currentOporator == "*") {
        let answer = Number(numbers[1]) * Number(numbers[2]);
        result.textContent = answer;
    }
}
