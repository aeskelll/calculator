//constants
const clearButton = document.querySelector(".clearButton");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const division = document.querySelector(".division");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const multiplication = document.querySelector(".multiplication");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const minus = document.querySelector(".minus");
const zero = document.querySelector(".zero");
const dot = document.querySelector(".dot");
const equal = document.querySelector(".equal");
const plus = document.querySelector(".plus");
const calcInput = document.querySelector("#calculation");

let clearDisplay = false;
let fTimeStamp;
let sTimeStamp;
let currentOperator;
let result;

one.addEventListener("click", () => {
  if (clearDisplay === true) {
    calcInput.value = "";
  }
  calcInput.value += 1;
  clearDisplay = false;
});
two.addEventListener("click", () => {
  if (clearDisplay === true) {
    calcInput.value = "";
  }
  calcInput.value += 2;
  clearDisplay = false;
});
three.addEventListener("click", () => {
  if (clearDisplay === true) {
    calcInput.value = "";
  }
  calcInput.value += 3;
  clearDisplay = false;
});
four.addEventListener("click", () => {
  if (clearDisplay === true) {
    calcInput.value = "";
  }
  calcInput.value += 4;
  clearDisplay = false;
});
five.addEventListener("click", () => {
  if (clearDisplay === true) {
    calcInput.value = "";
  }
  calcInput.value += 5;
  clearDisplay = false;
});
six.addEventListener("click", () => {
  if (clearDisplay === true) {
    calcInput.value = "";
  }
  calcInput.value += 6;
  clearDisplay = false;
});
seven.addEventListener("click", () => {
  if (clearDisplay === true) {
    calcInput.value = "";
  }
  calcInput.value += 7;
  clearDisplay = false;
});
eight.addEventListener("click", () => {
  if (clearDisplay === true) {
    calcInput.value = "";
  }
  calcInput.value += 8;
  clearDisplay = false;
});
nine.addEventListener("click", () => {
  if (clearDisplay === true) {
    calcInput.value = "";
  }
  calcInput.value += 9;
  clearDisplay = false;
});
zero.addEventListener("click", () => {
  if (clearDisplay === true) {
    calcInput.value = "";
  }
  calcInput.value += 0;
  clearDisplay = false;
});

clearButton.addEventListener("click", () => {
  calcInput.value = "";
  clearDisplay = false;
  fTimeStamp = "";
  sTimeStamp = "";
  currentOperator = "";
  result = "";
});

//math functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

//calculation function
function operate(a, operator, b) {
  switch (operator) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = subtract(a, b);
      break;
    case "*":
      result = multiply(a, b);
      break;
    case "/":
      result = divide(a, b);
      break;
    default:
      console.log("Nothing");
  }
  let roundedNumber = Math.round(1000 * result) / 1000;
  calcInput.value = roundedNumber;
}

//operators behavior
plus.addEventListener("click", () => {
  fTimeStamp = calcInput.value;
  currentOperator = "+";
  clearDisplay = true;
});
minus.addEventListener("click", () => {
  fTimeStamp = calcInput.value;
  currentOperator = "-";
  clearDisplay = true;
});
multiplication.addEventListener("click", () => {
  fTimeStamp = calcInput.value;
  currentOperator = "*";
  clearDisplay = true;
});
division.addEventListener("click", () => {
  fTimeStamp = calcInput.value;
  currentOperator = "/";
  clearDisplay = true;
});
equal.addEventListener("click", () => {
  sTimeStamp = calcInput.value;
  console.log(`stimestamp ${sTimeStamp}`);
  operate(+fTimeStamp, currentOperator, +sTimeStamp);
});
dot.addEventListener("click", () => {
  calcInput.value += ".";
});
