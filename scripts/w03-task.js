// w03-task.js

// Addition Feature
function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  let addNumber1 = Number(document.querySelector('#add1').value);
  let addNumber2 = Number(document.querySelector('#add2').value);
  document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

// Subtraction Feature
// The code subtracts numbers correctly and uses function expressions.
const subtract = function (number1, number2) {
  return number1 - number2;
};

const subtractNumbers = () => {
  let subtractNumber1 = Number(document.querySelector('#subtract1').value);
  let subtractNumber2 = Number(document.querySelector('#subtract2').value);
  document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

// Multiplication Feature
// The code multiplies numbers correctly and uses arrow functions.
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
  let multiplyNumber1 = Number(document.querySelector('#factor1').value);
  let multiplyNumber2 = Number(document.querySelector('#factor2').value);
  document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

// Division Feature
function divide(number1, number2) {
  return number2 !== 0 ? number1 / number2 : 'Cannot divide by zero';
}

const divideNumbers = () => {
  let dividend = Number(document.querySelector('#dividend').value);
  let divisor = Number(document.querySelector('#divisor').value);
  document.querySelector('#quotient').value = divide(dividend, divisor);
};

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

// Selection Structures
document.querySelector('#getTotal').addEventListener('click', () => {
  let subtotal = Number(document.querySelector('#subtotal').value);
  let isMember = document.querySelector('#member').checked;
  let discount = isMember ? 0.2 : 0;
  let total = subtotal - subtotal * discount;
  // The output was formatted in this example format $34.45.
  document.querySelector('#total').textContent = `$ ${total.toFixed(2)}`;
});

// Array Methods - Functional Programming
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

document.querySelector('#array').textContent = numbersArray.join(', ');

// The odd values of the array of numbers from 1-13 are displayed using the .filter() method.
document.querySelector('#odds').textContent = numbersArray.filter(number => number % 2 !== 0).join(', ');

// The even values of the array of numbers from 1-13 are displayed using the .filter() method.
document.querySelector('#evens').textContent = numbersArray.filter(number => number % 2 === 0).join(', ');

// The sum of the array of numbers from 1-13 is displayed using the .reduce() method.
document.querySelector('#sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number);

// The sum of the array of numbers from 1-13 each multiplied by 2 is displayed using a .map() and a .reduce() method.
document.querySelector('#multiplied').textContent = numbersArray.map(number => number * 2).join(', ');

// The sum of the array of numbers from 1-13 each multiplied by 2 is displayed using a .map() and a .reduce() method.
document.querySelector('#sumOfMultiplied').textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);
