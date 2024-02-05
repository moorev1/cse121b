// Function Declaration - Addition Feature
function add(number1, number2) {
    return number1 + number2;
  }
  
  // Function Declaration - Check Your Understanding
  function addNumbers() {
    const num1 = parseFloat(document.getElementById('add1').value);
    const num2 = parseFloat(document.getElementById('add2').value);
    const result = add(num1, num2);
    document.getElementById('sum').value = result;
  }
  
  // Event listener for Add Numbers button
  document.getElementById('addNumbers').addEventListener('click', addNumbers);
  