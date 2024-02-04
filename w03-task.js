// w03-task.js

// Addition function
function addNumbers() {
    var num1 = parseFloat(document.getElementById("add1").value);
    var num2 = parseFloat(document.getElementById("add2").value);
    var sum = num1 + num2;
    document.getElementById("sum").value = sum;
}

// Subtraction function
function subtractNumbers() {
    var num1 = parseFloat(document.getElementById("subtract1").value);
    var num2 = parseFloat(document.getElementById("subtract2").value);
    var difference = num1 - num2;
    document.getElementById("difference").value = difference;
}

// Multiplication function
function multiplyNumbers() {
    var num1 = parseFloat(document.getElementById("factor1").value);
    var num2 = parseFloat(document.getElementById("factor2").value);
    var product = num1 * num2;
    document.getElementById("product").value = product;
}

// Division function
function divideNumbers() {
    var dividend = parseFloat(document.getElementById("dividend").value);
    var divisor = parseFloat(document.getElementById("divisor").value);
    
    if (divisor !== 0) {
        var quotient = dividend / divisor;
        document.getElementById("quotient").value = quotient.toFixed(2);
    } else {
        alert("Cannot divide by zero!");
    }
}

// Event listeners for buttons
document.getElementById("addNumbers").addEventListener("click", addNumbers);
document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);
document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);
document.getElementById("divideNumbers").addEventListener("click", divideNumbers);
