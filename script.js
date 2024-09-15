let result = 0;
let decCount = 0
let term = 0;

let num = [0, 0];
let operator = "";
let operatorCount = 0;

let tempNum = "";

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector('#six');
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");

const clear = document.querySelector('#clear');
const posNeg = document.querySelector("#posNeg");
const percentage = document.querySelector("#percentage");
const divsion = document.querySelector("#division");

const multiplication = document.querySelector("#multiplication");
const subtraction = document.querySelector("#subtraction");
const addition = document.querySelector("#addition");
const decimal = document.querySelector("#decimal");
const equals = document.querySelector("#equals");

const resultText = document.querySelector("#resultText");

divsion.onclick = divide;
multiplication.onclick = multiply;
subtraction.onclick = subtract;
addition.onclick = add;
equals.onclick = equalsFun;


clear.onclick = clearFunc;
posNeg.onclick = posNegFunc;
percentage.onclick = percentageFunc;
decimal.onclick = decimalFunc;

one.onclick = oneFun;
two.onclick = twoFun;
three.onclick = threeFun;
four.onclick = fourFun;
five.onclick = fiveFun;
six.onclick = sixFun;
seven.onclick = sevenFun;
eight.onclick = eightFun;
nine.onclick = nineFun;
zero.onclick = zeroFun;

function oneFun() {
    updateNum("1");
}

function twoFun() {
    updateNum("2");
}

function threeFun() {
    updateNum("3");
}

function fourFun() {
    updateNum("4");
}

function fiveFun() {
    updateNum("5");
}

function sixFun() {
    updateNum("6");
}

function sevenFun() {
    updateNum("7");
}

function eightFun() {
    updateNum("8");
}

function nineFun() {
    updateNum("9");
}

function zeroFun() {
    updateNum("0");
}

function equalsFun() {
    equate(operator);
}

function updateTerm() {
    term += 1;
    tempNum = "";
}

function add() {
    updateTerm();
    operator = "+";
    resultText.innerText = "0";

    if (operatorCount > 0) {
        equate(operator);
        term = 1;
    }

    operatorCount += 1;
}

function subtract() {
    updateTerm();
    operator = "-";
    resultText.innerText = "0";
    operatorCount += 1;
}

function multiply() {
    updateTerm();
    operator = "*";
    resultText.innerText = "0";
    operatorCount += 1;
}

function divide() {
    updateTerm();
    operator = "/";
    resultText.innerText = "0";
    operatorCount += 1;
}

function equate(operator) {
    if (operator === "+") {
        result = Number(num[0]) + Number(num[1]);
        resultText.innerText = result;
    }
    else if (operator === "-") {
        result = Number(num[0]) - Number(num[1]);
        resultText.innerText = result;
    }
    else if (operator === "*") {
        result = Number(num[0]) * Number(num[1]);
        resultText.innerText = result;
    }
    else if (operator === "/") {
        result = Number(num[0]) / Number(num[1]);
        resultText.innerText = result;
    }
    //term = 0;
    num = [result, 0];
    operatorCount = 0;
    console.log(num);
    tempNum = "";
}

function updateNum(digit) {
    tempNum += digit;
    resultText.innerText = tempNum;
    num[term % 2] = tempNum;
    console.log(num);
}

function clearFunc() {
    num = ["", ""];
    resultText.innerText = "0";
    term = 0;
    tempNum = "";
    operatorCount = 0;
}

function clearTerm() {
    tempNum = "";
}

function posNegFunc() {
    num[term % 2] = num[term % 2] * -1;
    resultText.innerText = num[term % 2];
}

function percentageFunc() {
    num[term % 2] = num[term % 2] / 100;
    resultText.innerText = num[term % 2];
}

function decimalFunc() {
    if (decCount === 0) {
        updateNum(".");
    }
    decCount += 1;
}