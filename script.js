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
        currentOporator = this.value;
        currentNumberArray = [];
        selectedNumbers.push(result.textContent);
        console.log(selectedNumbers);
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
});

clear.addEventListener('click', function() {
    currentNumberArray = [];
    result.textContent = "0";
});

posNev.addEventListener('click', function() {
    currentNumber = currentNumber * -1;
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
